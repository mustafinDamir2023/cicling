import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import axios from 'axios';

export default function NavBar({ user }) {
  const logoutHandlers = async (e) => {
    e.preventDefault();
    const response = await axios.post('api/auth/logout');
    if (response.status === 200) window.location = '/';
  };
  return (
    <Navbar bg="secondary" data-bs-theme="dark">
      <Container>
        {user ? (
          <>
            <Navbar.Brand href="/">Elbrus tracker</Navbar.Brand>
            <Nav className="ml-auto">
              <Nav.Link href="/routs/add">Добавить маршрут</Nav.Link>
            </Nav>
            <Nav className="ml-auto">
              <Nav.Link href="/routs/all">Мои маршруты</Nav.Link>
            </Nav>
            <Nav className="mr-auto">
              <Nav.Link onClick={logoutHandlers} href="/">Выйти</Nav.Link>
            </Nav>
          </>
        ) : (
          <Nav className="ml-auto mr-auto">
            <Nav.Link href="/auth/signup">Зарегистрироваться</Nav.Link>
            <Nav.Link href="/auth/login">Войти</Nav.Link>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
}
