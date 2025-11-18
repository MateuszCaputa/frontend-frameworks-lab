import React from "react";
import { people } from "../module-data";
import ProfileList from "../components/profile/ProfileList";
import { Alert } from "react-bootstrap";
import { Card } from "react-bootstrap";

/**
 * (Lab 1) & (Lab 2, Preparation)
 * Renders the page for Lab 1, which displays the list of profile cards.
 * Includes a warning if the data module is empty.
 */
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
      <Card className="bg-light p-4 rounded shadow-sm text-center mb-5">
        <h1 className="display-5">Laboratorium 1: Lista Profili</h1>
        <p className="lead">
          Podstawowe komponenty React, przekazywanie właściwości (props) i
          generowanie listy.
        </p>
      </Card>

      <ProfileList people={people} cols={3} />
    </>
  );
}

export default Lab01;
