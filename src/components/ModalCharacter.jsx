import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function ModalCharacter(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button className="card-button" variant="success" onClick={handleShow}>
        Read more
      </Button>

      <Modal show={show} onHide={handleClose}>
        <div className="modal-div">
          <h4>{props.character.name}</h4>

          <img
            className="modal-pic"
            src={props.character.image}
            alt="image of a Rick & Morty character"
          />
          <p>Species: {props.character.species}</p>
          <p>Status: {props.character.status}</p>
          <p>Last location: {props.character.location.name}</p>

          <Button
            className="card-button"
            variant="success"
            onClick={handleClose}
          >
            Close
          </Button>
        </div>
      </Modal>
    </div>
  );
}

export default ModalCharacter;
