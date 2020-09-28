import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'

import Footer from './components/Footer';
import Header from './components/Header';


import Routes from './routes';
import GlobalStyles from './styles/global'

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes />
        <Footer />
        <GlobalStyles />
      </Router>
    </>
  );
}

export default App;
