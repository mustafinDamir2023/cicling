import React from 'react';
import { Form, Button } from 'react-bootstrap';

export default function AddForm({ submitHandler }) {
  return (
    <>
      <br />
      <Form onSubmit={submitHandler} encType="multipart/form-data">
        <Form.Group className="mb-3" style={{ width: '500px' }}>
          <Form.Label>Фото</Form.Label>
          <Form.Control name="img" type="text" placeholder="фото" />
          <Form.Text className="text-muted">Добавь фотку места, куда мечтаешь поехать</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" style={{ width: '500px' }}>
          <Form.Label>Название маршрута</Form.Label>
          <Form.Control name="name" type="text" placeholder="название" />
        </Form.Group>

        <Form.Group className="mb-3" style={{ width: '500px' }}>
          <Form.Label>Локация</Form.Label>
          <Form.Control name="location" type="text" placeholder="локация" />
          <Form.Text className="text-muted">
            Добавь место или город, где будет проходить маршрут
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" style={{ width: '300px' }}>
          <Form.Label>Начальная точка маршрута</Form.Label>
          <Form.Control name="start" type="text" />
        </Form.Group>

        <Form.Group className="mb-3" style={{ width: '300px' }}>
          <Form.Label>Конечная точка маршрута</Form.Label>
          <Form.Control name="end" type="text" />
        </Form.Group>

        <Form.Group className="mb-3" style={{ width: '300px' }}>
          <Form.Label>Общая дистанция маршрута</Form.Label>
          <Form.Control name="distance" type="text" />
        </Form.Group>

        <Button variant="secondary" type="submit">
          Добавить маршрут
        </Button>
      </Form>
    </>
  );
}
