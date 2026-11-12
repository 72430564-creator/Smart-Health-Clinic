import React from "react";
import "../styles/Services.css";
function Services() {
  return (
    <div className="services-page">

      <div className="services-header">
        <h1>Our Services</h1>
        <p>
          We provide quality healthcare services
          to keep you healthy and happy.
        </p>
      </div>

      <div className="container">
        <div className="row g-4">

          <div className="col-md-4">
            <div className="service-card">
              <h3>🩺 General Checkup</h3>
              <p>Regular health checkups to monitor your health.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="service-card">
              <h3>❤️ Heart Care</h3>
              <p>Care and support for a healthy heart.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="service-card">
              <h3>💊 Medical Treatment</h3>
              <p>Professional treatment for your health needs.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="service-card">
              <h3>🧪 Laboratory Tests</h3>
              <p>Reliable laboratory tests and medical analysis.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="service-card">
              <h3>👩‍⚕️ Doctor Consultation</h3>
              <p>Meet our doctors and get medical advice.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="service-card">
              <h3>🚑 Emergency Care</h3>
              <p>Medical assistance when you need urgent care.</p>
            </div>
          </div>
       <div className="col-md-4">
  <div className="service-card">
    <h3>🦷 Dental Care</h3>
    <p>Professional dental care to keep your teeth healthy.</p>
  </div>
</div>

<div className="col-md-4">
  <div className="service-card">
    <h3>👶 Pediatric Care</h3>
    <p>Special healthcare services for children.</p>
  </div>
</div>
      <div className="col-md-4">
  <div className="service-card">
    <h3>💉 Vaccination</h3>
    <p>Safe vaccinations to protect you and your family.</p>
  </div>
</div>
        </div>
      </div>

    </div>
  );
}

export default Services;
