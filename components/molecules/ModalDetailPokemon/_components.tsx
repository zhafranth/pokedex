import { Colors } from "@constant/Color";
import styled from "@emotion/styled";

export const Container = styled.div`
  width: 60%;
  height: 50%;
  background-color: #fff;
  margin: 15vh auto;
  outline: none;
  padding: 1rem 2rem;
  border-radius: 1.5rem;
`;

export const Cover = styled.div`
  min-width: 20rem;
  height: 20rem;
  background-color: ${Colors.grey50};
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;
