import React from 'react';
import { Form, Button } from 'react-bootstrap';
import CardRoute from '../UI/CardRoute';

export default function HomePage({ user, allRoutes }) {
  const [routes, setRoutes] = React.useState(allRoutes);
  return (
    <div className="container">
      <br />
      <br />
      <Form.Control name="name" type="text" placeholder="filter" style={{width: '275px'}}/>
      <br />
      <Button variant="secondary" type="submit">
        Submit
      </Button>
      <div className="row mt-5" style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        {routes.map((route) => (
          <CardRoute key={route.id} route={route} user={user} />
        ))}
      </div>
    </div>
  );
}
