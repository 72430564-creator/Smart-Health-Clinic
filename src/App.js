import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import {BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Footer from './Components/Footer';
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import BookAppointment from './pages/Book Appointment'
import Services from './pages/Services';

function App() {
  return (
    <Router>
<div>
  <NavBar/>
  <Routes>
<Route path="/" Component={Home} />
<Route path="/about" Component={About} />
<Route path="/appointment" Component={BookAppointment} />
<Route path="/services" Component={Services} />
<Route path="/contact" Component={Contact} />
</Routes>
  <Footer/>
  
</div>
</Router>
  );
}

export default App;
