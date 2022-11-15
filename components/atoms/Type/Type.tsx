import dynamic from "next/dynamic";
import styled from "@emotion/styled";
import { TypeOptions } from "./Type.enum";
import { useMemo } from "react";
import { Colors } from "@constant/Color";

const Chip = dynamic(() => import("@mui/material/Chip"));

interface ChipWrapperProperties {
  bgColor: string;
}

interface TypeProperties {
  value: number | string;
}

const ChipWrapper = styled(Chip)<ChipWrapperProperties>(({ bgColor }) => ({
  backgroundColor: bgColor,
  width: "45%",
  fontFamily: "inherit",
  color: "#fff",
  textTransform: "capitalize",
}));

const Type: React.FC<TypeProperties> = ({ value }) => {
  const selectedEnum = useMemo(
    () => TypeOptions.find((item) => item.name === value),
    [value]
  );

  return (
    <ChipWrapper
      label={selectedEnum?.name}
      bgColor={selectedEnum?.color || Colors.grey}
    />
  );
};

export default Type;
