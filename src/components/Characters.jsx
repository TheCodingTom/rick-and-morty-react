// import React from "react";

import { useEffect } from "react";
import { useState } from "react";
import { Card, Col, Form, InputGroup, Row } from "react-bootstrap";
import Character from "./Character";

function Characters() {
  //state variables on top
  const [characters, setCharacters] = useState(false); // false at the beginning because we don't have any value yet
  const [error, setError] = useState(false);
  const [inputText, setInputText] = useState("");

  const getCharacters = () => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => {
        if (!response.ok) {
          // trasform it into a JSON only if if the response is ok, otherwise stop there
          setError(true);
        }
        return response.json();
      })
      .then((result) => {
        console.log(result);

        if (!result) {
          setError(true);
        }
        setCharacters(result.results); // whenever we use the setter there's another run of the component
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      });
  };

  useEffect(() => {
    getCharacters();
  }, []);

 

  const handleSearchBar = (event) => {
    // console.log("yes");
    console.log(event.target.value);
    setInputText(event.target.value);

    const searchedCharacters = characters.filter((character) => {
      const lowerCaseName = character.name.toLowerCase()
      const lowerCaseInput = inputText.toLowerCase()
      return lowerCaseName.includes(lowerCaseInput)
    })
    

  };

  // useEffect hook close to the return
  return (
    <div>
      <InputGroup onChange={handleSearchBar} className="mb-3">
        <Form.Control
          placeholder="Search"
          aria-label="Search"
          aria-describedby="basic-addon1"
        />
      </InputGroup>

      <h1>Wubba Lubba Dub Dub!</h1>

      <div className="container">
        {characters &&
          characters.map((character) => {
            return <Character character={character} key={character.id} />;
          })}

        {error && <h2>Something went wrong</h2>}
      </div>
    </div>
  );
}

export default Characters;
