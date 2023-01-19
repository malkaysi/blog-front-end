import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes/index.js';

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
