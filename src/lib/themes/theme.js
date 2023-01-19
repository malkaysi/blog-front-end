import { createTheme } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#0d1651',
      light: '#403c7e',
      dark: '#000029',
    },
    secondary: {
      main: '#f50057',
    },
  },
});

export default theme;