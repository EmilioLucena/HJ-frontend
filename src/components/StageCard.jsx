import React, { useState, useEffect } from "react";
import getData from "../services/useAPI";

import ReactCardFlip from "react-card-flip";
import CardFrontSide from "./CardFrontSide";
import CardBackSide from "./CardBackSide";

import "./StageCard.css";

const logo = "logo.png";

export default function StageCard({ stage }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [currentStage, setCurrentStage] = useState(null);
  const { name, url } = stage;

  useEffect(() => {
    const loadStage = async () => {
      try {
        const res = await getData(url);
        setCurrentStage(res);
        console.log("RES=" + res);
      } catch (err) {
        console.log("Erro: " + err.message);
      }
    };

    loadStage();
  }, [stage]);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  const image = currentStage ? currentStage.image : logo;
  const description = currentStage ? currentStage.description : "";

  return (
    <ReactCardFlip isFlipped={isFlipped}>
      <CardFrontSide name={name} image={image}>
        <button onClick={handleClick}>flip</button>
      </CardFrontSide>
      <CardBackSide name={name} description={description}>
        <button onClick={handleClick}>flip</button>
      </CardBackSide>
    </ReactCardFlip>
  );
}
