import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function SignInPage({ signInHandler }) {
  return (
    <div style={{
      backgroundImage: 'url("/4bc0cc72f721d641591b086c45817c31.png")',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    }}
    >
      <div className="d-flex align-item-center justify-content-center">
        <Form style={{ width: '30rem' }} onSubmit={signInHandler}>
          <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
            <Form.Label style={{ color: '#FFC618' }}>Email</Form.Label>
            <Form.Control type="email" name="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label style={{ color: '#FFC618' }}>Password</Form.Label>
            <Form.Control type="password" name="password" placeholder="password" />
          </Form.Group>
          <Button variant="warning" type="submit" block>Войти</Button>
        </Form>
      </div>
    </div>
  );
}
