import React from 'react'
import { Card } from 'react-bootstrap'

function Character(props) { // information arriving to children from parent component via props 
    // console.log(props.character);
  return (
    <div>
        <Card style={{ width: "18rem" }}>
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