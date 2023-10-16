import { createTheme } from '@mui/material/styles';

const breakpoints = {
  values: {
    xs: 375,
    sm: 744,
    md: 850,
    lg: 1065,
    xl: 1440,
  }
};

export const darkTheme = createTheme({
  breakpoints: breakpoints,
  // ...theme,
  palette: {
    mode: 'dark',
  },
});

export const muiTheme = createTheme({
  breakpoints: breakpoints,
  // ...theme,
  palette: {
    mode: 'light',
  },
});