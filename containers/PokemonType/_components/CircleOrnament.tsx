import { useMemo } from "react";
import styled from "@emotion/styled";
import { TypeOptions } from "@components/atoms/Type/Type.enum";
import { useRouter } from "next/router";

interface CircleOrnamentProperties {
  top?: string;
  bottom?: string;
  right?: string;
  left?: string;
  color?: string;
}

const Circle = styled.div<CircleOrnamentProperties>`
  position: absolute;
  width: 45rem;
  height: 45rem;
  border-radius: 50%;
  border: 8rem solid ${(p) => p.color};
  ${(p) => p.left && `left:${p.left};`}
  ${(p) => p.right && `right:${p.right};`}
  ${(p) => p.top && `top:${p.top};`}
  ${(p) => p.bottom && `bottom:${p.bottom};`}
  z-index:-1;
`;
const CircleOrnament: React.FC<CircleOrnamentProperties> = (props) => {
  const router = useRouter();
  const { type = "normal" } = router.query;
  const SelectedType = useMemo(() => {
    return TypeOptions.find((item) => item.name === type);
  }, [type]);
  return <Circle {...props} color={SelectedType?.color as string} />;
};

export default CircleOrnament;
