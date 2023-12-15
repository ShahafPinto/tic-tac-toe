import React from "react";
import { useState } from "react";

export default function Player({ initialName, symbol , isActive}) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handelEditClick() {
    setIsEditing((isEditing) => !isEditing);
  }

  function handleChange(event) {
     setPlayerName(event.target.value);
  }
  return (
    <li className={isActive? "active" : undefined}>
      <span className="player">
        {!isEditing && <span className="player-name">{playerName}</span>}
        {isEditing && (
          <input
            type="text"
            required
            value={playerName}
            onChange={handleChange}
          />
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handelEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}