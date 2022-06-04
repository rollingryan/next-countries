import { createTheme, Theme } from "@mui/material/styles";

export const theme: Theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#0F9473",
    },
  },
});

export const breakpoints = theme.breakpoints.values;

export default theme;
