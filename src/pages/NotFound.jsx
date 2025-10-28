import React from "react";
import { Alert, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function NotFound() {
  return (
    <div className="d-flex justify-content-center">
      <Alert variant="warning" className="text-center shadow-lg p-5">
        <h1 className="display-1">404</h1>
        <h2 className="mb-4">Brak strony</h2>
        <p className="lead">Przepraszamy, szukana strona nie istnieje.</p>
        <Button variant="warning" as={NavLink} to="/home" className="mt-3">
          Idź do Strony Głównej
        </Button>
      </Alert>
    </div>
  );
}

export default NotFound;
