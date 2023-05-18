import React, { useState } from "react";

export default function UpdateObject() {
  const [drink, setDrink] = useState({
    title: "Americanoi",
    price: 5,
  });
  const handleClick = () => {
    setDrink({ ...drink, price: 8 });
  };
  return (
    <div>
      {drink.price}
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}
