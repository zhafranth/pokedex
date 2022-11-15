import { Colors } from "@constant/Color";
import dynamic from "next/dynamic";
import { WrapperCard, Cover } from "./_components";

const Text = dynamic(() => import("@mui/material/Typography"));
const Tag = dynamic(() => import("@mui/material/Chip"));

const CardPokedex = () => {
  return (
    <WrapperCard elevation={3}>
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
      >
        Poke Name
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
