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
  props: {
    MuiButton: {
      disableElevation: true,
      disableRipple: true,
    },
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: "25px",
        fontSize: "20px",
        letterSpacing: "0.5px",
        padding: "14px 32px",
      },
    },
  },
  buttons: {
    // Used to give button text the proper underline thickness
    text: {
      lineHeight: "1.3",
      borderBottom: "2px solid",
      borderBottomColor: "transparent",
    },
    primary: {
      backgroundColor: "#191847",
      color: "white",
      fontWeight: 600,
      textTransform: "none",
      "&:hover": {
        backgroundColor: "#191847",
      },
      "&:hover div": {
        borderBottomColor: "white",
      },
    },
    secondary: {
      backgroundColor: "white",
      color: "#9e9e9e",
      textTransform: "uppercase",
      "&:hover": {
        backgroundColor: "white",
      },
      "&:hover div": {
        borderBottomColor: "#9e9e9e",
      },
    },
    medical: {
      backgroundColor: "#d50000",
      color: "white",
      textTransform: "uppercase",
      "&:hover": {
        backgroundColor: "#c00000",
      },
      "&:hover div": {
        borderBottomColor: "white",
      },
    },
    volunteer: {
      backgroundColor: "#1f28cf",
      color: "white",
      textTransform: "uppercase",
      "&:hover": {
        backgroundColor: "#1b22b1",
      },
      "&:hover div": {
        borderBottomColor: "white",
      },
    },
  },
  links: {
    tertiary: {
      "&:hover": {
        textDecoration: "underline",
      },
    },
    textLink: {
      color: "black",
      fontSize: "1rem",
      fontWeight: "bold",
      "&:hover": {
        color: "#d50000",
      },
    },
  },
});

export default theme;
