import dynamic from "next/dynamic";
import styled from "@emotion/styled";
import { TypeOptions } from "./Type.enum";
import { useMemo } from "react";
import { Colors } from "@constant/Color";

const Chip = dynamic(() => import("@mui/material/Chip"));

interface ChipWrapperProperties {
  bgColor: string;
  width?: string;
}

interface TypeProperties {
  value: number | string;
  width?: string;
}

const ChipWrapper = styled(Chip)<ChipWrapperProperties>(
  ({ bgColor, width }) => ({
    backgroundColor: bgColor,
    width: width || "45%",
    fontFamily: "inherit",
    color: "#fff",
    textTransform: "capitalize",
  })
);

const Type: React.FC<TypeProperties> = ({ value, width }) => {
  const selectedEnum = useMemo(
    () => TypeOptions.find((item) => item.name === value),
    [value]
  );

  return (
    <ChipWrapper
      label={selectedEnum?.name}
      bgColor={selectedEnum?.color || Colors.grey}
      width={width}
    />
  );
};

export default Type;
