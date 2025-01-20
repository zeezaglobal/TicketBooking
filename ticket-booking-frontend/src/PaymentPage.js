import React from "react";
import { useLocation } from "react-router-dom";
import "./PaymentPage.css";

function PaymentPage() {
  const location = useLocation();
  const { name, email, phone, date, tickets } = location.state || {};

  return (
    <div className="payment-page-container">
      <h2>Payment Details</h2>
      {name ? (
        <div>
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Email:</strong> {email}</p>
          <p><strong>Phone:</strong> {phone}</p>
          <p><strong>Date:</strong> {date}</p>
          <p><strong>Tickets:</strong> {tickets}</p>
        </div>
      ) : (
        <p>No details provided.</p>
      )}
    </div>
  );
}

export default PaymentPage;
