import {
  StyledEngineProvider,
  ThemeProvider,
  CssBaseline,
  Typography,
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
      <Styled.Layout>
        <Typography variant="h3">Countries App</Typography>
        {children}
      </Styled.Layout>
    </ThemeProvider>
  </StyledEngineProvider>
);

export default Layout;
