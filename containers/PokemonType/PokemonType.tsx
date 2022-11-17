import dynamic from "next/dynamic";
import CircleIcon from "@mui/icons-material/Circle";
import { usePokemonTypeList } from "api/pokedex.hooks";
import CircularProgress from "@mui/material/CircularProgress";
import Link from "next/link";
import { usePokemonType } from "api/pokedex.hooks";
import { useRouter } from "next/router";
import CircleOrnament from "./_components/CircleOrnament";

const Box = dynamic(() => import("@mui/material/Box"));
const CardPokemon = dynamic(() => import("./_components/CardPokemon"));
const Stack = dynamic(() => import("@mui/material/Stack"));
const Divider = dynamic(() => import("@mui/material/Divider"));
const Text = dynamic(() => import("@mui/material/Typography"));
const Paper = dynamic(() => import("@mui/material/Paper"));
const Container = dynamic(() => import("@mui/material/Container"));

const PokemonType = () => {
  const { data, isLoading } = usePokemonTypeList();
  const { results: typeList } = data || {};
  const router = useRouter();
  const { type = "normal" } = router.query;

  const {
    data: pokemonListType,
    isLoading: loadingPokemonList,
    isFetching,
  } = usePokemonType(type as string);
  const { pokemon: pokemonList } = pokemonListType || {};

  return (
    <Container>
      <CircleOrnament left="-25%" top="65rem" />
      <CircleOrnament right="-25%" top="10rem" />
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
          <Text fontSize="2.5rem" fontWeight="700">
            Pokemon with Type 1
          </Text>
          <Paper
            elevation={10}
            style={{
              borderRadius: "1.5rem",
              marginTop: "2rem",
              padding: "1rem",
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
              {pokemonList?.map((item, index) => (
                <CardPokemon
                  name={item.pokemon.name}
                  key={`card-pokemon-${index}`}
                />
              ))}
            </Stack>
          </Paper>
        </Box>
      </Stack>
    </Container>
  );
};

export default PokemonType;
