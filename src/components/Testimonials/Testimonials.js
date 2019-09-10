import React from 'react';
import CenterTitle from '../CenterTitle/CenterTitle';
import './Testimonials.scss';
import TestimonialsItem from './components/TestimonialsItem';

import imgJobs from '../../images/avatars/jobs.png';
import imgAlisher from '../../images/avatars/alisher.png';
import imgMordashov from '../../images/avatars/mordashov.png';

function Testimonials() {
  return (
    <section className="testimonials">
      <CenterTitle title="Testimonials" />
      <div className="container">
        <div className="testimonials__items">
          {/* 1 item */}
          <TestimonialsItem
            imgUrl={imgJobs}
            imgAlt="Steve Jobs photo"
            name="Steve Jobs"
            position="Founder Apple"
            description="Nice work, Certificates National Association of Realtors (USA)"
          />
          {/* ./ 1 item */}
          {/* 2 item */}
          <TestimonialsItem
            imgUrl={imgAlisher}
            imgAlt="Alisher Usmanov photo"
            name="Alisher Usmanov"
            position="Ural Steel"
            description="My soul is illuminated by an unearthly joy, as these
            beautiful spring morning, which I enjoy with all my heart. I'm all alone and blissfully
            happy in the local edge. As if created for the likes of me."
          />
          {/* ./ 2 item */}
          {/* 3 item */}
          <TestimonialsItem
            imgUrl={imgMordashov}
            imgAlt="Nikolay Mordashov photo"
            name="Nikolay Mordashov"
            position="Founder Mordashov Ink."
            description="Nice work, yes it's true. Certificates National Association of Realtors (USA)"
          />
          {/* ./ 3 item */}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
