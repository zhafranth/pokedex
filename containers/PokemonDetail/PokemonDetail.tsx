import { useDetailPokemon } from "api/pokedex.hooks";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

const Container = dynamic(() => import("@mui/material/Container"));
const PokemonInfo = dynamic(() => import("@components/organisms/pokemonInfo"));

const PokemonDetail = () => {
  const router = useRouter();
  const { name: queryName } = router.query;
  const { data: detailPokemon, isLoading } = useDetailPokemon(
    queryName as string
  );

  const { abilities, height, name, sprites, types, weight } =
    detailPokemon || {};
  return (
    <Container>
      <PokemonInfo data={detailPokemon} loading={isLoading} />
    </Container>
  );
};

export default PokemonDetail;
