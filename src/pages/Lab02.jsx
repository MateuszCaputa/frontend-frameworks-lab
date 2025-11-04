import React from "react";
import { useParams, NavLink } from "react-router-dom";
import { people } from "../module-data";
import ProfileCard from "../components/profile/ProfileCard";
import { Alert, Card, Button } from "react-bootstrap";

/**
 * (Lab 2, Task 2, 4, 5)
 * Renders the profile detail page.
 * Fetches the person's ID from the URL parameters using 'useParams'.
 * Handles cases for missing ID or non-existent person.
 */
function Lab02() {
  const { id: paramId } = useParams();
  const personId = parseInt(paramId, 10);

  if (!paramId) {
    return (
      <Alert variant="info" className="text-center">
        <h2>Laboratorium 2: Szczegóły Profilu</h2>
        <p className="lead">
          Brak identyfikatora osoby. Wybierz ID z listy lub przejdź do Lab 1.
        </p>
        <hr />
        <Button variant="primary" as={NavLink} to="/lab02/1">
          Zobacz Przykładowy Profil (ID 1)
        </Button>
      </Alert>
    );
  }

  const person = people.find((p) => p.id === personId);

  if (!person) {
    return (
      <Alert variant="danger" className="text-center">
        <h2>Nie znaleziono</h2>
        <p className="lead">
          Nie znaleziono osoby o identyfikatorze:{" "}
          <span className="fw-bold">{paramId}</span>.
        </p>
        <Button variant="outline-danger" as={NavLink} to="/lab01">
          Powrót do listy profili
        </Button>
      </Alert>
    );
  }

  return (
    <div className="d-flex justify-content-center">
      <Card className="shadow-lg p-3" style={{ maxWidth: "400px" }}>
        <Card.Title className="text-center text-success mb-4">
          Szczegóły Profilu (ID: {person.id})
        </Card.Title>
        <ProfileCard {...person} />
        <Button
          variant="outline-secondary"
          as={NavLink}
          to="/lab01"
          className="mt-3"
        >
          &larr; Powrót do listy
        </Button>
      </Card>
    </div>
  );
}

export default Lab02;
