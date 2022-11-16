import dynamic from "next/dynamic";
import Image from "next/image";
import { PokemonDetail } from "api/pokedex.interface";
import { useRouter } from "next/router";
import { Cover } from "./_components";

const Box = dynamic(() => import("@mui/material/Box"));
const Text = dynamic(() => import("@mui/material/Typography"));
const TextField = dynamic(() => import("@components/atoms/TextField"));
const Type = dynamic(() => import("@components/atoms/Type"));
const Link = dynamic(() => import("@components/atoms/Button"));

interface PokemonInfoProperties {
  data?: PokemonDetail;
  loading: boolean;
}

const PokemonInfo: React.FC<PokemonInfoProperties> = ({ data, loading }) => {
  const { abilities, height, name, sprites, types, weight } = data || {};
  const router = useRouter();

  if (loading) {
    return <p>loading...</p>;
  }
  return (
    <Box display="flex" columnGap="2rem" position="relative">
      <Cover>
        <Image
          src={
            sprites?.front_default ||
            "https://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/2480187d8bd9102.png"
          }
          width="250"
          height="250"
          alt={name as string}
        />
      </Cover>
      <Box flex="1">
        <Text
          variant="h2"
          fontWeight="700"
          fontSize="2.5rem"
          textTransform="capitalize"
          marginBottom="2rem"
        >
          {name}
        </Text>
        <Box>
          <Box display="flex" columnGap="2rem">
            <TextField value={weight} label="Weight" />
            <TextField value={height} label="Height" />
          </Box>
          <Box display="flex" columnGap="0.7rem">
            <TextField
              label="Abilities"
              value={
                <ul style={{ margin: "0" }}>
                  {abilities?.map((item, index) => (
                    <li key={`${item.ability.name}-${index}`}>
                      <Text paragraph textTransform="capitalize">
                        {item.ability.name}
                      </Text>
                    </li>
                  ))}
                </ul>
              }
            />
          </Box>
          <Box display="flex" columnGap="0.7rem" flexWrap="wrap">
            <TextField
              label="Type"
              value={
                <>
                  {types?.map((item) => (
                    <Type
                      value={item.type.name}
                      key={`${item.slot}-${item.type.name}`}
                      width="auto"
                    />
                  ))}
                </>
              }
            />
          </Box>
          {!router.query.id && (
            <Link
              onClick={() => router.push(`/${name}`)}
              style={{ position: "absolute", bottom: "0" }}
            >
              More Detail
            </Link>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default PokemonInfo;
