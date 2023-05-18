import React, { useState } from "react";

// Updating Arrays and Arrays of objects
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
    setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));
  };
  // console.log(bugs[0].fixed);
  return (
    <div>
      {/* {bugs[0].fixed} */}
      <button onClick={handleClick}>click me</button>
    </div>
  );
}
