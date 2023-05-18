// import { MouseEvent } from "react";
import { join } from "lodash";
// import styles from "./ListGroup.module.css";
// import "./ListGroup.css";
import styled from "styled-components";
import { useState } from "react";

const List = styled.ul`
  list-style: none;
  padding: 0;
  background: yellowgreen;
`;

interface ListItemProps {
  active: boolean;
}

const ListItem = styled.li<ListItemProps>`
  padding: 5px 0;
  background: ${(porps) => (porps.active ? "yellow" : "none")};
`;

interface Props {
  items: string[];
  heading: string;
  onSelect: (item: string) => void;
}
function ListGroup({ items, heading, onSelect }: Props) {
  //   items = [];
  //Handling Event
  //   const handleClick = (event: MouseEvent) => {
  //     console.log(event);
  //   };
  const [selectedIndex, setSelectedIndex] = useState(0);
  //   let selectedIndex = 4;

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No items found</p>}
      {/* <ul className={styles["list-group"]}> */}
      {/* <ul className={styles.listGroup}> */}
      {/* <ul className={[styles.listGroup, styles.container].join(" ")}> */}
      <List /* className="list-group container" */ style={{ color: "red" }}>
        {items.map((item, index) => (
          <ListItem
            active={index === selectedIndex}
            key={item}
            /* className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            } */
            onClick={() => {
              setSelectedIndex(index);
              onSelect(item);
            }}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </>
  );
}
export default ListGroup;
