import React, { useState } from "react";

export default function Exe() {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
    },
  });
  const handleClick = () => {
    setGame({ ...game, player: { ...game.player, name: "Mohan" } });
  };
  return (
    <div>
      <h1>EXERCISE</h1>
      {game.player.name}
      <button onClick={handleClick}>Click to change the name</button>
    </div>
  );
}
