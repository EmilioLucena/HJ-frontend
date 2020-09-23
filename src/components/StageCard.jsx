import React from "react";

import "./StageCard.css";

export default function StageCard({ stage }) {
  const { name, url, image } = stage;
  const divClass = image ? "" : "StageCard";

  return (
    <div className={divClass}>
      {image ? (
        <div className="StageCard-Image">
          <img src={image} alt={name} width={140} height={120} />
          {name}
        </div>
      ) : (
        <center>{name}</center>
      )}
    </div>
  );
}
