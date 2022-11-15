import { Colors } from "@constant/Color";
import styled from "@emotion/styled";

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 2rem;
  .content {
    width: 45%;
  }
`;

export const PokedexWrapper = styled.div`
  background-color: ${Colors.yellow50};
  padding: 5rem 0;
`;
