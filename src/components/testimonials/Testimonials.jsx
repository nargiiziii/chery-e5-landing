import React from 'react';
import './Testimonials.scss';

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2>Customer Testimonials</h2>
      <div className="testimonial-list">
        <div className="testimonial">
          <p>"Every drive feels effortless. The transition is smooth, quiet, and powerful." </p>
          <h4>David Lee</h4>
        </div>
        <div className="testimonial">
          <p>"The responsiveness and control give me confidence on every road."</p>
          <h4>Maria Gonzalez</h4>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
