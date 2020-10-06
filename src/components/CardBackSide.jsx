import React from "react";

import "./CardBackSide.css";

export default function CardBackSide({ children, name, description }) {
  return (
    <div className="Card-Back-Side">
      <div>{name}</div>
      <div style={{ marginLeft: "8px", marginRight: "8px" }}>{description}</div>
      {children}
    </div>
  );
}
