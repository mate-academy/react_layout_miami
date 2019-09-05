import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';

import './App.scss';

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
