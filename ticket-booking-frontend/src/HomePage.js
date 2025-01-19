import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  return (
    <div className="home-page-container">
      <div className="header">
        <h2>Welcome to the events near you</h2>
        <p>Your place to experience the best events in town!</p>
      </div>

      <div className="events-list">
        <div className="event-card">
          <Link to="/event/1" className="event-link">
            {/* Apply the specific class for music event image */}
            <div className="event-image music"></div>
            <h3 className="event-title">Live Music Concert</h3>
            <p className="event-description">Join us for an unforgettable music night with top performers.</p>
          </Link>
        </div>

        <div className="event-card">
          <Link to="/event/2" className="event-link">
            {/* Apply the specific class for art event image */}
            <div className="event-image art"></div>
            <h3 className="event-title">Art Exhibition</h3>
            <p className="event-description">Discover beautiful artworks from local and international artists.</p>
          </Link>
        </div>

        <div className="event-card">
          <Link to="/event/3" className="event-link">
            {/* Apply the specific class for food event image */}
            <div className="event-image food"></div>
            <h3 className="event-title">Food Festival</h3>
            <p className="event-description">Indulge in delicious food from all over the world.</p>
          </Link>
        </div>

        <div className="event-card">
          <Link to="/event/4" className="event-link">
            {/* Apply the specific class for tech event image */}
            <div className="event-image tech"></div>
            <h3 className="event-title">Tech Conference</h3>
            <p className="event-description">Join thought leaders in the tech industry for a day of innovation and insights.</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
