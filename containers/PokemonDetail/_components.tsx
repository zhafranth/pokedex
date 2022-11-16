import { Colors } from "@constant/Color";
import styled from "@emotion/styled";

export const StatsWrapper = styled.div`
  width: 10rem;
  height: 10rem;
  border: 1rem solid ${(p) => p.color};
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  text-transform: capitalize;
`;
