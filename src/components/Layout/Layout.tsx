import {
  StyledEngineProvider,
  ThemeProvider,
  CssBaseline,
  Container,
} from "@mui/material";

import theme from "../../app/theme";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => (
  <StyledEngineProvider injectFirst>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>{children}</Container>
    </ThemeProvider>
  </StyledEngineProvider>
);

export default Layout;
