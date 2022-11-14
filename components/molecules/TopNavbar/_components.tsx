import styled from "@emotion/styled";
import { Colors } from "constant/Color";

export const Wrapper = styled.div`
  width: 100vw;
  height: 2rem;
  padding: 0 12vw;
  display: flex;
  justify-content: end;
  align-items: center;
  column-gap: 0.5rem;
  background-color: ${Colors.grey};
`;

export const Select = styled.select`
  outline: none;
  border: 0;
  background-color: transparent;
  font-family: inherit;
  color: #b7b8b8;
`;
