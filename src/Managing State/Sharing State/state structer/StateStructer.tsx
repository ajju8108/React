import React, { useState } from "react";

export default function StateStructer() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const fullName = firstName + " " + lastName;
  return <div>{fullName}</div>;
}
