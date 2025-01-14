// import React from "react";

import { useEffect } from "react";
import { useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import Character from "./Character";

function Characters() {
  //state variables on top
  const [characters, setCharacters] = useState(false); // false at the beginning because we don't have any value yet
  const [error, setError] = useState(false);

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

  // useEffect hook close to the return
  return (
    <div>
      <h1>Rick & Morty App</h1>

      <Row>
        {characters &&
          characters.map((character) => {
            return (
              <Col key={character.id} xl={3} lg={4} md={"auto"} sm={"auto"} className="mb-5">
                <Character character={character}  />
              </Col>
            );
          })}
      </Row>

      {error && <h2>Something went wrong</h2>}
    </div>
  );
}

export default Characters;
