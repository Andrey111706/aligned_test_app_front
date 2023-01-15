import { createTheme } from "@mui/material/styles";

const breakpoints = {
  values: {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536,
  },
};

const typography = {
  button: {
    textTransform: "none",
  },
  a: {
    textDecoration: "none",
  },
};

const palette = {
  primary: {
    main: "#7F4EE7",
  },
  grey: {
    main: "#3E4867",
  },
};

export default createTheme({
  breakpoints,
  typography,
  palette,
});
