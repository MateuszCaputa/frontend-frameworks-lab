import React from "react";
import { Card } from "react-bootstrap";

function Home() {
  return (
    <Card className="text-center bg-light p-5 rounded shadow-sm border-0">
      <Card.Body>
        <h1 className="display-4">
          Witaj w Laboratorium Frameworki Frontendowe
        </h1>
        <p className="lead">
          Budujemy naszą aplikację, realizując zadania z kolejnych laboratoriów.
        </p>
        <hr className="my-4" />
        <p>
          Skorzystaj z paska nawigacji, aby przejść do zadań z laboratoriów.
        </p>
      </Card.Body>
    </Card>
  );
}

export default Home;
