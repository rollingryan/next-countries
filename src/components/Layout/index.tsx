import {
  StyledEngineProvider,
  ThemeProvider,
  CssBaseline,
} from "@mui/material";

import theme from "../../app/theme";
import * as Styled from "./styles";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => (
  <StyledEngineProvider injectFirst>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Styled.Layout>{children}</Styled.Layout>
    </ThemeProvider>
  </StyledEngineProvider>
);

export default Layout;
