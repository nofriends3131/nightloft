import { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaRocket, FaSatellite } from 'react-icons/fa';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Message sent to the cosmos! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="contact-page">
      <div className="contact-stars"></div>
      <div className="contact-nebula"></div>
      <div className="floating-asteroids">
        <div className="asteroid asteroid-1"></div>
        <div className="asteroid asteroid-2"></div>
        <div className="asteroid asteroid-3"></div>
      </div>
      
      <div className="contact-container">
        <div className="contact-header">
          <h1 className="contact-title">
            <FaRocket className="rocket-icon" />
            Contact Us
            <FaSatellite className="satellite-icon" />
          </h1>
          <p className="contact-subtitle">Reach out to us across the cosmic void</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">
                <FaEnvelope />
              </div>
              <div className="info-content">
                <h3>Email</h3>
                <p>nightloftclothing@gmail.com</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <FaPhone />
              </div>
              <div className="info-content">
                <h3>Phone</h3>
                <p>+63 932 363 9577</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="info-content">
                <h3>Location</h3>
                <p>Rosales, Pangasinan</p>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="What's this about?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us what's on your mind..."
                  rows="5"
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                <FaRocket className="btn-icon" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact; 