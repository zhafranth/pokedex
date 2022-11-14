import dynamic from "next/dynamic";

const PokemonDetail = dynamic(() => import("@containers/PokemonDetail"));

const PokemonDetailPage = () => <PokemonDetail />;

export default PokemonDetailPage;
