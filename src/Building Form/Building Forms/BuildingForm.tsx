import React, { useRef, useState } from "react";
import { FormEvent } from "react";

export default function BuildingForm() {
  const [person, setPerson] = useState({
    name: "",
    age: "",
  });
  /*  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const person = {
    name: "",
    age: 0,
  }; */
  /* const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    // console.log("Submitted");
    if (nameRef.current !== null) {
      person.name = nameRef.current.value;
    }
    if (ageRef.current !== null) {
      person.age = parseInt(ageRef.current.value);
    }
    console.log(person);
  }; */

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(person);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          id="name"
          value={person.name}
          /* ref={nameRef}  */
          onChange={(event) => {
            setPerson({ ...person, name: event.target.value });
          }}
          type="text"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          id="age"
          value={person.age}
          /* ref={ageRef} */
          onChange={(event) => {
            setPerson({ ...person, age: parseInt(event.target.value) });
          }}
          type="number"
          className="form-control"
        />
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
}
