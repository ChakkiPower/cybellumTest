import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  typography: {
    fontFamily: ['"Noto Sans"', '"Ubuntu"', '"Helvetica Neue"', 'sans-serif'].join(','),
    h1: {
      fontWeight: '300',
      fontSize: 56,
      lineHeight: '64px',
      letterSpacing: '-0.5px',
    },
    subtitle2: {
      fontSize: '12px',
      fontWeight: '400',
      lineHeight: '16px',
      letterSpacing: '0.4px',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          height: '100%',
          scrollBehavior: 'smooth',
        },
        body: {
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
          fontFamily: ['"Noto Sans"', '"Ubuntu"', '"Helvetica Neue"', 'sans-serif'].join(','),
          height: '100%',
          overflowY: 'scroll',
        },
      },
    },
  },
  palette: {
    primary: {
      main: '#BAA182',
    },
    secondary: {
      main: '#2A2118',
      light: '#4D4D4D',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#f8f8f8',
    },
  },
});

export default theme;
