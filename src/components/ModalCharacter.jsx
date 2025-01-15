import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';

function ModalCharacter(props) {

    const [show, setShow] = useState(false);
    
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);


  return (
    <div>
        <Button
              variant="success"
              style={{ width: "70%" }}
              onClick={handleShow}
            >
              Read more
            </Button>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>{props.character.name}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <img
                  src={props.character.image}
                  alt="image of a Rick & Morty character"
                />
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
    </div>
  )
}

export default ModalCharacter