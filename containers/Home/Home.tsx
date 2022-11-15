import { Colors } from "@constant/Color";
import dynamic from "next/dynamic";
import { PokedexWrapper } from "./_components";
import { useRef } from "react";

const Container = dynamic(() => import("@mui/material/Container"));
const Typography = dynamic(() => import("@mui/material/Typography"));
const Hero = dynamic(() => import("@components/organisms/hero"));

const Home = () => {
  const pokedexRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Hero ref={pokedexRef} />
      <PokedexWrapper ref={pokedexRef}>
        <Container>
          <Typography
            variant="h4"
            textAlign="center"
            fontFamily="inherit"
            color={Colors.neutral}
            fontWeight="700"
            fontSize="2.5rem"
            lineHeight="3.75rem"
          >
            PokèDex
          </Typography>
          <Typography
            paragraph
            textAlign="center"
            fontFamily="inherit"
            color={Colors.neutral}
            fontSize="1.5rem"
          >
            All Generation totaling <br />
            999999 Pokemon
          </Typography>
        </Container>
      </PokedexWrapper>
    </>
  );
};

export default Home;
