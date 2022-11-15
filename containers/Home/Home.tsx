import { Colors } from "@constant/Color";
import dynamic from "next/dynamic";
import { ContentWrapper } from "./_components";
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
          <div className="content">
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
    </>
  );
};

export default Home;
