import React from 'react';
import './Main.scss';

import Description from '../Description/Description';
import Gallery from '../Gallery/Gallery';
import Consultation from '../Consultation/Consultation';
import Testimonials from '../Testimonials/Testimonials';
import Contact from '../Contact/Contact';

const Main = () => (
  <main>
    <Description />
    <Gallery />
    <Consultation />
    <Testimonials />
    <Contact />
  </main>
);

export default Main;
