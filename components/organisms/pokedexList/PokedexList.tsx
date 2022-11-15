import { Colors } from "@constant/Color";
import dynamic from "next/dynamic";
import { PokedexWrapper } from "./_components";
import { PokedexListProperties } from "./PokedexList.interface";

const Container = dynamic(() => import("@mui/material/Container"));
const Typography = dynamic(() => import("@mui/material/Typography"));
const Grid = dynamic(() => import("@mui/material/Grid"));
const CardPokedex = dynamic(() => import("@components/molecules/CardPokedex"));

const PokedexList: React.FC<PokedexListProperties> = ({ ref }) => {
  return (
    <PokedexWrapper ref={ref}>
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
        <Grid
          container
          style={{ marginTop: "2rem" }}
          rowGap="2rem"
          justifyContent="center"
        >
          <Grid item xs={4}>
            <CardPokedex />
          </Grid>
          <Grid item xs={4}>
            <CardPokedex />
          </Grid>
          <Grid item xs={4}>
            <CardPokedex />
          </Grid>
          <Grid item xs={4}>
            <CardPokedex />
          </Grid>
        </Grid>
      </Container>
    </PokedexWrapper>
  );
};

export default PokedexList;
