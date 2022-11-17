import { SpeciesProperties } from "api/pokedex.interface";
import dynamic from "next/dynamic";
import { useEvolutionChain } from "api/pokedex.hooks";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Colors, EvolutionColor } from "@constant/Color";

const SectionDetail = dynamic(
  () => import("@components/molecules/SectionDetail")
);
const Stack = dynamic(() => import("@mui/material/Stack"));
const CardEvolution = dynamic(() => import("./_components/CardEvolution"));

interface EvolutionPokemonProperties {
  data?: SpeciesProperties;
}

const EvolutionPokemon: React.FC<EvolutionPokemonProperties> = ({ data }) => {
  const { evolution_chain } = data || {};
  const { data: dataChain } = useEvolutionChain(evolution_chain?.url);

  const { chain } = dataChain || {};

  return (
    <SectionDetail title="Evolution">
      <Stack
        direction="row"
        divider={
          <ArrowForwardIcon
            style={{ fontSize: "5rem", color: Colors.neutral }}
          />
        }
        alignItems="center"
      >
        {chain?.species && (
          <CardEvolution
            name={chain?.species?.name}
            color={EvolutionColor.first}
          />
        )}
        {chain?.evolves_to?.length !== 0 && (
          <CardEvolution
            name={chain?.evolves_to[0]?.species?.name as string}
            color={EvolutionColor.second}
          />
        )}
        {chain?.evolves_to[0]?.evolves_to?.length !== 0 && (
          <CardEvolution
            name={chain?.evolves_to[0]?.evolves_to[0]?.species?.name as string}
            color={EvolutionColor.third}
          />
        )}
      </Stack>
    </SectionDetail>
  );
};

export default EvolutionPokemon;
