import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface Props {
  onClick: () => void;
}
export default function Like({ onClick }: Props) {
  const [fill, setFill] = useState(false);
  const toggle = () => {
    setFill(!fill);
    onClick();
  };
  if (fill) {
    return <AiFillHeart onClick={toggle} color="ff6b81" size={20} />;
  }
  return <AiOutlineHeart onClick={toggle} size={20} />;
}
