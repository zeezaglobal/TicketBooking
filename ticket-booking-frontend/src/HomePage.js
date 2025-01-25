import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";
import logo from "./logo.png";

const events = [
  {
    id: 1,
    category: "Movies",
    title: "The Galactic Chronicles: A Sci-Fi Adventure",
    subtitle: "Exclusive Premiere Night",
    description:
      "Experience the most anticipated sci-fi movie of the year with stunning visuals and a gripping storyline.",
    event_date: "2025-03-15",
    venue: "Sudbury Theatre Centre, Sudbury, ON",
    image_url:
      "https://images.pexels.com/photos/8952192/pexels-photo-8952192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 2,
    category: "Events",
    title: "Sudbury Food & Culture Fest",
    subtitle: "A Celebration of Global Flavors",
    description:
      "Join us for a day filled with food stalls, live music, and cultural performances from around the world.",
    event_date: "2025-04-22",
    venue: "Bell Park, Sudbury, ON",
    image_url:
      "https://images.pexels.com/photos/8952192/pexels-photo-8952192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 3,
    category: "Shows",
    title: "Broadway Nights: A Musical Journey",
    subtitle: "Live at the Grand Stage",
    description:
      "Experience the magic of Broadway with stellar performances of classics.",
    event_date: "2025-05-10",
    venue: "Grand Concert Hall, Winnipeg, MB",
    image_url:
      "https://images.pexels.com/photos/8952192/pexels-photo-8952192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

function HomePage() {
  return (
    <div className="main-container">
      {/* Top Section: Categories with Logo */}
      <div className="top-categories">
        <div className="top-logo">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <div className="categories-row">
          <Link to="/movies" className="category-link">
            Movies
          </Link>
          <Link to="/events" className="category-link">
            Events
          </Link>
          <Link to="/shows" className="category-link">
            Shows
          </Link>
          <Link to="/sports" className="category-link">
            Sports
          </Link>
        </div>
      </div>

      {/* Top Container */}
      <div className="top-container">
        <div className="header-left">
          <h2>Place your AD here</h2>
        </div>
        <div className="header-right">
          <p>HOST YOUR EVENT HERE ONLY ON WINNIPEG</p>
        </div>
      </div>

      {/* Section Title */}
      <div className="section-title">Popular Events Near You</div>

      {/* Bottom Boxes Section */}
      <div className="bottom-boxes">
        {events.map((event) => (
          <div key={event.id} className="bottom-box">
            <img
              src={event.image_url}
              alt={event.title}
              className="event-image"
            />
            <h3>{event.title}</h3>
            <h4>{event.subtitle}</h4>
            <p>{event.description}</p>
            <p>
              <strong>Date:</strong> {event.event_date}
            </p>
            <p>
              <strong>Venue:</strong> {event.venue}
            </p>
          </div>
        ))}
      </div>

      {/* Contact Us Section */}
      <div className="content-container">
        <div className="contact-us-box">
          <p>Contact Us</p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
