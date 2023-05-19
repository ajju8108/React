import React from "react";
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
        <option value="Groceries">Groceries</option>
        <option value="Utilities">Utilities</option>
        <option value="Entertainment">Entertainment</option>
      </select>
    </div>
  );
}
