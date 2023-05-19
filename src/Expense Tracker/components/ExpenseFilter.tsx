import React from "react";
import { categories } from "../../App";
interface Props {
  onSelectCategory: (category: string) => void;
}
export default function ExpenseFilter({ onSelectCategory }: Props) {
  return (
    <div>
      <select
        className="form-select"
        name=""
        id=""
        onChange={(event) => onSelectCategory(event.target.value)}
      >
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}
