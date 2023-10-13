import React, { useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import CardRoute from '../UI/CardRoute';

export default function HomePage({ user, allRoutes }) {
  const [routes, setRoutes] = React.useState(allRoutes);

  const deleteHandler = async (id) => {
    const response = await fetch(`/api/del/${id}`, {
      method: 'DELETE',
    });
    if (response.ok) {
      setRoutes((prev) => prev.filter((el) => el.id !== id));
    }
  };

  const [input, setInput] = React.useState('');
  const changeHandler = (e) => {
    setInput(e.target.value);
  };
  useEffect(() => {
    if (input.trim()) {
      const time = setTimeout(() => {
        axios.post('/api/routes/search', { input }).then((res) => setRoutes(res.data));
      }, 300);
      return () => {
        clearTimeout(time);
      };
    }
    if (!input) {
      axios.get('/api/routes').then((res) => setRoutes(res.data));
    }
  }, [input]);

  return (
    <div className="container">
      <br />
      <br />
      <Form.Control
        value={input}
        onChange={changeHandler}
        name="name"
        type="text"
        placeholder="filter"
        style={{ width: '275px' }}
      />
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
