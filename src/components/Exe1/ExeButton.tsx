import styles from "./ExeButton.module.css";
interface Props {
  color?: "primary" | "secondary" | "danger";
  children: string;
  onClick: () => void | boolean;
}

export default function ExeButton({
  children,
  onClick,
  color = "primary",
}: Props) {
  return (
    <div>
      <button
        type="button"
        className={[styles.btn, styles["btn-" + color]].join(" ")}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
}
