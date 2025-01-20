import React, { useState, useEffect } from "react";
import { jsPDF } from "jspdf";
import QRCode from "qrcode";
import { useParams, useNavigate } from "react-router-dom";
import "./EventDetails.css";

const EventDetails = () => {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [tickets, setTickets] = useState("");
  const [qrCode, setQrCode] = useState(""); // To store the QR code base64 data
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEventDetails = async () => {
      const mockEventData = {
        1: { id: 1, title: "Music Concert", location: "City Center Hall" },
        2: { id: 2, title: "Art Exhibition", location: "Gallery Hub" },
      };
      setEvent(mockEventData[eventId] || null);
    };

    fetchEventDetails();
  }, [eventId]);

  useEffect(() => {
    // Generate the QR code when the event and user details are ready
    if (event && name && email && phone) {
      generateQRCode();
    }
  }, [event, name, email, phone]);

  const generateQRCode = async () => {
    try {
      const qrCodeUrl = await QRCode.toDataURL(
        `https://example.com/event/${event.id}?name=${name}&email=${email}&phone=${phone}`,
        { errorCorrectionLevel: "H" }
      );
      setQrCode(qrCodeUrl);
    } catch (error) {
      console.error("Error generating QR code:", error);
    }
  };

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
      navigate("/payment", {
        state: {
          event,
          name,
          email,
          phone,
          date,
          tickets,
        },
      });
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handlePrintPDF = () => {
    const doc = new jsPDF();
    doc.text(`Event Details: ${event.title}`, 10, 10);
    doc.text(`Location: ${event.location}`, 10, 20);
    doc.text(`Name: ${name}`, 10, 30);
    doc.text(`Email: ${email}`, 10, 40);
    doc.text(`Phone: ${phone}`, 10, 50);
    doc.text(`Date: ${date}`, 10, 60);
    doc.text(`Tickets: ${tickets}`, 10, 70);

    // Include the QR code image in the PDF
    if (qrCode) {
      doc.addImage(qrCode, "JPEG", 10, 80, 50, 50); // Adjust the size and position as needed
    }

    doc.save(`${event.title}_details.pdf`);
  };

  if (!event) {
    return <p>Loading event details...</p>;
  }

  return (
    <div className="event-details-container">
      <h2>{event.title}</h2>
      <p>
        <strong>Location:</strong> {event.location}
      </p>

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

            {/* Display QR code if generated */}
            {qrCode && (
              <div className="qr-code">
                <img src={qrCode} alt="QR Code" style={{ width: 120 }} />
              </div>
            )}

            <div className="print-button">
              <button onClick={handlePrintPDF} className="print-btn">
                Print PDF
              </button>
            </div>
          </div>
        )}
      </div>

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
};

export default EventDetails;
