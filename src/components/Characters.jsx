// import React from "react";

import { useEffect } from "react";
import { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import Character from "./Character";

function Characters() {
  // state variables on top of the code
  const [characters, setCharacters] = useState([]); // empty at the beginning because we don't have any value yet
  const [query, setQuery] = useState("");
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

    const filtered = characters.filter((character) => {
      return character.name.toLowerCase().includes(query);

    });
    
  useEffect(() => {
    getCharacters();
  }, []);

  // useEffect hook close to the return
  return (
    <div>
      <InputGroup value={query} onChange={e => setQuery(e.target.value)} className="mb-3">
        <Form.Control
          placeholder="Search"
          aria-label="Search"
          aria-describedby="basic-addon1"
        />
      </InputGroup>

      <h1>Wubba Lubba Dub Dub!</h1>

      <div className="container">
        {characters &&
          filtered.map((character) => {
            return <Character character={character} key={character.id} />;
          })}

        {error && <h2>Something went wrong</h2>}
      </div>
    </div>
  );
}

export default Characters;
