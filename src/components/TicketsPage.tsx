import React, { useState } from "react";

type TicketsPageProps = {
  selectedEvent: string;
  onCartUpdate: (tickets: number, totalPrice: number) => void;
};

const TicketsPage: React.FC<TicketsPageProps> = ({
  selectedEvent,
  onCartUpdate,
}) => {
  const [tickets, setTickets] = useState([0, 0, 0]);
  const prices = [1, 10, 100];

  const handleSelect = (index: number, value: number) => {
    const updatedTickets = [...tickets];
    updatedTickets[index] = value;
    setTickets(updatedTickets);
  };

  const handleAddToCart = () => {
    const totalTickets = tickets.reduce((acc, cur) => acc + cur, 0);
    const totalPrice = tickets.reduce(
      (acc, cur, i) => acc + cur * prices[i],
      0
    );
    onCartUpdate(totalTickets, totalPrice);
  };

  return (
    <div className="tickets-page">
      <h2>{selectedEvent}</h2>
      <div className="seat-options">
        {["Prime Rear Orchestra", "Side Balcony", "Prime Balcony"].map(
          (option, index) => (
            <div key={index} className="option">
              <span>{option}</span>
              <span>{`$${prices[index]}`}</span>
              <select
                onChange={(e) => handleSelect(index, Number(e.target.value))}
              >
                {[...Array(11).keys()].map((i) => (
                  <option key={i} value={i}>
                    {i}
                  </option>
                ))}
              </select>
            </div>
          )
        )}
      </div>
      <button onClick={handleAddToCart}>Add To Cart</button>
    </div>
  );
};

export default TicketsPage;
