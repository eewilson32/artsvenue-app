import React from "react";

type EventListProps = {
  onEventClick: (event: string) => void;
};

const EventList: React.FC<EventListProps> = ({ onEventClick }) => {
  const events = [
    { id: 1, name: "Concert Number One", date: "Oct 1, 8:00 PM" },
    { id: 2, name: "Concert Number Two", date: "Oct 2, 8:00 PM" },
    { id: 3, name: "Concert Number Three", date: "Oct 3, 8:00 PM" },
  ];

  return (
    <div className="events-section">
      <h2>All Events</h2>
      {events.map((event) => (
        <div key={event.id} className="event">
          <span>{`${event.date} - ${event.name}`}</span>
          <button onClick={() => onEventClick(event.name)}>Tickets</button>
        </div>
      ))}
    </div>
  );
};

export default EventList;
