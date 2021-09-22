import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { theme } from './style/theme'
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Router>,
  document.getElementById('root')
);
