import styled from "@emotion/styled";
import {
  CardMedia as MuiCardMedia,
  CardActionArea as MuiCardActionArea,
  CardContent as MuiCardContent,
  Typography as MuiTypography,
  TypographyProps,
  CardContentProps,
  CardActionAreaProps,
  CardMediaProps,
} from "@mui/material";

const CardActionArea = styled(MuiCardActionArea)<CardActionAreaProps>`
  display: flex;
  flex-flow: row nowrap;
  align-items: stretch;
  justify-content: space-between;
`;

const CardContent = styled(MuiCardContent)<CardContentProps>`
  display: flex;
  flex-flow: column nowrap;
  width: 75%;
`;

const Price = styled(MuiTypography)<TypographyProps>`
  font-weight: 700;
`;

const CardMedia = styled(MuiCardMedia)<CardMediaProps>`
  width: 25%;
`;

const Styled = {
  CardContent,
  CardMedia,
  CardActionArea,
  Price,
};

export default Styled;
