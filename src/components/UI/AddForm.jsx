import React from 'react';
import { Form, Button } from 'react-bootstrap';

export default function AddForm() {
  return (
    <>
      <br />
      <Form>
        <Form.Group className="mb-3" style={{ width: '500px' }}>
          <Form.Label>Фото</Form.Label>
          <Form.Control name="img" type="email" placeholder="фото" />
          <Form.Text className="text-muted">Добавь фотку места, куда мечтаешь поехать</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" style={{ width: '500px' }}>
          <Form.Label>Название маршрута</Form.Label>
          <Form.Control name="name" type="password" placeholder="название" />
        </Form.Group>

        <Form.Group className="mb-3" style={{ width: '500px' }}>
          <Form.Label>Локация</Form.Label>
          <Form.Control name="location" type="password" placeholder="локация" />
          <Form.Text className="text-muted">
            Добавь место или город, где будет проходить маршрут{' '}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" style={{ width: '300px' }}>
          <Form.Label>Начальная точка маршрута</Form.Label>
          <Form.Control name="start" type="password" />
        </Form.Group>

        <Form.Group className="mb-3" style={{ width: '300px' }}>
          <Form.Label>Конечная точка маршрута</Form.Label>
          <Form.Control name="end" type="password" />
        </Form.Group>

        <Form.Group className="mb-3" style={{ width: '300px' }}>
          <Form.Label>Общая дистанция маршрута</Form.Label>
          <Form.Control name="distance" type="password" />
        </Form.Group>

        <Button variant="secondary" type="submit">
          Добавть маршрут
        </Button>
      </Form>
    </>
  );
}
