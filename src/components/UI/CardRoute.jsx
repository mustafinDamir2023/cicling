import React from 'react';
import { Card, Button, ButtonGroup } from 'react-bootstrap';
import Raiting from './RaitingPage';

export default function CardRoute({ user, route, deleteHandler }) {
  return (
    <Card style={{ width: '20rem' }}>
      
      <Card.Img variant="top" src={route.img} />
      <Card.Body>
        
        <Card.Title>{route.name}</Card.Title>
        <Card.Text>{route.location}</Card.Text>
        <Card.Text>Дистанция {route.distance} км</Card.Text>
        <div className="d-flex justify-content-between">
          <Button href={`/route/${route.id}`} variant="secondary">
            Подробнее
          </Button>
          <ButtonGroup aria-label="Basic example">
            <Button onClick={() => deleteHandler(route.id)} variant="secondary">уд.</Button>
            <Button variant="secondary">ред.</Button>
          </ButtonGroup>
        </div>
      </Card.Body>
    </Card>
  );
}
