import React, { useState, useEffect } from "react";
import { DropdownButton, Dropdown, Image } from "react-bootstrap";
import Journey from "./components/Journey";

import "./App.css";

// this is how we get data from the API
import getData from "./services/useAPI";
import API_URL from "./services/url";

//journey main logo
const logoURL = "logo.png";

const mainEndpoint = API_URL + "/journeys";

function App() {
  const [journeys, setJourneys] = useState([]);
  const [selectedJourney, setSelectedJourney] = useState(null);

  useEffect(() => {
    const loadJourneys = async () => {
      try {
        const res = await getData(mainEndpoint);
        setJourneys(res);
      } catch (err) {
        console.log(err);
      }
    };

    loadJourneys();
  }, []);

  const handleSelect = (key) => {
    const newJourney = Number(key) - 1;
    setSelectedJourney(newJourney);
  };

  const dropDownItems = journeys.map(({ id, name }) => {
    return (
      <Dropdown.Item key={id} eventKey={id} onSelect={handleSelect}>
        {name}
      </Dropdown.Item>
    );
  });

  return (
    <div className="App">
      <DropdownButton
        style={{ alignSelf: "flex-start", padding: "5px" }}
        variant="secondary"
        size="md"
        title="Select Your Journey"
      >
        {dropDownItems}
      </DropdownButton>
      <Image src={logoURL} className="App-Logo" />
      {selectedJourney !== null && (
        <Journey journey={journeys[selectedJourney]} />
      )}
    </div>
  );
}

export default App;
