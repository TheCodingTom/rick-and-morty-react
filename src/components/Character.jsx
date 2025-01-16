import React from "react";
import ModalCharacter from "./ModalCharacter";

function Character(props) {
  // information arriving to children from parent component via props

  // console.log(props.character);
  return (
    <div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img
              src={props.character.image}
              alt="image of a Rick & Morty character"
              className="card-image"
            />
          </div>
          <div className="flip-card-back">
            <p className="card-title">{props.character.name}</p>
            <ModalCharacter character={props.character} key={props.character.id}/>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Character;
