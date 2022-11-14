import dynamic from "next/dynamic";

const PokemonType = dynamic(() => import("@containers/PokemonType"));

const PokemonTypePage = () => <PokemonType />;

export default PokemonTypePage;
