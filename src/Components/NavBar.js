import { useState } from "react";
import { Link } from "react-router-dom"; 
import logo from "../assets/logo2.png"; 
import "bootstrap/dist/css/bootstrap.min.css"; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import '../styles/NavBar.css'

const NavBar = () => { 
    return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm"> 
    <div className="container"> 
  <Link className="Clinic-brand d-flex align-items-center" to="/"> 
  <img
  src={logo} 
  alt="Logo" 
  height="106" 
  className="me-2"
  />
  <span className="fw-bold text-success">Smart Health Clinic</span>
  </Link>
  <button 
  className="navbar-toggler"
  type="button"
  data-bs-toggle="collapse"
  data-bs-target="#navbarNav"
  aria-controls="navbarNav"
  aria-expanded="false"
  aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
    <ul className="navbar-nav">
 <li className="nav-item">
    <Link className="nav-link" to="/">Home</Link>
 </li>
 <li className="nav-item">
    <Link className="nav-link" to="/About">About Us</Link>
 </li>
 <li className="nav-item">
    <Link className="nav-link" to="/Services">Services</Link>
 </li>
 <li className="nav-item">
    <Link className="nav-link" to="/Appointment">Book Appointment</Link>
 </li>
 <li className="nav-item">
    <Link className="nav-link" to="/Contact">Contact Us</Link>
 </li>
    </ul>
    
  </div>
  </div>
  </nav>
  );
};
export default NavBar;