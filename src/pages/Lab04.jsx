import React from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

/**
 * (Lab 4, Preparation)
 * Renders the placeholder page for Lab 4.
 * Explains the lab's topics (Context, Forms) and links to the 'Add Person' form.
 */
function Lab04() {
  return (
    <div className="text-center">
      <Card className="bg-light p-4 rounded shadow-sm text-center mb-5 border-0">
        <h1 className="display-5">Laboratorium 4: Kontekst i Formularze</h1>
        <p className="lead">
          Zarządzanie stanem globalnym (Context API) oraz obsługa formularzy
          (React Hook Form).
        </p>
      </Card>

      <Alert
        variant="info"
        className="d-inline-block shadow-sm p-4"
        style={{ maxWidth: "700px" }}
      >
        <h4 className="alert-heading">Wskazówka</h4>
        <p>
          Aby przetestować formularze, możesz skorzystać z paska nawigacji (link
          "Laboratorium 4 (Dodaj)") lub kliknąć przycisk poniżej. Edycja
          dostępna jest z poziomu listy w Lab 3.
        </p>
        <hr />
        <Button as={Link} to="/lab04/add" variant="primary">
          Przejdź do formularza dodawania
        </Button>
      </Alert>
    </div>
  );
}

export default Lab04;
