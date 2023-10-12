import React from 'react';
import { Form, Button } from 'react-bootstrap';
import CardRoute from '../UI/CardRoute';

export default function HomePage({ user, allRoutes }) {
  const [routes, setRoutes] = React.useState(allRoutes);

  const deleteHandler = async (id) => {
    const response = await fetch(`/api/del/${id}`, {
      method: 'DELETE',
      // headers: {
      //   'Content-Type': 'application/json',
      // },
    });
    if (response.ok) {
      setRoutes((prev) => prev.filter((el) => el.id !== id));
    }
  };

  return (
    <div className="container">
      <br />
      <br />
      <Form.Control name="name" type="text" placeholder="filter" style={{ width: '275px' }} />
      <br />
      <Button variant="secondary" type="submit">
        Поиск
      </Button>
      <div className="row mt-5" style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        {routes.map((route) => (
          <CardRoute key={route.id} route={route} user={user} deleteHandler={deleteHandler} />
        ))}
      </div>
    </div>
  );
}
