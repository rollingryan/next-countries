import styled from "@emotion/styled";
import { Alert as MuiAlert, AlertProps, ContainerProps } from "@mui/material";

import { LoaderLayout } from "../Loader/styles";

export const ErrorLayout = styled(LoaderLayout)<ContainerProps>``;

export const Alert = styled(MuiAlert)<AlertProps>`
  width: 80vw;
`;
