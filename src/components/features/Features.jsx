import React from 'react';
import './Features.scss';

const Features = () => {
  return (
    <section className="features">
      <h2>Car Benefits</h2>
      <div className="feature-list">
        <div className="feature">
          <h3>Sustainable Energy</h3>
          <p>Eco-friendly and efficient electric vehicle.</p>
        </div>
        <div className="feature">
          <h3>Lifetime Warranty</h3>
          <p>Ensuring long-term peace of mind.</p>
        </div>
        <div className="feature">
          <h3>Easy Maintenance</h3>
          <p>Simple upkeep and service.</p>
        </div>
        <div className="feature">
          <h3>Government Program</h3>
          <p>Access to support programs for buyers.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
