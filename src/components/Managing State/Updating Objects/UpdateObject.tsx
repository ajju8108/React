import React, { useState } from "react";
// Updating Objects and nested object
export default function UpdateObject() {
  /* const [drink, setDrink] = useState({
    title: "Americanoi",
    price: 5,
  }); */
  const [customer, setCustomer] = useState({
    name: "John",
    address: {
      city: "San Francisco",
      zipCode: 19911,
    },
  });
  const handleClick = () => {
    setCustomer({
      ...customer,
      address: { ...customer.address, zipCode: 9999 },
    });
  };
  return (
    <div>
      {customer.address.zipCode}
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}
