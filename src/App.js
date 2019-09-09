import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Best from './components/Best/Best';
import Gallery from './components/Gallery/Gallery';
import Consultation from './components/Consultation/Consultation';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="page">
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
