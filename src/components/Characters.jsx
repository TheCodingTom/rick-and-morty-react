// import React from "react";

import { useEffect } from "react";
import { useState } from "react";
import { Form, InputGroup, Pagination } from "react-bootstrap";
import Character from "./Character";

function Characters() {
  // state variables on top of the code
  const [characters, setCharacters] = useState([]); // empty at the beginning because we don't have any value yet
  const [query, setQuery] = useState("");
  const [error, setError] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);

  const getCharacters = () => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${pageNumber}`)
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

  const filteredCharacters = characters.filter((character) => {
    return character.name.toLowerCase().includes(query.toLowerCase());
  });

  const handleClickNext = () => {
    setPageNumber(pageNumber + 1);
  };

  const handleClickPrev = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
    
  };

  useEffect(() => {
    getCharacters();
  }, [pageNumber]);

  // useEffect hook close to the return
  return (
    <div>
      <InputGroup
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="mb-3"
      >
        <Form.Control
          placeholder="Search"
          aria-label="Search"
          aria-describedby="basic-addon1"
        />
      </InputGroup>

      <h1>Wubba Lubba Dub Dub!</h1>

      <div className="container">
        {characters &&
          filteredCharacters.map((character) => {
            return <Character character={character} key={character.id} />;
          })}

        {error && <h2>Something went wrong</h2>}
      </div>

      <div className="bottom-container">
        <Pagination>
          <Pagination.Prev onClick={handleClickPrev} />
          <Pagination.Next
            onClick={handleClickNext}
          />
        </Pagination>

      </div>
    </div>
  );
}

export default Characters;
