import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import ThemeStyle from './styles/ThemeStyle';
import { Global } from '@emotion/react';
import globalStyles from './styles/globalStyles';

import { AlertContextProvider } from './components/contexts/AlertContext';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <Global styles={globalStyles} />
      <ThemeProvider theme={ThemeStyle}>
        <AlertContextProvider>
          <App />
        </AlertContextProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
