import dynamic from "next/dynamic";
import styled from "@emotion/styled";
import { TypeOptions } from "./Type.enum";
import { useMemo } from "react";
import { Colors } from "@constant/Color";
import { useRouter } from "next/router";

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
  const router = useRouter();
  const { name } = router.query;

  const selectedEnum = useMemo(
    () => TypeOptions.find((item) => item.name === value),
    [value]
  );

  const gotoTypePage = () => {
    router.push(`/pokemon-type?type=${value}`);
  };

  if (name) {
    return (
      <ChipWrapper
        onClick={gotoTypePage}
        label={selectedEnum?.name}
        bgColor={selectedEnum?.color || Colors.grey}
        width={width}
      />
    );
  }

  return (
    <ChipWrapper
      label={selectedEnum?.name}
      bgColor={selectedEnum?.color || Colors.grey}
      width={width}
    />
  );
};

export default Type;
