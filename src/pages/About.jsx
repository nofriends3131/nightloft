import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="about-page">
      <div className="about-content">
        <h1 className="about-title">About Nightloft</h1>
        
        <div className="about-section">
          <h2>Who are we?</h2>
          <p>
           We are two highschool students who are passionate about programming and making clothes.
          </p>
        </div>
        <div className="about-section">
          <h2>Our Mission</h2>
          <p>
            At Nightloft, we're dedicated to bringing the pride of the Philippines in fitness clothings. We also aim to make fitness clothings more affordable and accessible to everyone.
          </p>
        </div>

        <div className="about-section">
          <h2>What We Offer</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>Affordable</h3>
              <p>We offer affordable fitness clothings for everyone.</p>
            </div>
            <div className="feature-card">
              <h3>Quality</h3>
              <p>We offer high quality fitness clothings for everyone.</p>
            </div>
            <div className="feature-card">
              <h3>Comfortable</h3>
              <p>We offer comfortable fitness clothings for everyone.</p>
            </div>
          </div>
        </div>

        <div className="about-section">
          <h2>Our Story</h2>
          <p>
            Our company started because of a business proposal project in our general mathematics class. We thought of this idea and we decided to make it a reality.
          </p>
        </div>

        <div className="about-section">
          <h2>Get Started</h2>
          <p>
            Ready to begin your fitness journey? Browse our collection 
            of fitness clothings and join our community of fitness enthusiasts.
          </p>
          <Link to="/products" className="cta-button">
            Explore Products
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About; 