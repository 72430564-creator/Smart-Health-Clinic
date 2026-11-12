import { useState } from "react";
import contact from "../assets/c2.jpg";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
function Contact() {
const [state, setState] = useState({ fname: "", email: "", message: "" });

const handleChange = (e) => {
const { name, value } = e.target;
setState({ ...state, [name]: value });
};

const handleSubmit = (e) => {
e.preventDefault();
alert(JSON.stringify(state, null, 2));
};
return (
<div className="contact container-fluid py-5">

<div className="row align-items-stretch shadow-lg rounded-3 overflow-hidden bg-
light">

{/* Left side (image) */}
<div
className="col-md-6 d-none d-md-block p-0"
style={{
backgroundImage: `url(${contact})`,
backgroundSize: "cover",
backgroundPosition: "center",
}} ></div>

{/* Right side (form) */}
<div className="col-md-6 p-5 bg-white">
<h1 className="mb-2 text-primary fw-bold">
    We're Here to Help!
</h1>
<h4 className="mb-3 text-primary fw-bold">
    Get in Touch With Us
</h4>
<form onSubmit={handleSubmit}>
<div className="mb-3">
<label htmlFor="fname" className="form-label fw-semibold">
Full Name
</label>
<input
type="text"
className="form-control"
id="fname"
name="fname"
placeholder="Enter full name..."
onChange={handleChange}
required
/>
</div>
<div className="mb-3">
<label htmlFor="email" className="form-label fw-semibold">
Email
</label>
<input
type="email"
className="form-control"
id="email"
name="email"
placeholder="Enter email..."
onChange={handleChange}
required/>
</div>

<div className="mb-3">
<label htmlFor="message" className="form-label fw-semibold">
Message
</label>
<textarea
className="form-control"
id="message"
name="message"
rows="5"
placeholder="Enter message..."
onChange={handleChange}
required></textarea>
</div>
<div className="text-end">
<button type="submit" className="btn btn-primary px-4">
Send Message
</button>
</div>
</form>
</div>
</div>
</div>
);
}

export default Contact;