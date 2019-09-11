import React from 'react';
import './App.scss';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <div className="wrapper">
        <Header />
        <Main />
      </div>
      <Footer />
    </div>
  );
}

export default App;
