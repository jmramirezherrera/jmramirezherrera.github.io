import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline, Toolbar } from '@mui/material';
import Routing from './routes/Routing';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Routing />
      <NavBar />
      <Toolbar id="back-to-top-anchor" />
    </BrowserRouter>
  );
}

export default App;
