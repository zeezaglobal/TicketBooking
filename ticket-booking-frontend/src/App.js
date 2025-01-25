import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage"; // Make sure HomePage exists or create a simple placeholder
import EventDetails from "./EventDetails";
import PaymentPage from "./PaymentPage"; // Placeholder for payment page
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <header>
          <h1></h1>
        </header>
        <main>
          <Routes>
            {/* Home Page */}
            <Route path="/" element={<HomePage />} />

            {/* Dynamic Event Details */}
            <Route path="/event/:eventId" element={<EventDetails />} />

            {/* Payment Page */}
            <Route path="/payment" element={<PaymentPage />} />
          </Routes>
        </main>
        <footer>
          <p>&copy; 2025 City Center Event Venue</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
