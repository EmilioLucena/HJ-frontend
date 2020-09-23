import React, { useState, useEffect } from "react";
import "./App.css";

import { DropdownButton, Dropdown, Image } from "react-bootstrap";
import Journey from "./components/Journey";

// hook used to call the API
// import useAPI from "./hooks/useAPI";

// this is how we get data from the API
import getData from "./services/useAPI";

// URL for the main journeys endpoint
const apiURL = "http://127.0.0.1:8080/journeys";

//journey main logo
const logoURL = "logo.png";

function App() {
  const [journeys, setJourneys] = useState([]);
  const [selectedJourney, setSelectedJourney] = useState(null);

  useEffect(() => {
    const loadJourneys = async () => {
      try {
        const res = await getData(apiURL);
        console.log(res);
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
      <div className="App-Header">
        <Image src={logoURL} className="App-Logo" />
        <DropdownButton
          variant="secondary"
          size="lg"
          title="Select Your Journey"
        >
          {dropDownItems}
        </DropdownButton>
      </div>
      {selectedJourney !== null && (
        <Journey journey={journeys[selectedJourney]} />
      )}
    </div>
  );
}

export default App;
