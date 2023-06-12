import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './globalStyles';
import { themeLigth } from './style/theme';
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider theme={themeLigth}>

      <GlobalStyles />

      <Home />

      <Footer />
    </ThemeProvider>
  );
}

export default App;
