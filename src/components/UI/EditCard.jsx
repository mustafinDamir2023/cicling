import React from 'react';
import { Form, Button, InputGroup } from 'react-bootstrap';

export default function EditCard() {
  return (
    <Form>
      <InputGroup className="mb-1">
        <InputGroup.Text id="basic-addon1">картинка</InputGroup.Text>
        <Form.Control
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <InputGroup className="mb-1">
        <InputGroup.Text id="basic-addon1">название</InputGroup.Text>
        <Form.Control
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <InputGroup className="mb-1">
        <InputGroup.Text id="basic-addon1">город</InputGroup.Text>
        <Form.Control
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <InputGroup className="mb-1">
        <InputGroup.Text id="basic-addon1">дистанция</InputGroup.Text>
        <Form.Control
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <br />
      <div className="d-flex justify-content-center">
        <Button className="d-flex justify-content-center" variant="secondary" size="sm">
          редактировать
        </Button>
      </div>
    </Form>
  );
}
