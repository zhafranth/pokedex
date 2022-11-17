import dynamic from "next/dynamic";

import Image from "next/image";
import { Colors } from "@constant/Color";
import { useDetailPokemon } from "api/pokedex.hooks";

const Box = dynamic(() => import("@mui/material/Box"));
const Type = dynamic(() => import("components/atoms/Type"));
const Stack = dynamic(() => import("@mui/material/Stack"));
const Divider = dynamic(() => import("@mui/material/Divider"));
const Text = dynamic(() => import("@mui/material/Typography"));

interface CardPokemonProperties {
  name: string;
}

const CardPokemon: React.FC<CardPokemonProperties> = ({ name }) => {
  const { data } = useDetailPokemon(name);
  const { sprites, types, id } = data || {};
  return (
    <Box>
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        alignItems="center"
        columnGap="2rem"
        padding="1.5rem 1rem"
      >
        <Image
          src={
            sprites?.front_default ||
            "https://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/2480187d8bd9102.png"
          }
          alt="pokemon"
          width={100}
          height={100}
          style={{ backgroundColor: Colors.grey50 }}
        />
        <Text fontWeight="700" fontSize="1.25rem" variant="body1">
          #{id?.toString()?.padStart(3, "0")}
        </Text>
        <Text
          fontWeight="700"
          fontSize="1.25rem"
          variant="body1"
          width="25%"
          textTransform="capitalize"
          textAlign="center"
        >
          {name?.replace("-", " ")}
        </Text>
        <Stack spacing="0.8rem" direction="row">
          {types?.map((item, index) => (
            <Type
              value={item?.type?.name}
              key={`type-${index}-${item?.type?.name}`}
              width="auto"
            />
          ))}
        </Stack>
      </Stack>
      <Divider orientation="horizontal" flexItem />
    </Box>
  );
};

export default CardPokemon;
