import React from 'react' // do we need this?

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Card } from 'react-bootstrap';



function Character(props) { // information arriving to children from parent component via props 
    // console.log(props.character);
  return (

    
    <div>

        
        <Card style={{ width: "18rem", height: "25rem" }}>
              <Card.Img variant="top" src={props.character.image} />
              <Card.Body>
                <Card.Title>{props.character.name}</Card.Title>
                <Card.Text>{props.character.location.name}</Card.Text>
              </Card.Body>
            </Card>
    </div>
  )
}

export default Character