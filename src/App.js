import React from 'react';
import './App.scss';
import './components/Media.scss';
import Header from './components/Header';
import Best from './components/Best';
import Gallery from './components/Gallery';
import Consultation from './components/Consultation';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="wrapper-footer">
      <Header />
      <Best />
      <Gallery />
      <Consultation />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
