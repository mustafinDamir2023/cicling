import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

export default function NavBar({ user }) {
  return (
    <Navbar bg="secondary" data-bs-theme="dark">
      <Container>
        <>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="/routs/add">Add routs</Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link href="/routs/all">My routs</Nav.Link>
          </Nav>
          <Nav className="mr-auto">
            <Nav.Link href="/logout">logout</Nav.Link>
          </Nav>
        </>

        <Nav className="ml-auto mr-auto">
          <Nav.Link href="/signup">signup</Nav.Link>
          <Nav.Link href="/login">login</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
