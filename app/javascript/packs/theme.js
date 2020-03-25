import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 400,
    h1: {
      fontWeight: 800,
      fontSize: 36
    },
    h2: {
      fontSize: 24,
    },
  },
  palette: {
    primary: {
      main: "#d50000",
      500: "#e17171",
    },
    secondary: {
      main: "#1F28CF",
      100: '#E9EEF1',
      300: "#89C5CC",
      500: "#DDE3E9",
      800: "#C8CFD7",
    },
    text: {
      primary: '#000',
      secondary: '#191847',
      white: '#fff',
      paperContrast: '#3A7D88'
    },
    background: {
      default: '#ffffff',
      paper: '#ffffff',
      dark: '#191847',
      secondary: '#DADADA'
    }
  },
});

export default theme;