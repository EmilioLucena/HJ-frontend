import React from "react";

export default function JourneyHeader({ id, title }) {
  return (
    <>
      <h3>Journey {id}</h3>
      <h3 style={{ padding: "5px" }}>{title}</h3>
    </>
  );
}
