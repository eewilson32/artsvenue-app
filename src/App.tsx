import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import MainPage from "./MainPage";
import TicketsPage from "./TicketsPage";
import CartPage from "./CartPage";
import "./styles.css";

const App: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);
  const [cart, setCart] = useState<{ tickets: number; totalPrice: number }>({
    tickets: 0,
    totalPrice: 0,
  });

  const handleEventSelect = (event: string) => {
    setSelectedEvent(event);
  };

  const handleCartUpdate = (tickets: number, price: number) => {
    setCart({ tickets, totalPrice: price });
  };

  return (
    <Router>
      <div className="app-container">
        <Switch>
          <Route exact path="/">
            <MainPage onEventSelect={handleEventSelect} />
          </Route>
          <Route path="/tickets">
            <TicketsPage
              event={selectedEvent}
              onCartUpdate={handleCartUpdate}
            />
          </Route>
          <Route path="/cart">
            <CartPage cart={cart} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
