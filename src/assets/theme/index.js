import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  typography: {
    fontFamily: 'DM Sans, sans-serif',
    fontWeight: 'normal',
  },
  palette: {
    primary: {
      light: '#28eea2',
      main: '#0ACF83',
      dark: '#07a367',
      contrastText: '#fff'
    }
  }
});

export default theme;