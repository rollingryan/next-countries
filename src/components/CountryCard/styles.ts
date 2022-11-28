import styled from "@emotion/styled";
import {
  Card as MuiCard,
  CardMedia as MuiCardMedia,
  CardActionArea as MuiCardActionArea,
  CardContent as MuiCardContent,
  Typography as MuiTypography,
  TypographyProps,
  CardContentProps,
  CardActionAreaProps,
  CardMediaProps,
  CardProps,
} from "@mui/material";
import { breakpoints } from "../../app/theme";

export const Card = styled(MuiCard)<CardProps>`
  border-radius: 0;
  clip-path: polygon(10% 0, 100% 0, 90% 100%, 0% 100%);
`;

export const CardActionArea = styled(MuiCardActionArea)<CardActionAreaProps>`
  display: flex;
  flex-flow: row nowrap;
  align-items: stretch;
  justify-content: space-between;
  text-align: left;
`;

export const CardMedia = styled(MuiCardMedia)<CardMediaProps>`
  position: relative;
  width: 35%;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      rgba(30, 30, 30, 0) 0%,
      rgba(30, 30, 30, 1) 100%
    );
  }
`;

export const CardContent = styled(MuiCardContent)<CardContentProps>`
  display: flex;
  flex-flow: column nowrap;
  width: 65%;
  padding-left: 0.75rem;

  .MuiTypography-h5 {
    font-size: 1.25rem;

    @media screen and (min-width: ${breakpoints.sm}px) {
      font-size: 1.5rem;
    }
  }
`;

export const CountryName = styled(MuiTypography)<TypographyProps>`
  font-size: 1.25rem;
`;

export const CountryCapital = styled(MuiTypography)<TypographyProps>`
  font-size: 1rem;
`;
