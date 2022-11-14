import dynamic from "next/dynamic";
import styled from "@emotion/styled";
import { Colors } from "@constant/Color";
import { ButtonProps } from "@mui/material/Button";

const ButtonMUI = dynamic(() => import("@mui/material/Button"));

const Container = styled(ButtonMUI)`
  background-color: ${Colors.yellow};
  color: #fff;
  font-weight: 700;
  box-shadow: none;
  border-radius: 0.875rem;
  font-family: inherit;
`;

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <Container variant="contained" {...rest}>
      {children}
    </Container>
  );
};

export default Button;
