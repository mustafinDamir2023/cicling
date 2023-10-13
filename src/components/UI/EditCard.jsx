import React from 'react';
import { Form, Button, InputGroup } from 'react-bootstrap';

export default function EditCard({ rout, submitHandler }) {
  // const [rout, setRout] = React.useState(route);
  // const submitHandler = async (e) => {
  //   e.preventDefault();
  //   const formData = Object.fromEntries(new FormData(e.target));
  //   const response = await axios.put(`/api/edit/${route.id}`, formData);
  //   setRout(response.data);
  //   console.log('=============', formData);
  // };
  return (
    <Form onSubmit={submitHandler}>
      <InputGroup className="mb-1">
        <InputGroup.Text id="basic-addon1">картинка</InputGroup.Text>
        <Form.Control name="img" aria-label="Username" aria-describedby="basic-addon1" />
      </InputGroup>
      <InputGroup className="mb-1">
        <InputGroup.Text id="basic-addon1">название</InputGroup.Text>
        <Form.Control
          name="name"
          defaultValue={rout.name}
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <InputGroup className="mb-1">
        <InputGroup.Text id="basic-addon1">город</InputGroup.Text>
        <Form.Control
          name="location"
          defaultValue={rout.location}
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <InputGroup className="mb-1">
        <InputGroup.Text id="basic-addon1">дистанция</InputGroup.Text>
        <Form.Control
          name="distance"
          defaultValue={rout.distance}
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <br />
      <div className="d-flex justify-content-center">
        <Button
          className="d-flex justify-content-center"
          type="submit"
          variant="secondary"
          size="sm"
        >
          редактировать
        </Button>
      </div>
    </Form>
  );
}
