import styled from "@emotion/styled";
import { Paper, PaperProps } from "@mui/material";

import { breakpoints } from "../app/theme";

export const CountryWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  @media screen and (min-width: ${breakpoints.md}px) {
    align-items: flex-start;
  }
`;

export const NextImage = styled.div`
  position: relative;
  width: 35%;
  height: 46vw;
  overflow: hidden;
  opacity: 0.6;
  margin: 0 auto;
  clip-path: polygon(10% 0, 100% 0, 90% 100%, 0% 100%);

  @media screen and (min-width: ${breakpoints.sm}px) {
    width: 50%;
    height: 25vw;
  }
`;

export const CountryInfo = styled(Paper)<PaperProps>`
  width: 65%;
  padding: 1rem;
  border-radius: 0;
  text-align: left;

  @media screen and (min-width: ${breakpoints.sm}px) {
    width: 50%;
    padding: 2rem;
  }
`;
