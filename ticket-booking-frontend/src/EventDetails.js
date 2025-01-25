import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const EventDetails = () => {
  const navigate = useNavigate();

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
        "Experience the magic of Broadway with stellar performances of timeless classics.",
      event_date: "2025-05-10",
      venue: "Grand Concert Hall, Winnipeg, MB",
      image_url:
        "https://images.pexels.com/photos/8952192/pexels-photo-8952192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 4,
      category: "Sports",
      title: "Sudbury Marathon 2025",
      subtitle: "Run for the Community",
      description:
        "Participate in Sudbury’s annual marathon event featuring 5k, 10k, and full marathon categories.",
      event_date: "2025-06-02",
      venue: "Downtown Sudbury, ON",
      image_url:
        "https://images.pexels.com/photos/8952192/pexels-photo-8952192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 5,
      category: "Movies",
      title: "Retro Cinema Night: The Classics",
      subtitle: "Relive Iconic Movie Moments",
      description:
        "Enjoy a night of classic cinema under the stars with movies from the golden age of Hollywood.",
      event_date: "2025-07-05",
      venue: "Outdoor Cinema Park, Toronto, ON",
      image_url:
        "https://images.pexels.com/photos/8952192/pexels-photo-8952192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 6,
      category: "Sports",
      title: "Pro Wrestling Championship 2025",
      subtitle: "Battle of the Titans",
      description:
        "Witness world-class wrestlers compete for the ultimate championship title.",
      event_date: "2025-08-12",
      venue: "Scotiabank Arena, Toronto, ON",
      image_url:
        "https://images.pexels.com/photos/8952192/pexels-photo-8952192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 7,
      category: "Events",
      title: "Tech Expo 2025",
      subtitle: "Innovating Tomorrow",
      description:
        "Discover the latest technological advancements and network with industry leaders at this annual tech exhibition.",
      event_date: "2025-09-15",
      venue: "Metro Toronto Convention Centre, Toronto, ON",
      image_url:
        "https://images.pexels.com/photos/8952192/pexels-photo-8952192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 8,
      category: "Shows",
      title: "Comedy Night with John Doe",
      subtitle: "Laugh Out Loud",
      description:
        "Join us for an evening of hilarity with renowned comedian John Doe and his side-splitting act.",
      event_date: "2025-10-18",
      venue: "Laugh Factory, Vancouver, BC",
      image_url:
        "https://images.pexels.com/photos/8952192/pexels-photo-8952192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];

  const [showData, setShowData] = useState(false);

  const handleShowData = () => {
    setShowData(!showData);
  };

  return (
    <div className="event-details-container">
      <h2>Events</h2>
      <button onClick={handleShowData} className="show-data-button">
        {showData ? "Hide Events" : "Show Events"}
      </button>
      {showData && (
        <pre style={{ textAlign: "left", marginTop: "20px" }}>
          {JSON.stringify(events, null, 2)}
        </pre>
      )}
    </div>
  );
};

export default EventDetails;
