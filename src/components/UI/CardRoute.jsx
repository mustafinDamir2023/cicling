import React from 'react';
import { Card, Button, ButtonGroup } from 'react-bootstrap';
import axios from 'axios';
import EditCard from './EditCard';

export default function CardRoute({ user, route, deleteHandler }) {
  const [show, setShow] = React.useState(false);
  // const showHandler = () => {
  //   setShow((prev) => !prev);
  // };

  const [rout, setRout] = React.useState(route);
  const submitHandler = async (e) => {
    e.preventDefault();
  
    const formData = Object.fromEntries(new FormData(e.target));
    console.log(formData)
    const response = await axios.put(`/api/edit/${route.id}`, formData);
    setRout(response.data);
    setShow(false);
    console.log(response.data);
  };

  return (
    <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src={rout.img} />
      <Card.Body>
        <Card.Title>{rout.name}</Card.Title>
        <Card.Text>{rout.location}</Card.Text>
        <Card.Text>Дистанция {rout.distance} км</Card.Text>
        <div className="d-flex justify-content-between">
          <Button href={`/route/${route.id}`} variant="secondary">
            Подробнее
          </Button>
          <ButtonGroup aria-label="Basic example">
            <Button onClick={() => deleteHandler(rout.id)} variant="secondary">
              уд.
            </Button>
            <Button
              onClick={() => {
                setShow(true);
              }}
              variant="secondary"
            >
              ред.
            </Button>
          </ButtonGroup>
        </div>
      </Card.Body>
      {show && <EditCard rout={rout} submitHandler={submitHandler} />}
    </Card>
  );
}
