import React from "react";
import "./HeroSection.scss";
import heroImage from "../../assets/images/hero-car-item.png";

const HeroSection = () => {
  return (
    <section className="hero">
      {/* фоновое слово */}
      <div className="hero-top">
        <p className="hero-subtitle">ALL NEW OMODA E5 – EV</p>
        <p className="left-text">Beyond electric. Emotion in motion</p>
      </div>

      <h1 className="hero-bg-text">CHERY</h1>

      {/* машина */}
      <img className="hero-car" src={heroImage} alt="Chery Omoda E5" />

      {/* нижний контент */}
      <div className="hero-bottom">
        <div className="hero-left">
          <p className="first-desc">
            A new era pf intelligent mobility where design meets innovation.
            Drive electric, go beyond boundaries.
          </p>
          <button>ORDER NOW</button>
        </div>

        <p className="second-desc">
          BUILT FOR MOTION MADE FOR FUTURE BORN TO LAST
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
