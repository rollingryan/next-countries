import styled from "@emotion/styled";
import {
  Container,
  ContainerProps,
  Typography,
  TypographyProps,
} from "@mui/material";

import theme, { breakpoints } from "../app/theme";

export const Layout = styled(Container)<ContainerProps>`
  height: 100vh;
  text-align: center;
`;

export const Header = styled.div`
  margin-bottom: ${theme.spacing(4)};
`;

export const Logo = styled(Typography)<TypographyProps>`
  text-transform: lowercase;
  font-size: 3rem;

  @media screen and (min-width: ${breakpoints.sm}px) {
    font-size: 4rem;
  }

  @media screen and (min-width: ${breakpoints.md}px) {
    font-size: 5rem;
  }

  @media screen and (min-width: ${breakpoints.lg}px) {
    font-size: 6rem;
  }

  .logo {
    &--first,
    &--second {
      position: relative;
      display: inline-block;
    }

    &--first {
      right: -0.25rem;
      font-weight: 900;
      clip-path: polygon(20% 0, 100% 0, 80% 100%, 0% 100%);
      color: ${theme.palette.text.disabled};

      @media screen and (min-width: ${breakpoints.sm}px) {
        right: -0.5rem;
      }

      @media screen and (min-width: ${breakpoints.md}px) {
        right: -0.75rem;
      }
    }

    &--second {
      left: -0.25rem;
      font-weight: 100;
      clip-path: polygon(10% 0, 100% 0, 90% 100%, 0% 100%);

      @media screen and (min-width: ${breakpoints.sm}px) {
        left: -0.5rem;
      }

      @media screen and (min-width: ${breakpoints.md}px) {
        left: -0.75rem;
      }

      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        width: 1rem;
        background: linear-gradient(
          90deg,
          rgba(18, 18, 18, 0.9) 30%,
          rgba(18, 18, 18, 0) 100%
        );
        display: block;
        overflow: hidden;

        @media screen and (min-width: ${breakpoints.sm}px) {
          width: 1.5rem;
        }

        @media screen and (min-width: ${breakpoints.md}px) {
          width: 2rem;
        }
      }
    }
  }
`;
