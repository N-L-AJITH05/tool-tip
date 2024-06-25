// src/components/Card.js
import React, { useState } from "react";
import "./Card.css";

const Card = ({ songNumber }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      className="card"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <p>Song {songNumber}</p>
      {showTooltip && (
        <div className="tooltip">Tooltip for Song {songNumber}</div>
      )}
    </div>
  );
};

export default Card;
