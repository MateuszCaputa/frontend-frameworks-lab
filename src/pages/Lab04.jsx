import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Lab04() {
  return (
    <Card className="text-center bg-light p-5 rounded shadow-sm border-0">
      <Card.Body>
        <h1 className="display-4">Laboratorium 4: Kontekst i Formularze</h1>
        <p className="lead">
          Na tej stronie zaimplementowaliśmy Kontekst API oraz formularze.
        </p>
        <hr className="my-4" />
        <p>
          Użyj nawigacji, aby dodać nową osobę, lub przejdź do Lab 3, aby
          edytować istniejącą.
        </p>
        <Button as={Link} to="/lab04/add" variant="primary" size="lg">
          Przejdź do formularza dodawania
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Lab04;
