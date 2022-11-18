import styled from "@emotion/styled";

interface CircleOrnamentProperties {
  top?: string;
  bottom?: string;
  right?: string;
  left?: string;
  color: string;
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
  return <Circle {...props} />;
};

export default CircleOrnament;
