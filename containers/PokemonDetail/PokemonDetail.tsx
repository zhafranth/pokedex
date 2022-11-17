import { useDetailPokemon, useSpeciesPokemon } from "api/pokedex.hooks";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { StatsWrapper } from "./_components";
import { StatsColor } from "constant/Color";

const Container = dynamic(() => import("@mui/material/Container"));
const Text = dynamic(() => import("@mui/material/Typography"));
const PokemonInfo = dynamic(() => import("@components/organisms/pokemonInfo"));
const SectionDetail = dynamic(
  () => import("@components/molecules/SectionDetail")
);
const EvolutionPokemon = dynamic(
  () => import("@components/organisms/EvolutionPokemon")
);

const PokemonDetail = () => {
  const router = useRouter();
  const { name: queryName } = router.query;
  const { data: detailPokemon, isLoading } = useDetailPokemon(
    queryName as string
  );
  const { data: speciesPokemon } = useSpeciesPokemon(queryName as string);

  const { stats } = detailPokemon || {};

  return (
    <Container>
      <PokemonInfo data={detailPokemon} loading={isLoading} />
      <SectionDetail title="Stats">
        {stats?.map((item, index) => (
          <StatsWrapper
            key={`${item.stat.name}-${index}`}
            color={StatsColor[item.stat.name]}
          >
            <Text
              fontSize="3rem"
              fontWeight="700"
              variant="h4"
              style={{ color: StatsColor[item.stat.name] }}
            >
              {item.base_stat}
            </Text>
            <Text paragraph fontSize="0.8rem" fontWeight={500}>
              {item.stat.name.replace("-", " ")}
            </Text>
          </StatsWrapper>
        ))}
      </SectionDetail>
      <EvolutionPokemon data={speciesPokemon} />
    </Container>
  );
};

export default PokemonDetail;
