import React from "react";
import styled from "@emotion/styled";
import { Colors } from "@constant/Color";
import { useDetailPokemon } from "api/pokedex.hooks";
import Image from "next/image";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

const Text = dynamic(() => import("@mui/material/Typography"));
const Stack = dynamic(() => import("@mui/material/Stack"));

const Cover = styled.div<{ borderColor: string }>`
  width: 15rem;
  height: 15rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1rem solid ${(p) => p.borderColor};
  border-radius: 50%;
  flex-direction: column;
  cursor: pointer;
  position: relative;
`;

interface CardEvolutionProperties {
  name: string;
  color: string;
}

const CardEvolution: React.FC<CardEvolutionProperties> = ({ name, color }) => {
  const router = useRouter();
  const { data } = useDetailPokemon(name);
  const { sprites } = data || {};

  return (
    <Cover onClick={() => router.push(`/${name}`)} borderColor={color}>
      <Image
        width="120"
        height="120"
        alt={name}
        src={
          sprites?.front_default ||
          "https://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/2480187d8bd9102.png"
        }
      />
      <Text
        position="absolute"
        paragraph
        textTransform="capitalize"
        textAlign="center"
        fontWeight="700"
        fontSize="1.5rem"
        style={{
          bottom: "-5rem",
        }}
      >
        {name?.replace("-", " ") || "-"}
      </Text>
    </Cover>
  );
};

export default CardEvolution;
