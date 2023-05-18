import React from "react";

let count = 0;
export default function Pure() {
  console.log("Message Called", count);

  count++;
  return <div>Message {count}</div>;
}
