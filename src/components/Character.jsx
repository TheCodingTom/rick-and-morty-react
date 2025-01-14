import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function Character(props) {
  // information arriving to children from parent component via props

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
            <h3 className="card-title">{props.character.name}</h3>
            <Button
              variant="success"
              style={{ width: "70%" }}
              onClick={handleShow}
            >
              Read more
            </Button>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Woohoo, you are reading this text in a modal!
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
               
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Character;
