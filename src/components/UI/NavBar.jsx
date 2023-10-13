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
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        {user ? (
          <>
            <Navbar.Brand href="/" style={{ color: '#FFC618' }}>Elbrus tracker</Navbar.Brand>
            <Nav className="ml-auto">
              <Nav.Link href="/routs/add" style={{ color: '#FFC618' }}>Добавить маршрут</Nav.Link>
            </Nav>
            <Nav className="ml-auto">
              <Nav.Link href="/routs/all" style={{ color: '#FFC618' }}>Мои маршруты</Nav.Link>
            </Nav>
            <Nav className="mr-auto">
              <Nav.Link onClick={logoutHandlers} href="/" style={{ color: '#FFC618' }}>Выйти</Nav.Link>
            </Nav>
          </>
        ) : (
          <Nav className="mr-auto">
            <Nav.Link href="/auth/signup" style={{ color: '#FFC618' }}>Зарегистрироваться</Nav.Link>
            <Nav.Link href="/auth/login" style={{ color: '#FFC618' }}>Войти</Nav.Link>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
}
