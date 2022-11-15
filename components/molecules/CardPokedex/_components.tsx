import styled from "@emotion/styled";
import Paper from "@mui/material/Paper";

export const WrapperCard = styled(Paper)`
  padding: 2.5rem 1.5rem;
  border-radius: 1.5rem;
  max-width: 20rem;
  margin: 0 auto;
  .pokedex-type {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
`;

export const Cover = styled.div`
  width: 100%;
  height: 275px;
  background-color: #b3b6b8;
  overflow: hidden;
`;
