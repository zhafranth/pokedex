import { Colors } from "@constant/Color";
import dynamic from "next/dynamic";
import { WrapperCard, Cover } from "./_components";
import { ResultPokemonProperties } from "api/pokedex.interface";
import { useDetailPokemon } from "api/pokedex.hooks";
import Image from "next/image";

const Text = dynamic(() => import("@mui/material/Typography"));
const Tag = dynamic(() => import("@mui/material/Chip"));

interface CardPokedexProperties {
  data: ResultPokemonProperties;
}

const CardPokedex: React.FC<CardPokedexProperties> = ({ data }) => {
  const { name, url } = data;
  const { data: detailPokemon } = useDetailPokemon(name);
  const { id, sprites } = detailPokemon || {};
  return (
    <WrapperCard>
      <Cover>
        <Image
          src={
            sprites?.front_default ||
            "https://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/2480187d8bd9102.png"
          }
          alt={name}
          width="150"
          height="150"
        />
      </Cover>
      <Text
        color={Colors.grey50}
        paragraph
        fontSize="1.25rem"
        fontWeight="700"
        fontFamily="inherit"
      >
        #{id?.toString()?.padStart(3, "0")}
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
