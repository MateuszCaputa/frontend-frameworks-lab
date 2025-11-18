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
      <div className="text-center">
        <Card className="bg-light p-4 rounded shadow-sm text-center mb-5">
          <h1 className="display-5">Laboratorium 2: Routing i URL</h1>
          <p className="lead">
            Ta strona obsługuje dynamiczne parametry ścieżki. Wybierz profil z
            listy w Lab 1, aby zobaczyć szczegóły.
          </p>
        </Card>

        <Alert variant="info" className="d-inline-block shadow-sm">
          <h4 className="alert-heading">Wskazówka</h4>
          <p>
            Aby przetestować tę stronę, musisz podać ID w adresie URL lub użyć
            poniższego przycisku.
          </p>
          <hr />
          <Button variant="primary" as={NavLink} to="/lab02/1">
            Zobacz Przykładowy Profil (ID 1)
          </Button>
        </Alert>
      </div>
    );
  }

  const person = people.find((p) => p.id === personId);

  if (!person) {
    return (
      <Alert variant="danger" className="text-center mt-5">
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
    <div className="d-flex justify-content-center align-items-center flex-column">
      <h2 className="mb-4 text-muted">Szczegóły Profilu</h2>

      <Card className="shadow-lg p-3" style={{ maxWidth: "400px" }}>
        <Card.Title className="text-center text-success mb-4">
          Profil Użytkownika (ID: {person.id})
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
