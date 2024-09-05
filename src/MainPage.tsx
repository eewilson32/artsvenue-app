import React from "react";
import { Link } from "react-router-dom";

interface MainPageProps {
  onEventSelect: (event: string) => void;
}

const MainPage: React.FC<MainPageProps> = ({ onEventSelect }) => {
  const events = [
    { date: "Oct 1 8:00pm", name: "Concert Number One" },
    { date: "Oct 2 8:00pm", name: "Concert Number Two" },
    { date: "Oct 3 8:00pm", name: "Concert Number Three" },
  ];

  return (
    <div className="main-page">
      <header>
        <nav>
          <ul>
            <li>
              <a href="#">Ballet</a>
            </li>
            <li>
              <a href="#">Concerts</a>
            </li>
            <li>
              <a href="#">Theatre</a>
            </li>
          </ul>
        </nav>
        <div className="banner">
          <h1>Wolf Trap Concert Hall</h1>
        </div>
      </header>

      <section className="events-section">
        <h2>All Events</h2>
        {events.map((event, index) => (
          <div key={index} className="event-item">
            <p>
              {event.date} - {event.name}
            </p>
            <Link to="/tickets">
              <button onClick={() => onEventSelect(event.name)}>Tickets</button>
            </Link>
          </div>
        ))}
      </section>
    </div>
  );
};

export default MainPage;
