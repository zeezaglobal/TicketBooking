import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./EventDetails.css";

function EventDetails() {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [tickets, setTickets] = useState("");
  const navigate = useNavigate();

  const handleNext = () => {
    if (step === 1 && (!name || !email || !phone)) {
      alert("Please fill in all fields before proceeding.");
      return;
    }
    if (step === 2 && (!date || !tickets)) {
      alert("Please select a date and number of tickets.");
      return;
    }

    if (step < 3) {
      setStep(step + 1);
    } else {
      navigate("/payment");
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div className="event-details-container">
      <h2>Event Registration</h2>

      {/* Progress Line */}
      <div className="progress-line">
        {[1, 2, 3].map((dot) => (
          <div
            key={dot}
            className={`progress-dot ${dot === step ? "active" : "inactive"}`}
          >
            <span className="progress-label">
              {dot === 1 ? "Name" : dot === 2 ? "Details" : "Payment"}
            </span>
          </div>
        ))}
      </div>

      {/* Step Content */}
      <div className="step-content">
        {step === 1 && (
          <div className="step step-1">
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="input-field"
            />
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="input-field"
            />
            <label>Phone:</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter your phone number"
              className="input-field"
            />
          </div>
        )}

        {step === 2 && (
          <div className="step step-2">
            <label>Date:</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="input-field"
            />
            <label>Number of Tickets:</label>
            <select
              value={tickets}
              onChange={(e) => setTickets(e.target.value)}
              className="input-field"
            >
              <option value="">Select tickets</option>
              <option value="1">1 Ticket</option>
              <option value="2">2 Tickets</option>
              <option value="3">3 Tickets</option>
              <option value="4">4 Tickets</option>
            </select>
          </div>
        )}

        {step === 3 && (
          <div className="step step-3">
            <p>You're ready to proceed to the payment page!</p>
          </div>
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="button-group">
        {step > 1 && (
          <button className="back-button" onClick={handleBack}>
            Back
          </button>
        )}
        <button className="next-button" onClick={handleNext}>
          {step < 3 ? "Next" : "Go to Payment"}
        </button>
      </div>
    </div>
  );
}

export default EventDetails;
