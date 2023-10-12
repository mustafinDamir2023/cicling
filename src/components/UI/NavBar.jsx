import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

export default function NavBar({ user }) {
  return (
    <Navbar bg="secondary" data-bs-theme="dark">
      <Container>
        <>
          <Navbar.Brand href="/">Elbrus tracker</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="/routs/add">Добавить маршрут</Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link href="/routs/all">Мои маршруты</Nav.Link>
          </Nav>
          <Nav className="mr-auto">
            <Nav.Link href="/logout">Выйти</Nav.Link>
          </Nav>
        </>

        <Nav className="ml-auto mr-auto">
          <Nav.Link href="/signup">Зарегистрироваться</Nav.Link>
          <Nav.Link href="/login">Войти</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
