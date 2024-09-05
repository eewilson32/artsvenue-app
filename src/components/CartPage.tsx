type CartPageProps = {
  cart: { tickets: number; totalPrice: number };
};

const CartPage: React.FC<CartPageProps> = ({ cart }) => {
  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      <p>{`Total Tickets: ${cart.tickets}`}</p>
      <p>{`Total Price: $${cart.totalPrice}`}</p>
      <button>Purchase</button>
    </div>
  );
};

export default CartPage;
