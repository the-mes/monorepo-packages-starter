import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GlobalStyle, ThemeProvider } from '@react95/core';

import App from './App';

ReactDOM.render(
  <ThemeProvider>
    <GlobalStyle />
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
