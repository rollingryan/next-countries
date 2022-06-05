import styled from "@emotion/styled";
import { Container, ContainerProps } from "@mui/material";

import { breakpoints } from "../app/theme";

export const CountriesWrap = styled(Container)<ContainerProps>`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1.5rem;

  @media screen and (min-width: ${breakpoints.md}px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (min-width: ${breakpoints.lg}px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
