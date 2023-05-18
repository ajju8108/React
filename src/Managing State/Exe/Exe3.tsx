import React from "react";
import { useState } from "react";

export default function Exe3() {
  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "Product 1", quantity: 1 },
      { id: 2, title: "Product 2", quantity: 1 },
    ],
  });
  const handleClick = () => {
    setCart({
      ...cart,
      items: cart.items.map((item) =>
        item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item
      ),
    });
  };
  console.log(cart);

  return (
    <div>
      <h1>CART</h1>
      {cart.items.map((item) => (
        <p key={item.id}>
          {item.id}
          {item.title}
          {item.quantity}
        </p>
      ))}
      <button onClick={handleClick}>Add more Toppings</button>
    </div>
  );
}
