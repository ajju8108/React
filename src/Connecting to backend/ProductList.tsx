import React, { useEffect } from "react";
import { useState } from "react";

export default function ProductList({ category }: { category: string }) {
  const [products, setProducts] = useState<string[]>([]);
  useEffect(() => {
    console.log("Fetching Products in ", category);
    setProducts(["clothing", "Household"]);
  }, [category]);
  return <div>Product List</div>;
}
