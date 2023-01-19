import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes/index.js';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './lib/themes/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
