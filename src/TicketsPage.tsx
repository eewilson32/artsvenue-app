import React, { useState } from "react";
import { Link } from "react-router-dom";

interface TicketsPageProps {
  event: string | null;
  onCartUpdate: (tickets: number, price: number) => void;
}

// Define an interface for the prices object with an index signature
interface TicketPrices {
  [key: string]: number;
}

const TicketsPage: React.FC<TicketsPageProps> = ({ event, onCartUpdate }) => {
  const [selectedTickets, setSelectedTickets] = useState<
    { type: string; amount: number }[]
  >([
    { type: "Prime Rear Orchestra", amount: 0 },
    { type: "Side Balcony", amount: 0 },
    { type: "Prime Balcony", amount: 0 },
  ]);

  // Define the prices object using the TicketPrices interface
  const prices: TicketPrices = {
    "Prime Rear Orchestra": 100,
    "Side Balcony": 10,
    "Prime Balcony": 1,
  };

  const handleSelectChange = (index: number, value: number) => {
    const newSelectedTickets = [...selectedTickets];
    newSelectedTickets[index].amount = value;
    setSelectedTickets(newSelectedTickets);
  };

  const handleAddToCart = () => {
    const totalTickets = selectedTickets.reduce(
      (total, ticket) => total + ticket.amount,
      0
    );
    const totalPrice = selectedTickets.reduce(
      (total, ticket) => total + ticket.amount * (prices[ticket.type] || 0), // Handle missing price cases
      0
    );
    onCartUpdate(totalTickets, totalPrice);
  };

  return (
    <div className="tickets-page">
      <h2>{event}</h2>
      <img
        src="/concert-hall-map.png"
        alt="Concert Hall Map"
        className="hall-map"
      />
      <form className="ticket-options">
        {selectedTickets.map((ticket, index) => (
          <div key={ticket.type}>
            <label>
              {ticket.type} - ${prices[ticket.type] || 0}{" "}
              {/* Handle missing price cases */}
            </label>
            <select
              value={ticket.amount}
              onChange={(e) =>
                handleSelectChange(index, parseInt(e.target.value))
              }
            >
              {[...Array(11).keys()].map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
          </div>
        ))}
      </form>
      <Link to="/cart">
        <button onClick={handleAddToCart}>Add To Cart</button>
      </Link>
    </div>
  );
};

export default TicketsPage;
