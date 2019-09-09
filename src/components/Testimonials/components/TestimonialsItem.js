import React from 'react';

function TestimonialsItem({
  imgUrl, imgAlt, name, position, description,
}) {
  return (
    <div className="testimonials__item">
      <div className="testimonials__avatar">
        <img src={imgUrl} alt={imgAlt} className="testimonials__img" />
      </div>
      <div className="testimonials__name">{name}</div>
      <div className="testimonials__position">{position}</div>
      <p className="testimonials__description">{description}</p>
    </div>
  );
}

export default TestimonialsItem;
