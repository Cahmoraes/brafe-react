import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'

import Footer from './components/Footer';
import Header from './components/Header';
import AppProvider from './hooks';


import Routes from './routes';
import GlobalStyles from './styles/global'

function App() {
  return (
    <>
      <AppProvider>
        <Router>
          <Header />
          <Routes />
          <Footer />
          <GlobalStyles />
        </Router>
      </AppProvider>
    </>
  );
}

export default App;
