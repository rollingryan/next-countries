import { createTheme, Theme } from "@mui/material/styles";

export const theme: Theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#006a94",
    },
  },
});

export const breakpoints = theme.breakpoints.values;

export default theme;
