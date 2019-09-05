import React from 'react';
import Hero from './Hero';
import SectionBest from './SectionBest';
import SectionGallery from './SectionGallery';
import SectionConsultation from './SectionConsultation';
import SectionTestimonials from './SectionTestimonials';

const Wrapper = () => {
  return (
    <div className='wrapper'>
      <Hero />
      <SectionBest />
      <SectionGallery />
      <SectionConsultation />
      <SectionTestimonials />
      <SectionConsultation />
    </div>
  );
};

export default Wrapper;
