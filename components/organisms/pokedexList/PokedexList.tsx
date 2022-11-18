import { Colors } from "@constant/Color";
import dynamic from "next/dynamic";
import { PokedexWrapper } from "./_components";
import { PokedexListProperties } from "./PokedexList.interface";
import { useGetPokemonList } from "api/pokedex.hooks";
import { useMemo, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { SelectChangeEvent } from "@mui/material/Select";
import { limitOptions } from "@constant/Default";

const Container = dynamic(() => import("@mui/material/Container"));
const Typography = dynamic(() => import("@mui/material/Typography"));
const Grid = dynamic(() => import("@mui/material/Grid"));
const CardPokedex = dynamic(() => import("@components/molecules/CardPokedex"));
const Pagination = dynamic(() => import("@mui/material/Pagination"));
const Box = dynamic(() => import("@mui/material/Box"));
const Skeleton = dynamic(() => import("@mui/material/Skeleton"));
const Select = dynamic(() => import("@mui/material/Select"));
const MenuItem = dynamic(() => import("@mui/material/MenuItem"));

const PokedexList: React.FC<PokedexListProperties> = ({ ref }) => {
  const router = useRouter();
  const { page: queryPage, limit: queryLimit } = router.query;
  const [limit, setLimit] = useState(6);
  const [page, setPage] = useState(1);

  const { data, isLoading } = useGetPokemonList({
    limit,
    offset: page > 1 ? (page - 1) * limit : 0,
  });
  const { count, results } = data || {};

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

  const totalPage = useMemo(() => {
    if (count) {
      return Math.ceil(count / limit);
    }
  }, [count, limit]);

  useEffect(() => {
    if (queryPage) {
      setPage(+queryPage);
    }
    if (queryLimit) {
      setLimit(+queryLimit);
    }
  }, [queryPage, queryLimit]);

  return (
    <PokedexWrapper ref={ref}>
      <Container>
        <Typography
          variant="h4"
          textAlign="center"
          fontFamily="inherit"
          color={Colors.neutral}
          fontWeight="700"
          fontSize="2.5rem"
          lineHeight="3.75rem"
        >
          PokèDex
        </Typography>
        <Typography
          paragraph
          textAlign="center"
          fontFamily="inherit"
          color={Colors.neutral}
          fontSize="1.5rem"
        >
          All Generation totaling <br />
          {count || 0} Pokemon
        </Typography>

        <Grid container style={{ marginTop: "2rem" }} rowGap="2rem">
          {isLoading && (
            <>
              <Grid item xs={4}>
                <Skeleton
                  variant="rounded"
                  width="80%"
                  height="25rem"
                  style={{ margin: "auto" }}
                />
              </Grid>
              <Grid item xs={4}>
                <Skeleton
                  variant="rounded"
                  width="80%"
                  height="25rem"
                  style={{ margin: "auto" }}
                />
              </Grid>
              <Grid item xs={4}>
                <Skeleton
                  variant="rounded"
                  width="80%"
                  height="25rem"
                  style={{ margin: "auto" }}
                />
              </Grid>
            </>
          )}
          {results?.map((item, index) => (
            <Grid item xs={4} key={`pokemon-${index}`}>
              <CardPokedex data={item} />
            </Grid>
          ))}
        </Grid>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          marginTop="4rem"
        >
          {isLoading ? (
            <Skeleton
              variant="rounded"
              width="80%"
              height="4rem"
              style={{ margin: "auto" }}
            />
          ) : (
            <>
              <Box display="flex" alignItems="center" columnGap="1rem">
                <Typography
                  paragraph
                  fontWeight="700"
                  fontFamily="inherit"
                  color="#fff"
                  margin={0}
                >
                  Per Page :
                </Typography>
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
              <Typography
                paragraph
                fontWeight="700"
                fontFamily="inherit"
                color="#fff"
              >
                Total Data : {count}
              </Typography>
            </>
          )}
        </Box>
      </Container>
    </PokedexWrapper>
  );
};

export default PokedexList;
