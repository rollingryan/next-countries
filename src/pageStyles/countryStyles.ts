import styled from "@emotion/styled";
import { Paper, PaperProps } from "@mui/material";

import { breakpoints } from "../app/theme";

export const CountryWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  @media screen and (min-width: ${breakpoints.md}px) {
    align-items: flex-start;
  }
`;

export const NextImage = styled.div`
  position: relative;
  width: 35%;
  height: 46vw;
  overflow: hidden;
  margin: 0 auto;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      rgba(18, 18, 18, 0) 0%,
      rgba(18, 18, 18, 1) 100%
    );
  }

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
