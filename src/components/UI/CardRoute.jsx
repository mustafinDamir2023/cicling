import React from 'react';
import { Card, Button, ButtonGroup } from 'react-bootstrap';
import axios from 'axios';
import EditCard from './EditCard';

export default function CardRoute({ user, route, deleteHandler }) {
  const [show, setShow] = React.useState(false);

  const [rout, setRout] = React.useState(route);
  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    console.log(formData);
    const response = await axios.put(`/api/edit/${route.id}`, formData);
    setRout(response.data);
    setShow(false);
  };
  // console.log("++++++++++++", route.user_id, user.id)
  return (
    <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src={rout.img} style={{ width: '320px', height: '180px' }} />
      <Card.Body>
        <Card.Title style={{ color: 'white' }}>{rout.name}</Card.Title>
        <Card.Text>{rout.location}</Card.Text>
        <Card.Text style={{ color: '#FFC618' }}>
          Дистанция
          {' '}
          {rout.distance}
          {' '}
          км
        </Card.Text>
        <div className="d-flex justify-content-between">
          <Button href={`/route/${route.id}`} variant="warning">
            Подробнее
          </Button>
          {user?.id === route.user_id && (
            <ButtonGroup aria-label="Basic example">
              <Button onClick={() => deleteHandler(route.id)} variant="warning">
                уд.
              </Button>
              <Button onClick={() => setShow((prev) => !prev)} variant="warning">
                ред.
              </Button>
            </ButtonGroup>
          )}
        </div>
      </Card.Body>
      {show && <EditCard rout={rout} submitHandler={submitHandler} />}
    </Card>
  );
}
