import { Colors } from "@constant/Color";
import dynamic from "next/dynamic";
import { ContentWrapper, PokedexWrapper } from "./_components";
import Image from "next/image";
import ImageContent from "assets/home-content.png";

const Button = dynamic(() => import("components/atoms/Button"));
const Container = dynamic(() => import("@mui/material/Container"));
const Typography = dynamic(() => import("@mui/material/Typography"));

const Home = () => {
  return (
    <>
      <Container>
        <ContentWrapper>
          <div>
            <Typography
              variant="h4"
              fontFamily={"inherit"}
              fontWeight="700"
              color={Colors.neutral}
              fontSize="3.25rem"
              marginBottom="1rem"
            >
              All the Pokémon data youll ever need in one place!
            </Typography>
            <Typography
              paragraph
              fontFamily={"inherit"}
              marginBottom="2rem"
              fontSize="1.25rem"
            >
              Thousands of data compiled into one place
            </Typography>
            <Button>Check PokèDex</Button>
          </div>
          <Image src={ImageContent} alt="pokemon group" />
        </ContentWrapper>
      </Container>
      <PokedexWrapper>
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
