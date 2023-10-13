import React from 'react';
import Button from 'react-bootstrap/Button';
import CardRoute from '../UI/CardRoute';

export default function MyRoutePage({ allUserRoutes, user, deleteHandler }) {
  console.log(allUserRoutes);
  return (
    <div className="container">
      <br />

      <div className="row mt-5" style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        {allUserRoutes.map((route) => (
          <CardRoute key={route.id} route={route} user={user} deleteHandler={deleteHandler} />
        ))}
      </div>
    </div>
  );
}
