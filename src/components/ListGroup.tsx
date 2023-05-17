// import { MouseEvent } from "react";

import { useState } from "react";
interface Props {
  items: string[];
  heading: string;
}
function ListGroup({ items, heading }: Props) {
  //   items = [];
  //Handling Event
  //   const handleClick = (event: MouseEvent) => {
  //     console.log(event);
  //   };
  const [selectedIndex, setSelectedIndex] = useState(-1);
  //   let selectedIndex = 4;

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
              console.log(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
