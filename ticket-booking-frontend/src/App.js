import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import EventDetails from './EventDetails'; // Importing EventDetails component
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <header>
          <h1></h1>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/event/:eventId" element={<EventDetails />} />
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
