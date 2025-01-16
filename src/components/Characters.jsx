import { useEffect } from "react";
import { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import Character from "./Character";
import logo from './logo.png'

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
    if (pageNumber < 42) {
      // not the best way of doing it
      setPageNumber(pageNumber + 1);
    }
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
      <div className="top-banner">
        <div className="search-container">
          <InputGroup
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="mb-3 search-bar"
          >
            <Form.Control
              placeholder="Search"
              aria-label="Search"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </div>
      </div>

   
        <div className="title-container">
        <h1>Wubba Lubba Dub Dub!</h1>
        <img className="logo" src={logo} alt="" />
        </div>
       

      <div className="container">
        {characters &&
          filteredCharacters.map((character) => {
            return <Character character={character} key={character.id} />;
          })}

        {error && <h2>Something went wrong</h2>}
      </div>

      <div className="bottom-container">
        <button className="pag-button" onClick={handleClickPrev}>Prev</button>
        <button className="pag-button" onClick={handleClickNext}>Next</button>
      </div>
    </div>
  );
}

export default Characters;
