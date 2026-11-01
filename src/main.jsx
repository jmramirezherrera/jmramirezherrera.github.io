import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import React from 'react';
import store from './app/store';
import AppThemeProvider from './themes/AppThemeProvider';
import { StyledEngineProvider } from '@mui/material/styles';
import App from './App';
import './main.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <AppThemeProvider>
        <StyledEngineProvider injectFirst>
          <App />
        </StyledEngineProvider>
      </AppThemeProvider>
    </Provider>
  </React.StrictMode>,
);
