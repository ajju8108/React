import React, { useState } from "react";

export default function Exe2() {
  const [pizza, setPizza] = useState({
    name: "Spicy Pepperoni",
    toppings: ["Mushroom"],
  });
  const handleClick = () => {
    setPizza({ ...pizza, toppings: [...pizza.toppings, "Cheese"] });
  };
  return (
    <div>
      <h1>Pizza Toppings</h1>
      {pizza.toppings}
      <button onClick={handleClick}>Add more Toppings</button>
    </div>
  );
}
