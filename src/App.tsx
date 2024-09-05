import React, { useState } from "react";
import Banner from "./components/Banner";
import EventList from "./components/EventList";
import TicketsPage from "./components/TicketsPage";
import CartPage from "./components/CartPage";

const App: React.FC = () => {
  const [page, setPage] = useState<"main" | "tickets" | "cart">("main");
  const [selectedEvent, setSelectedEvent] = useState<string>("");
  const [cart, setCart] = useState({ tickets: 0, totalPrice: 0 });

  const handleEventClick = (event: string) => {
    setSelectedEvent(event);
    setPage("tickets");
  };

  const handleCartUpdate = (tickets: number, totalPrice: number) => {
    setCart({ tickets, totalPrice });
    setPage("cart");
  };

  return (
    <div>
      {page === "main" && (
        <>
          <Banner />
          <EventList onEventClick={handleEventClick} />
        </>
      )}
      {page === "tickets" && (
        <TicketsPage
          selectedEvent={selectedEvent}
          onCartUpdate={handleCartUpdate}
        />
      )}
      {page === "cart" && <CartPage cart={cart} />}
    </div>
  );
};

export default App;
