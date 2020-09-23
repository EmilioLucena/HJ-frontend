import React, { useEffect, useState } from "react";

import getData from "../services/useAPI";

import JourneyHeader from "./JourneyHeader";
import StageCard from "./StageCard";

import "./Journey.css";

export default function Journey({ journey }) {
  const [journeyStages, setJourneyStages] = useState([]);

  useEffect(() => {
    const loadJourney = async () => {
      try {
        const res = await getData(journey.url);
        setJourneyStages(res.stages);
      } catch (err) {
        console.log("Erro: " + err.message);
      }
    };

    loadJourney();
  }, [journey]);

  return (
    <>
      <JourneyHeader id={journey.id} title={journey.name} />
      <div className="Journey">
        {journeyStages.map((stage) => (
          <StageCard stage={stage} />
        ))}
      </div>
    </>
  );
}
