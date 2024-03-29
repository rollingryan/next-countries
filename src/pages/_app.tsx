import React from "react";
import Head from "next/head";
import { store } from "../app/store/store";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import { useRouter } from "next/router";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Button, CssBaseline } from "@mui/material";
import { ThemeProvider, StyledEngineProvider } from "@mui/material/styles";

import theme from "../app/theme";
import * as Styled from "../pageStyles/appStyles";

const App = ({ Component, pageProps }: AppProps): React.ReactElement => {
  const router = useRouter();
  const { pathname } = router;
  const isHome = pathname === "/";

  return (
    <>
      <Head>
        <title>{isHome && "Home"} | Next Countries</title>
      </Head>

      <Provider store={store}>
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Styled.Layout>
              <Styled.Header>
                <Styled.Logo variant="h1" data-cy="logo">
                  <span className="logo--first">Next</span>
                  <span className="logo--second">Countries</span>
                </Styled.Logo>
                <Styled.Subtitle variant="h2" gutterBottom>
                  All your country needs in one place
                </Styled.Subtitle>
                {!isHome && (
                  <Button
                    onClick={() => router.back()}
                    startIcon={<ArrowBackIcon />}
                    size="small"
                    variant="outlined"
                  >
                    Back
                  </Button>
                )}
              </Styled.Header>
              <Component {...pageProps} />
            </Styled.Layout>
          </ThemeProvider>
        </StyledEngineProvider>
      </Provider>
    </>
  );
};

export default App;
