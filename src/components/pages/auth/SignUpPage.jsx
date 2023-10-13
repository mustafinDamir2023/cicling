import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function SignUpPage({ signUpHandler }) {
  return (
    <div className="d-flex align-item-center justify-content-center">
      <Form style={{ width: '30rem' }} onSubmit={signUpHandler}>
        <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
          <Form.Label style={{ color: '#FFC618' }}>Email</Form.Label>
          <Form.Control type="email" name="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label style={{ color: '#FFC618' }}>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label style={{ color: '#FFC618' }}>Name</Form.Label>
          <Form.Control type="text" placeholder="name" name="name" />
        </Form.Group>
        <Button variant="light" type="submit" block>Зарегистрироваться</Button>
      </Form>
    </div>
  );
}
