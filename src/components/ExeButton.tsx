import React from "react";
interface Props {
  color?: "primary" | "secondary" | "danger";
  children: string;
  onClick: () => void;
}

export default function ExeButton({
  children,
  onClick,
  color = "primary",
}: Props) {
  return (
    <div>
      <button type="button" className={`btn btn-${color}`} onClick={onClick}>
        {children}
      </button>
    </div>
  );
}
