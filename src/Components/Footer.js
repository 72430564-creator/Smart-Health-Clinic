import React from "react"; 
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap"; 
import InstagramIcon from "@mui/icons-material/Instagram"; 
import TwitterIcon from "@mui/icons-material/Twitter"; 
import FacebookIcon from "@mui/icons-material/Facebook"; 
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "bootstrap/dist/css/bootstrap.min.css"; 
import "bootstrap/dist/js/bootstrap.bundle.min.js"; 
import "../styles/Footer.css";
const Footer = () => { 
return(
  <footer className="bg-primary text-light py-4 mt-auto"> 
  <Container className="text-center mt-auto py-4"> 
    <div className="row text-start g-4 mb-4">

  <div className="col-md-3">
    <h3>Smart Health Clinic</h3>
    <p>Your health is our priority.
     We are here to provide the best 
     care for you and your family.
    </p>
  </div>
<div className="col-md-3">
    <h5>Quick Links</h5>

    <p><Link to="/home">› Home</Link></p>
    <p><Link to="/about">› About</Link></p>
    <p><Link to="/services">› Services</Link></p>
    <p><Link to="/book-appointment">› Book Appointment</Link></p>
    <p><Link to="/contact">› Contact Us</Link></p>
</div>

  <div className="col-md-3">
    <h5>Contact Us</h5>
    <p> 📞Phone: +961 XX XXX XXX</p>
    <p> ✉️Email: info@smarthealth.com</p>
    <p> 📍Location:Beirut,Lebanon</p>
  </div>
<div className="col-md-3">
    <h5>Newsletter</h5>

    <p>Subscribe to our newsletter for the latest health tips.</p>

    <div className="input-group">
        <input
            type="email"
            className="form-control"
            placeholder="Your Email Address"
        />

        <button className="btn btn-light">
            Subscribe
        </button>
    </div>
</div>
  
</div>
    <div className="mb-3"> 
  <a href="#" className="text-light mx-2"> 
    <InstagramIcon fontSize="medium" /> 
    </a>
    <a href="#" className="text-light mx-2"> 
    <TwitterIcon fontSize="medium" /> 
    </a>
    <a href="#" className="text-light mx-2"> 
       <FacebookIcon fontSize="medium" /> 
       </a>
       <a href="#" className="text-light mx-2"> 
        <LinkedInIcon fontSize="medium" /> 
        </a> 
        </div>
        <p className="mb-0"> 
            &copy; 2026 <strong> Smart Health Clinic.All Rights Reserved.</strong> 
            </p>
            </Container>
            </footer>
);
};
export default Footer;