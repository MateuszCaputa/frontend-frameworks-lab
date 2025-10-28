import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function NavBarMenuApp() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container fluid className="px-4">
        <Navbar.Brand as={NavLink} to="/home">
          Frontend LAB
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/lab01">
              Laboratorium 1
            </Nav.Link>
            <Nav.Link as={NavLink} to="/lab02/1">
              Laboratorium 2 (ID 1)
            </Nav.Link>
            <Nav.Link as={NavLink} to="/lab03">
              Laboratorium 3
            </Nav.Link>
            <Nav.Link as={NavLink} to="/lab04/add">
              Laboratorium 4 (Dodaj)
            </Nav.Link>
            <Nav.Link as={NavLink} to="/lab05">
              Laboratorium 5
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarMenuApp;
