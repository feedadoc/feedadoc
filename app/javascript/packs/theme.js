import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  props: {
    MuiPaper: {
      elevation: 0,
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
    fontWeight: 400,
    h1: {
      fontWeight: 800,
      fontSize: "1.6rem",
      "@media (min-width:600px)": {
        fontSize: "2rem",
      },
    },
    h2: {
      "@media (min-width:600px)": {
        fontSize: "1.4rem",
      },
      fontSize: "1rem",
    },
    h3: {
      fontWeight: "bold",
      fontSize: "1.2rem",
      letterSpacing: 0.5,
      textTransform: "uppercase",
      "@media (min-width:600px)": {
        fontSize: "1.8rem",
      },
    },
  },
  palette: {
    primary: {
      main: "#d50000",
      500: "#e17171",
    },
    secondary: {
      main: "#1F28CF",
      lightGray: "#E9EEF1",
      300: "#89C5CC",
      500: "#DDE3E9",
      800: "#C8CFD7",
    },
    text: {
      primary: "#000",
      secondary: "#191847",
      white: "#fff",
      paperContrast: "#3A7D88",
    },
    background: {
      default: "#ffffff",
      paper: "#ffffff",
      dark: "#191847",
      secondary: "#DADADA",
    },
  },
});

export default theme;
