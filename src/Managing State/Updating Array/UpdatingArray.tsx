import React, { useState } from "react";
import produce from "immer";

// Updating Arrays and Arrays of objects + IMMER
export default function UpdatingArray() {
  // const [tags, setTags] = useState(["happy", "cheerful"]);
  const [bugs, setBugs] = useState([
    { id: 1, title: "bug 1", fixed: false },
    { id: 2, title: "bug 2", fixed: false },
  ]);
  const handleClick = () => {
    // add
    // setTags([...tags, "ecxciting"]);
    //Remove
    // setTags(tags.filter((tag) => tag !== "happy"));
    // Update
    // setTags(tags.map((tag) => (tag === "happy" ? "happiness" : tag)));
    // UPdating Arrays Of Objects
    // setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));
    // Immer to update the arrays of object
    setBugs(
      produce((draft) => {
        const bug = draft.find((bug) => bug.id === 1);
        if (bug) bug.fixed = true;
      })
    );
  };
  // console.log(bugs[0].fixed);
  return (
    <div>
      {bugs.map((bug) => (
        <p key={bug.id}>
          {bug.title} {bug.fixed ? "fixed" : "not fixed"}
        </p>
      ))}
      <button onClick={handleClick}>click me</button>
    </div>
  );
}
