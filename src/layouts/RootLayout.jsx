import React from "react";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import NavBarMenuApp from "../components/layout/NavBarMenuApp";
import FooterApp from "../components/layout/FooterApp";

/**
 * (Lab 2, Task 1 & 6)
 * The main application layout component.
 * Renders the Navbar, Footer, and the main content area via <Outlet>.
 */
function RootLayout() {
  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      <NavBarMenuApp />

      <Container fluid className="my-5 flex-grow-1 px-4">
        <Outlet />
      </Container>

      <FooterApp />
    </div>
  );
}

export default RootLayout;
