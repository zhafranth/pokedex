import { Colors } from "@constant/Color";
import dynamic from "next/dynamic";
import { WrapperCard, Cover } from "./_components";
import { ResultPokemonProperties } from "api/pokedex.interface";
import { useDetailPokemon } from "api/pokedex.hooks";
import Image from "next/image";

const Text = dynamic(() => import("@mui/material/Typography"));
const Skeleton = dynamic(() => import("@mui/material/Skeleton"));
const Tag = dynamic(() => import("@components/atoms/Type"));

interface CardPokedexProperties {
  data: ResultPokemonProperties;
}

const CardPokedex: React.FC<CardPokedexProperties> = ({ data }) => {
  const { name } = data;
  const { data: detailPokemon, isLoading } = useDetailPokemon(name);
  const { id, sprites, types } = detailPokemon || {};

  if (isLoading) {
    return (
      <Skeleton
        variant="rounded"
        width="20rem"
        height="482px"
        style={{ margin: "auto" }}
      />
    );
  }
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
        {types?.map((item) => (
          <Tag value={item.type.name as string} key={`tag-${item.slot}`} />
        ))}
      </div>
    </WrapperCard>
  );
};

export default CardPokedex;
