import React, { useState } from "react";

export default function StateStructer() {
  /* const [firstName, setFirstName] = useState("Ajay ");
  const [lastName, setLastName] = useState("Maurya"); */
  const [person, setPerson] = useState({
    firstname: "",
    lastname: "",
  });
  const fullName = person.firstname + " " + person.lastname;
  return <div>{fullName}</div>;
}
