import dynamic from "next/dynamic";
import CircleIcon from "@mui/icons-material/Circle";
import { usePokemonTypeList, usePokemonType } from "api/pokedex.hooks";
import CircularProgress from "@mui/material/CircularProgress";
import Link from "next/link";
import { useRouter } from "next/router";
import CircleOrnament from "./_components/CircleOrnament";
import { useMemo, useState, useEffect } from "react";
import { SelectChangeEvent } from "@mui/material/Select";
import { TypeOptions } from "@components/atoms/Type/Type.enum";
import { limitOptions } from "@constant/Default";

const Box = dynamic(() => import("@mui/material/Box"));
const CardPokemon = dynamic(() => import("./_components/CardPokemon"));
const Stack = dynamic(() => import("@mui/material/Stack"));
const Divider = dynamic(() => import("@mui/material/Divider"));
const Text = dynamic(() => import("@mui/material/Typography"));
const Paper = dynamic(() => import("@mui/material/Paper"));
const Container = dynamic(() => import("@mui/material/Container"));
const Select = dynamic(() => import("@mui/material/Select"));
const MenuItem = dynamic(() => import("@mui/material/MenuItem"));
const Pagination = dynamic(() => import("@mui/material/Pagination"));

const PokemonType = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(6);
  const { data, isLoading } = usePokemonTypeList();
  const { results: typeList } = data || {};
  const router = useRouter();
  const { type = "normal", page: queryPage, limit: queryLimit } = router.query;

  const {
    data: pokemonListType,
    isLoading: loadingPokemonList,
    isFetching,
  } = usePokemonType(type as string);
  const { pokemon: pokemonList } = pokemonListType || {};

  const SelectedType = useMemo(() => {
    return TypeOptions.find((item) => item.name === type);
  }, [type]);

  const list = useMemo(() => {
    const offset = page > 1 ? (page - 1) * limit : 0;
    if (pokemonList) {
      if (limit < 0) return pokemonList.slice(offset);
      return pokemonList.slice(offset, offset + limit);
    }
  }, [limit, pokemonList, page]);

  const handleChangeLimit = (event: SelectChangeEvent<unknown>) => {
    const { value } = event.target;
    setLimit(value as number);
    router.push(
      { query: { ...router.query, limit: value as number } },
      undefined,
      {
        scroll: false,
      }
    );
  };

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    event.preventDefault();
    setPage(page);
    router.push({ query: { ...router.query, page } }, undefined, {
      scroll: false,
    });
  };

  const totalPage = useMemo(() => {
    const total = pokemonList?.length;
    if (total) {
      return Math.ceil(total / limit);
    }
  }, [pokemonList, limit]);

  useEffect(() => {
    if (queryPage) {
      setPage(+queryPage);
    }
    if (queryLimit) {
      setLimit(+queryLimit);
    }
  }, [queryPage, queryLimit]);

  return (
    <Container style={{ marginBottom: "5rem" }}>
      <CircleOrnament
        left="-25%"
        top="65rem"
        color={SelectedType?.color as string}
      />
      <CircleOrnament
        right="-25%"
        top="10rem"
        color={SelectedType?.color as string}
      />
      <Stack
        divider={<Divider orientation="vertical" flexItem />}
        direction="row"
        display="flex"
        spacing={10}
      >
        <Box width="20%">
          <Text paragraph fontWeight="700">
            Pokemon Type
          </Text>
          <Stack alignItems="flex-start" justifyContent="start">
            {isLoading && <CircularProgress />}
            {typeList?.map((item, index) => (
              <Link
                href={`/pokemon-type?type=${item.name}`}
                key={`item-${index}`}
                style={{
                  textTransform: "capitalize",
                  marginBottom: "0.8rem",
                  color: type === item.name ? "#03A9F4" : "#7B8082",
                }}
              >
                <CircleIcon style={{ fontSize: "8px", marginRight: "4px" }} />
                {item.name}
              </Link>
            ))}
          </Stack>
        </Box>
        <Box flex="1">
          <Text fontSize="2.5rem" fontWeight="700" textTransform="capitalize">
            Pokemon with type {type.toString().replace("-", " ")}
          </Text>
          <Paper
            elevation={10}
            style={{
              borderRadius: "1.5rem",
              marginTop: "2rem",
              padding: "1rem",
              background: "rgba(255, 255, 255, 0.85)",
            }}
          >
            <Stack>
              {loadingPokemonList && (
                <CircularProgress style={{ margin: "auto" }} />
              )}
              {!isFetching && pokemonList?.length === 0 && (
                <Text variant="h4" fontWeight="600" textAlign="center">
                  Empty pokemon
                </Text>
              )}
              {list?.map((item, index) => (
                <CardPokemon
                  name={item.pokemon.name}
                  key={`card-pokemon-${index}`}
                />
              ))}
            </Stack>
            {pokemonList?.length !== 0 && (
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                margin="2rem 0"
              >
                <Box display="flex" alignItems="center" columnGap="1rem">
                  <Text
                    paragraph
                    fontWeight="700"
                    fontFamily="inherit"
                    margin={0}
                    color={SelectedType?.color}
                  >
                    Per Page :
                  </Text>
                  <Select defaultValue={limit} onChange={handleChangeLimit}>
                    {limitOptions.map((item) => (
                      <MenuItem value={item} key={`options-${item}`}>
                        {item}
                      </MenuItem>
                    ))}
                  </Select>
                </Box>
                <Pagination
                  count={totalPage}
                  onChange={handleChangePage}
                  page={page}
                />
                <Text
                  paragraph
                  fontWeight="700"
                  fontFamily="inherit"
                  margin="0"
                  color={SelectedType?.color}
                >
                  Total Data : {pokemonList?.length}
                </Text>
              </Stack>
            )}
          </Paper>
        </Box>
      </Stack>
    </Container>
  );
};

export default PokemonType;
