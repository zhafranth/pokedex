import { Colors } from "@constant/Color";
import dynamic from "next/dynamic";
import { WrapperCard, Cover } from "./_components";
import { ResultPokemonProperties } from "api/pokedex.interface";

const Text = dynamic(() => import("@mui/material/Typography"));
const Tag = dynamic(() => import("@mui/material/Chip"));

interface CardPokedexProperties {
  data: ResultPokemonProperties;
}

const CardPokedex: React.FC<CardPokedexProperties> = ({ data }) => {
  const { name } = data;
  return (
    <WrapperCard>
      <Cover></Cover>
      <Text
        color={Colors.grey50}
        paragraph
        fontSize="1.25rem"
        fontWeight="700"
        fontFamily="inherit"
      >
        #001
      </Text>
      <Text
        color={Colors.neutral}
        variant="h4"
        fontSize="2.5rem"
        fontWeight="700"
        fontFamily="inherit"
        style={{ textTransform: "capitalize" }}
      >
        {name}
      </Text>
      <div className="pokedex-type">
        <Tag style={{ width: "45%" }} label="Type 1" />
        <Tag style={{ width: "45%" }} label="Type 2" />
        <Tag style={{ width: "45%" }} label="Type 3" />
        <Tag style={{ width: "45%" }} label="Type 4" />
      </div>
    </WrapperCard>
  );
};

export default CardPokedex;
