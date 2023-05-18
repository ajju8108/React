import React from "react";
interface Props {
  cartItemsCount: number;
}
export default function Nav({ cartItemsCount }: Props) {
  return <div>Navbar:{cartItemsCount}</div>;
}
