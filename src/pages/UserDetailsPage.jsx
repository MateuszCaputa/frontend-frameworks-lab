import React from "react";
import { useParams, Link } from "react-router-dom";
import useFetch from "../components/hooks/useFetch";
import { Card, Spinner, Alert, Button } from "react-bootstrap";

/**
 * (Lab 5, Task 5.1)
 * Renders the page for displaying details for a single user.
 * Fetches the user data based on the 'id' from the URL parameters.
 */
function UserDetailsPage() {
  const { id } = useParams();
  const {
    data: user,
    loading,
    error,
  } = useFetch(`https://jsonplaceholder.typicode.com/users/${id}`);

  if (loading) return <Spinner animation="border" />;
  if (error) return <Alert variant="danger">Błąd: {error.message}</Alert>;
  if (!user)
    return <Alert variant="warning">Nie znaleziono użytkownika.</Alert>;

  return (
    <>
      <Button
        as={Link}
        to="/lab05"
        variant="outline-secondary"
        className="mb-3"
      >
        &larr; Wróć do listy
      </Button>
      <Card className="shadow-sm">
        <Card.Header>
          <Card.Title as="h2">Szczegóły użytkownika: {user.name}</Card.Title>
        </Card.Header>
        <Card.Body>
          <p>
            <strong>Username:</strong> {user.username}
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href={`mailto:${user.email}`}>{user.email}</a>
          </p>
          <p>
            <strong>Phone:</strong> {user.phone}
          </p>
          <p>
            <strong>Website:</strong>{" "}
            <a
              href={`http://${user.website}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {user.website}
            </a>
          </p>
          <hr />
          <Card.Subtitle className="mb-2 text-muted">Adres</Card.Subtitle>
          <Card.Text>
            {user.address.street}, {user.address.suite}
            <br />
            {user.address.city}, {user.address.zipcode}
          </Card.Text>
          <hr />
          <Card.Subtitle className="mb-2 text-muted">Firma</Card.Subtitle>
          <Card.Text>
            <strong>{user.company.name}</strong>
            <br />
            <em>{user.company.catchPhrase}</em>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default UserDetailsPage;
