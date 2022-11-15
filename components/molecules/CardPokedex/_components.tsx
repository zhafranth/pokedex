import styled from "@emotion/styled";
import Paper from "@mui/material/Paper";

export const WrapperCard = styled(Paper)`
  cursor: pointer;
  padding: 2.5rem 1.5rem;
  border-radius: 1.5rem;
  max-width: 20rem;
  margin: 0 auto;
  transition: all 0.5s linear;
  .pokedex-type {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
  &:hover {
    box-shadow: 0px 6px 6px -3px rgb(0 0 0 / 20%),
      0px 10px 14px 1px rgb(0 0 0 / 14%), 0px 4px 18px 3px rgb(0 0 0 / 12%);
  }
`;

export const Cover = styled.div`
  width: 100%;
  height: 275px;
  background-color: #b3b6b8;
  overflow: hidden;
`;
