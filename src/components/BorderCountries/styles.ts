import styled from "@emotion/styled";
import { Paper, PaperProps, Typography, TypographyProps } from "@mui/material";
import theme, { breakpoints } from "../../app/theme";

interface InnerWrapProps {
  containerLength: number;
}

export const Heading = styled(Typography)<TypographyProps>`
  text-transform: lowercase;
  font-size: 1.5rem;

  @media screen and (min-width: ${breakpoints.sm}px) {
    font-size: 2rem;
  }

  @media screen and (min-width: ${breakpoints.md}px) {
    font-size: 3rem;
  }

  @media screen and (min-width: ${breakpoints.lg}px) {
    font-size: 4rem;
  }

  .heading {
    &--first,
    &--second {
      position: relative;
      display: inline-block;
    }

    &--first {
      right: -0.2rem;
      font-weight: 900;
      clip-path: polygon(15% 0, 100% 0, 85% 100%, 0% 100%);
      color: ${theme.palette.text.disabled};

      @media screen and (min-width: ${breakpoints.md}px) {
        right: -0.6rem;
      }
    }

    &--second {
      left: -0.2rem;
      font-weight: 100;
      clip-path: polygon(10% 0, 100% 0, 90% 100%, 0% 100%);

      @media screen and (min-width: ${breakpoints.md}px) {
        left: -0.6rem;
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

export const BordersWrap = styled(Paper)<PaperProps>`
  border-radius: 0;
  margin-bottom: 2rem;
`;

export const ScrollWrap = styled.div`
  overflow-y: auto;
  width: 100%;
  display: block;
  padding: 1rem;
`;

export const InnerWrap = styled.div<InnerWrapProps>`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-evenly;
  width: ${(props) => props.containerLength}%;

  @media screen and (min-width: ${breakpoints.sm}px) {
    width: ${(props) => props.containerLength / 1.5}%;
  }

  @media screen and (min-width: ${breakpoints.lg}px) {
    width: ${(props) => props.containerLength / 2.5}%;
  }

  .border-country {
    display: inline-block;
    margin-right: 2rem;
    width: 100%;

    &:last-of-type {
      margin-right: 0;
    }
  }
`;
