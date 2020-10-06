import React from "react";

import "./CardFrontSide.css";

const logo = "logo.png";

export default function CardFrontSide({ children, image, name }) {
  const cardImage = image ? image : logo;

  return (
    <div className="Card-Front-Side">
      <img src={cardImage} alt={name} width={260} height={160} />
      <div style={{ marginBottom: "10px" }}>{name} </div>
      {children}
    </div>
  );
}
