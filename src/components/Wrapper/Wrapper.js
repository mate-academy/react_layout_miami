import React from 'react';
import Hero from '../Hero/Hero';
import SectionBest from '../SectionBest/SectionBest';
import SectionGallery from '../SectionGallery/SectionGallery';
import SectionConsultation from '../SectionConsultation/SectionConsultation';
import SectionTestimonials from '../SectionTestimonials/SectionTestimonials';
import SectionContact from '../SectionContact/SectionContact';

const Wrapper = () => {
  return (
    <div className="wrapper">
      <Hero />
      <SectionBest />
      <SectionGallery />
      <SectionConsultation />
      <SectionTestimonials />
      <SectionContact />
    </div>
  );
};

export default Wrapper;
