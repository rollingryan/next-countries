import styled from "@emotion/styled";
import { ContainerProps } from "@mui/material";

import { Layout } from "../../pageStyles/appStyles";

export const LoaderLayout = styled(Layout)<ContainerProps>`
  position: absolute;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  &.contained {
    position: relative;
    height: auto;
  }
`;
