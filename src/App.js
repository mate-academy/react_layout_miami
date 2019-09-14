import React from 'react';
import './App.scss';
import Hero from "./components/hero/hero";
import Best from "./components/best/best";
import Gallery from "./components/gallery/gallery";
import Consultation from "./components/consultation/consultation";
import Testimonials from "./components/testimonials/testimonials";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div>
      <div className="wrapper">
        <Hero />
        <Best />
        <Gallery />
        <Consultation />
        <Testimonials />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
