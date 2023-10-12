import React from 'react';
import { Card, Button } from 'react-bootstrap';

export default function OneRoutePage({ user, oneRout }) {
  return (
    <>
      <br />
      <Card style={{ width: '35rem' }}>
        <Card.Img variant="top" src={oneRout.img} />
        <Card.Body>
          <Card.Title>{oneRout.name}</Card.Title>
          <Card.Text>Город {oneRout.location}</Card.Text>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <small>начальная точка: {oneRout.start}</small>
            <small>конечная точка: {oneRout.end}</small>
          </div>
          <br />
          <Card.Text>Общая дистанция: {oneRout.distance} км</Card.Text>
          <Button href={`/route/${oneRout.id}`} variant="secondary">
            Подробнее
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}
