import React from 'react';
import { Card, Button, ButtonGroup } from 'react-bootstrap';
import EditCard from './EditCard';

export default function CardRoute({ user, route }) {
  const [show, setShow] = React.useState(false);
  const showHandler = () => {
    setShow((prev) => !prev);
  };
  return (
    <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src={route.img} />
      <Card.Body>
        <Card.Title>{route.name}</Card.Title>
        <Card.Text>{route.location}</Card.Text>
        <Card.Text>дистанция {route.distance} км</Card.Text>
        <div className="d-flex justify-content-between">
          <Button href={`/route/${route.id}`} variant="secondary">
            Подробнее
          </Button>
          <ButtonGroup aria-label="Basic example">
            <Button variant="secondary">уд.</Button>
            <Button variant="secondary" onClick={showHandler}>
              ред.
            </Button>
          </ButtonGroup>
        </div>
      </Card.Body>
      {show && <EditCard />}
    </Card>
  );
}
