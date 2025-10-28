import React from "react";
import { Container } from "react-bootstrap";

function FooterApp() {
  const currentYear = new Date().getFullYear();
  const authorEmail = "mateusz.caputa@microsoft.wsei.edu.pl";

  return (
    <footer className="bg-light p-3 border-top mt-auto">
      <Container
        fluid
        className="d-flex justify-content-between align-items-center px-4"
      >
        <div className="text-muted">
          &copy; {currentYear} Wyższa Szkoła Ekonomii i Informatyki w Krakowie.
        </div>
        <div className="text-muted">
          Autor:{" "}
          <a href={`mailto:${authorEmail}`} className="text-decoration-none">
            {authorEmail}
          </a>
        </div>
      </Container>
    </footer>
  );
}

export default FooterApp;
