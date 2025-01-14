import React from "react"; // do we need this?

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Card } from "react-bootstrap";

function Character(props) {
  // information arriving to children from parent component via props
  // console.log(props.character);
  return (
    <div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={props.character.image} alt="image of a Rick & Morty character" className="cardImage"/>
          </div>
          <div className="flip-card-back">
            <h1>{props.character.name}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Character;
