import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function ModalCharacter(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button variant="success" onClick={handleShow}>
        Read more
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title className="my-modal">{props.character.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="my-modal">
          <img
            src={props.character.image}
            alt="image of a Rick & Morty character"
          />
          <p>Status: {props.character.status}</p>
          <p>Last location: {props.character.location.name}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="my-modal"
            variant="secondary"
            onClick={handleClose}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalCharacter;
