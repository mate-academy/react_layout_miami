import React from 'react';
import About from './components/About/About';
import Gallery from './components/Gallery/Gallery';
import Consultation from './components/Consultation/Consultation';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';

const Main = () => (
  <main className="main">
    <About />
    <Gallery />
    <Consultation />
    <Testimonials />
    <Contact />
  </main>
);

export default Main;
