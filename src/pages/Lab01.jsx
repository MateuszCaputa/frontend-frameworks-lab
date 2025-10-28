import React from "react";
import { people } from "../module-data";
import ProfileList from "../components/profile/ProfileList";
import { Alert } from "react-bootstrap";

function Lab01() {
  if (people.length === 0) {
    return (
      <Alert variant="warning">
        Brak danych do wyświetlenia. Uruchom skrypt generujący dane.
      </Alert>
    );
  }

  return (
    <>
      <h1 className="mb-4 text-center">Laboratorium 1: Lista Profili</h1>

      <ProfileList people={people} cols={3} />
    </>
  );
}

export default Lab01;
