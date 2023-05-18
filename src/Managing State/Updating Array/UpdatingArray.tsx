import React, { useState } from "react";

export default function UpdatingArray() {
  const [tags, setTags] = useState(["happy", "cheerful"]);
  const handleClick = () => {
    // add
    // setTags([...tags, "ecxciting"]);
    //Remove
    // setTags(tags.filter((tag) => tag !== "happy"));
    // Update
    setTags(tags.map((tag) => (tag === "happy" ? "happiness" : tag)));
  };
  return (
    <div>
      {tags}
      <button onClick={handleClick}>click me</button>
    </div>
  );
}
