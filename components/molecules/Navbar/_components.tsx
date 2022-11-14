import { Colors } from "@constant/Color";
import styled from "@emotion/styled";
import NextLink, { LinkProps } from "next/link";

interface LinkProperties extends LinkProps {
  active?: boolean;
}

export const Wrapper = styled.div`
  display: flex;
  column-gap: 2.5rem;
  align-items: center;
  padding: 1rem 0;
`;

export const Link = styled(NextLink)<LinkProperties>(({ active }) => ({
  color: active ? Colors.yellow : Colors.neutral,
  fontWeight: active ? "700" : "400",
  borderBottom: `1px solid ${active ? "#ECEDED" : "transaparent"}`,
}));
