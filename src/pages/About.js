 import React from "react";
 import {Link} from 'react-router-dom'
import "../styles/About.css";
import aboutClinic from "../assets/clinic.jpg";
import doctor from "../assets/c4.jpg";

function About() {
  return (
    <div className="about-page">

      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="hero-text">
            <h1>About Us</h1>
            <p>Smart Care. A Healthier Tomorrow.</p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="who-section container">
        <div className="row align-items-center">

          <div className="col-md-6">
            <img
              src={aboutClinic}
              alt="About Our Clinic "
              className="who-image"
            />
          </div>

          <div className="col-md-6">
            <h2>Who We Are</h2>
            <p>
              Smart Health Clinic is a modern healthcare clinic that combines
              medical care with technology to provide a better experience for
              our patients. Our goal is to make healthcare simple, comfortable,
              and accessible to everyone.
            </p>
          </div>

        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-section container">
        <div className="row g-4">

          <div className="col-md-6">
            <div className="info-card">
              <div className="card-icon">🎯</div>
              <div>
                <h3>Our Mission</h3>
                <p>
                  To improve the patient experience by providing high-quality
                  healthcare and smart digital solutions.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="info-card">
              <div className="card-icon">👁️</div>
              <div>
                <h3>Our Vision</h3>
                <p>
                  To create a modern healthcare environment where technology
                  and medical care work together.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Our Values */}
      <section className="values-section container">
        <h2 className="section-title">Our Values</h2>

        <div className="row text-center">

          <div className="col-6 col-md-3 value">
            <div className="value-icon">🛡️</div>
            <h5>Trust</h5>
          </div>

          <div className="col-6 col-md-3 value">
            <div className="value-icon">🤝</div>
            <h5>Respect</h5>
          </div>

          <div className="col-6 col-md-3 value">
            <div className="value-icon">🏅</div>
            <h5>Quality</h5>
          </div>

          <div className="col-6 col-md-3 value">
            <div className="value-icon">💡</div>
            <h5>Innovation</h5>
          </div>

        </div>
      </section>

      {/* Bottom CTA */}
      <section className="health-section container">
        <div className="row align-items-center">

          <div className="col-md-5">
            <img
              src={doctor}
              alt="Doctor"
              className="doctor-image"
            />
          </div>

          <div className="col-md-7">
            <h2>Together for a Healthier Life</h2>
            <p>
              At Smart Health Clinic, we are committed to your health and
              well-being, every step of the way.
            </p>

         <Link to="/appointment" className="appointment-button">
         Book Your Appointment
         </Link>
          </div>

        </div>
      </section>

    </div>
  );
}

export default About;
