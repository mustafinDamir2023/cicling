import React from 'react';
import { Form, Button } from 'react-bootstrap';

export default function AddForm({ submitHandler }) {
  return (
    <>
      <br />
      <Form onSubmit={submitHandler} encType="multipart/form-data">
        <Form.Group className="mb-3" style={{ width: '500px' }}>
          <Form.Label style={{ color: '#FFC618' }}>Фото</Form.Label>
          <Form.Control name="img" type="text" placeholder="фото" />
          <Form.Text className="text-muted" style={{ color: '#FFC618' }}>Добавь фотку места, куда мечтаешь поехать</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" style={{ width: '500px' }}>
          <Form.Label style={{ color: '#FFC618' }}>Название маршрута</Form.Label>
          <Form.Control name="name" type="text" placeholder="название" />
        </Form.Group>

        <Form.Group className="mb-3" style={{ width: '500px' }}>
          <Form.Label style={{ color: '#FFC618' }}>Локация</Form.Label>
          <Form.Control name="location" type="text" placeholder="локация" />
          <Form.Text className="text-muted" style={{ color: '#FFC618' }}>
            Добавь место или город, где будет проходить маршрут
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" style={{ width: '300px' }}>
          <Form.Label style={{ color: '#FFC618' }}>Начальная точка маршрута</Form.Label>
          <Form.Control name="start" type="text" />
        </Form.Group>

        <Form.Group className="mb-3" style={{ width: '300px' }}>
          <Form.Label style={{ color: '#FFC618' }}>Конечная точка маршрута</Form.Label>
          <Form.Control name="end" type="text" />
        </Form.Group>

        <Form.Group className="mb-3" style={{ width: '300px' }}>
          <Form.Label style={{ color: '#FFC618' }}>Общая дистанция маршрута</Form.Label>
          <Form.Control name="distance" type="text" />
        </Form.Group>

        <Button variant="secondary" type="submit" style={{ color: '#FFC618' }}>
          Добавить маршрут
        </Button>
      </Form>
    </>
  );
}
