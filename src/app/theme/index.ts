import { createTheme, Theme } from "@mui/material/styles";

export const theme: Theme = createTheme({
  palette: {
    mode: "dark",
  },
});

export const breakpoints = theme.breakpoints.values;

export default theme;
