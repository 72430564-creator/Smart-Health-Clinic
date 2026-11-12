import React from "react";
import "../styles/BookAppointment.css";
import appointmentImage from  "../assets/c6.jpg"
import {useState} from "react";

function BookAppointment() {
  const [appointments, setAppointments] = useState(() => {
  const savedAppointments = localStorage.getItem("appointments");
  return savedAppointments ? JSON.parse(savedAppointments) : [];
});

const handleSubmit = (e) => {
  e.preventDefault();

  const form = e.target;

  const appointment = {
    fullName: form.fullName.value,
    email: form.email.value,
    doctor: form.doctor.value,
    date: form.date.value,
    time: form.time.value,
    message: form.message.value
  };

  const updatedAppointments = [...appointments, appointment];

  setAppointments(updatedAppointments);

  localStorage.setItem(
    "appointments",
    JSON.stringify(updatedAppointments)
  );

  alert("Your appointment has been booked successfully!");

  form.reset();
};
    
    

  
  return (
    <div className="appointment-page">

      <div className="appointment-heading">
        <h1>Book Appointment</h1>

        <div className="heart-divider">
          <span></span>
          <span className="heart">♥</span>
          <span></span>
        </div>

        <p>
          Your health matters. Schedule your visit with our professional doctors.
        </p>
      </div>

      <div className="container">
        <div className="appointment-card row">

          <div className="col-lg-5 appointment-image">
            <img
              src={appointmentImage}
              alt="Book Appointment"
            />

            <div className="image-text">
              <h2>Take Care of Your Health</h2>
              <p>We are here to care for you.</p>
            </div>
          </div>
          <div className="col-lg-7 appointment-form">
<form onSubmit={handleSubmit}>

  <div className="mb-3">
    <label className="form-label">Full Name</label>
    <input
      type="text"
      id="fullName"
      name="fullName"
      className="form-control"
      placeholder="Enter your full name"
      required
    />
  </div>

  <div className="mb-3">
    <label className="form-label">Email Address</label>
    <input
      type="email"
      id="email"
      name="email"
      className="form-control"
      placeholder="Enter your email"
      required
    />
  </div>

  <div className="mb-3">
    <label className="form-label">Select Doctor</label>
    <select
      className="form-select"
      name="doctor"
      required
    >
      <option value="">Choose a doctor</option>
      <option>Dr. Alex</option>
      <option>Dr. Adam</option>
      <option>Dr. Sara</option>
      <option>Dr. Maya</option>
      <option>Dr. James</option>
      <option>Dr. Rawan</option>
      <option>Dr. Olivia</option>
      <option>Dr. Ahmad</option>
      <option>Dr. Alia</option>
      <option>Dr. Ali</option>
    </select>
  </div>

  <div className="row">
    <div className="col-md-6 mb-3">
      <label className="form-label">Appointment Date</label>
      <input
        type="date"
        name="date"
        className="form-control"
        required
      />
    </div>

    <div className="col-md-6 mb-3">
      <label className="form-label">Appointment Time</label>
      <input
        type="time"
        name="time"
        className="form-control"
        required
      />
    </div>
  </div>

  <div className="mb-3">
    <label className="form-label">Message</label>
    <textarea
      className="form-control"
      name="message"
      rows="3"
      placeholder="Write your message..."
    ></textarea>
  </div>

  <button type="submit" className="appointment-btn">
    Book Appointment
  </button>

</form>
</div>
</div>
</div>
</div>
  );
};

export default BookAppointment;

