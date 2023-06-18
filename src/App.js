import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from './globalStyles';
import { themeLigth } from './style/theme';
import Footer from './components/Footer';
import BrowserRoutes from './routes';

function App() {
  return (
    <ThemeProvider theme={themeLigth}>

      <GlobalStyles />

      <BrowserRouter>

        <BrowserRoutes />
        <Footer />
      </BrowserRouter>

    </ThemeProvider>
  );
}

export default App;
