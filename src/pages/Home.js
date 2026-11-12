import React, { useEffect } from "react"; 
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import BannerImage from "../assets/m1.jpg"; 
import doctor1 from "../assets/doctor1.jpg";
import doctor2 from "../assets/doctor2.jpg";
import doctor3 from "../assets/doctor3.jpg";
import doctor4 from "../assets/doctor4.jpg";
import doctor5 from "../assets/doctor5.jpg";
import doctor6 from "../assets/doctor6.jpg";
import doctor7 from "../assets/doctor7.jpg";
import doctor8 from "../assets/doctor8.jpg";
import doctor9 from "../assets/doctor9.jpg";
import doctor10 from "../assets/doctor10.jpg";
import Michael from "../assets/michael.jpg";
import Emily from "../assets/emily.jpg";
import Sarah from "../assets/sarah.jpg";
import '../styles/Home.css';


function Home() { 
return (
    <>
    <section 
    className="home d-flex align-items-center justify-content-center text-center text-white"
    style={{
        backgroundImage: `url(${BannerImage})`,
       backgroundSize:"cover",
minHeight: "100vh", 
position: "relative", 
}} >
<div 
className="position-absolute top-0 start-0 w-100 h-100" 
style={{ backgroundColor: "rgba(0, 0, 0, 0.55)" }} 
></div>
<div className="container position-relative"> 
<div className="headerContainer"> 
    <div className="row align-items-center">
    <div className="col-md-6 text-start">
    <h1 className="display-4 fw-bold mb-3 home-title">
        Welcome to Smart Health Clinic </h1> 
       
<p className="lead mb-4"> Your Health Is Our Priority.
    <br/>
    Explore our services and book your appointment easily.
    </p>
<Link to="/Services"> 
<button className="btn btn-primary btn-lg px-4"> 
Explore Our Services
</button> 
</Link> 
</div> 
  </div>
  </div>
</div>
</section>

<section className="specialists-section">
    <h2>Meet Our Specialists</h2>
    < p className="specialists-description">
    Meet our experienced doctors who care about your health.
    </p>

    <div className="specialists-container">
        <div className="specialists-card">
            <img src={doctor1} alt="Doctor 1"/>
            <h3>Dr.Alex</h3>
            <p1>Cardiologist</p1>
            <p>Monday - Wednesday </p>
            <p>9:00 AM - 2:00 PM</p>
        </div>
        <div className="specialists-card">
            < img src={doctor2} alt="Doctor 2"/>
            <h3>Dr.Adam</h3>
            <p1>Dermatologist</p1>
            <p>Tuesday - Thursday</p>
            <p > 10:00 AM - 4:00 PM</p>
        </div>
        <div className="specialists-card">
            <img src={doctor3} alt="Doctor 3" />
            <h3>Dr.Sarah</h3>
            <p1>General Physician</p1>
            <p>Monday - Friday </p>
            <p>9:00 AM - 3:00 PM</p>

        </div>
          <div className="specialists-card">
            <img src={doctor4} alt="Doctor 4"/>
            <h3>Dr.Maya</h3>
            <p1>Neurologist</p1>
             <p>Thursday - Saturday </p>
            <p>1:00 AM - 5:00 PM</p>
        </div>
          <div className="specialists-card">
            <img src={doctor5} alt="Doctor 5"/>
            <h3>Dr.James</h3>
            <p1>Orthopedic</p1>
             <p>Monday - Wednesday </p>
            <p>8:00 AM - 12:00 PM</p>
        </div>
        <div className="specialists-card">
            <img src={doctor6} alt="Doctor 6"/>
            <h3>Dr.Rawan</h3>
            <p1>Pediatric</p1>
             <p>Wednesday - Friday </p>
            <p>12:00 AM - 5:00 PM</p>
        </div>
        <div className="specialists-card">
            <img src={doctor7} alt="Doctor 7"/>
            <h3>Dr.Olivia</h3>
            <p1>Gynecologist</p1>
             <p>Monday - Thursday </p>
            <p>9:00 AM - 3:00 PM</p>
        </div>
        <div className="specialists-card">
            <img src={doctor8} alt="Doctor 8"/>
            <h3>Dr.Ahmad</h3>
            <p1>ENT Specialist</p1>
             <p>Tuesday - Friday </p>
            <p>8:00 AM - 11:00 PM</p>
        </div>
        <div className="specialists-card">
            <img src={doctor9} alt="Doctor 9"/>
            <h3>Dr.Alia</h3>
            <p1>Nutritionist</p1>
             <p>Monday - Wednesday </p>
            <p>8:00 AM - 12:00 PM</p>
        </div>
        <div className="specialists-card">
            <img src={doctor10} alt="Doctor 10"/>
            <h3>Dr.Ali</h3>
            <p1>Ophthalmologist</p1>
             <p>Wednesday - Saturday </p>
            <p>8:00 AM - 10:00 PM</p>
        </div>
    </div>
</section>
<section className="why-choose-section">
    <h2>Why Choose Us ?</h2>
    <p className="why-choose-description">
        Your health deserves the best care. We make your healthcare journey simple and comfortable.
    </p>
  <div className="why-choose-container">
    <div className="why-card">
        <div className="why-icon">⏰</div>
        <h3>Easy Booking</h3>
        <p>
         Book your appointment easily in just a few clicks.
        </p>
    </div>
    <div className="why-card">
        <div className="why-icon">❤️</div>
        <h3>Quality Care</h3>
        <p>
            Your health and comfort are always our priority.
        </p>
    </div>
    <div className="why-card">
        <div className="why-icon">🩺</div>
        <h3>Expert Doctors</h3>
        <p>
            Find the right medical care for your needs.
        </p>
    </div>
    <div className="why-card">
        <div className="why-icon">⏰</div>
        <h3>Save Your Time</h3>
        <p>
            Enjoy a simple and convenient booking experience.
        </p>
    </div>
  </div>
</section>

<section className="reviews-section">
    <div className="reviews-label">
        <span></span>
        <p>PATIENT REVIEWS</p>
        <span></span>
    </div>
    <h2> What Our Patients Say</h2>
    <p className="reviews-subtitle">
        Real stories from people who trust our care.
    </p>
    <div className="reviews-container">
        <div className="reviews-card">
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <p>
         "The doctors were kind and professional. I had a wonderful experience !"
            </p>
            <div className="reviews-author">
            <img src={Sarah} alt="Sarah Johnson" />
            </div>
            <h3>Sarah Johnson</h3>
            <span>Patient</span>
        </div>
        <div className="reviews-card">
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <p>
                "Booking my appointment was easy, and the services was excellent ."
            </p>
            <div className="reviews-author">
                <img src={Emily} alt="Emily Davis"/>
            </div>
            <h3>Emily Davis</h3>
            <span>Patient</span>
        </div>
        <div className="reviews-card">
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <p>
            " A clean clinic ,friendly staff,and excellent medical care."
            </p>
            <div className="reviews-author">
                <img src={Michael} alt="Michael Brown"/>
            </div>
            <h3>Michael Brown</h3>
            <span>Patient</span>
        </div>
    </div>
</section>


</>
); 
} 
export default Home;