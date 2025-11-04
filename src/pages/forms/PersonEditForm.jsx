import React, { useContext, useState } from "react";
import { Form, Button, Card, Alert, FormControl } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import AppContext from "../../../data/AppContext";

/**
 * (Lab 4, Task 6 & 7)
 * Renders the form for editing an existing person.
 * Uses plain JS/HTML FormData (as per instructions).
 */
function PersonEditForm() {
  const { items, dispatch } = useContext(AppContext);
  const navigate = useNavigate();
  const { id } = useParams();

  const personToEdit = items.find((p) => p.id.toString() === id);

  const [errors, setErrors] = useState([]);
  const [isSending, setSending] = useState(false);

  /**
   * Handles the form submission.
   */
  const onSubmitFunction = async (e) => {
    e.preventDefault();
    setErrors([]);

    const data = new FormData(e.target);

    if (data.get("name").length < 3) {
      setErrors(["Imię musi mieć co najmniej 3 znaki."]);
      return;
    }

    setSending(true);
    await new Promise((resolve) => setTimeout(resolve, 500));

    const updatedPerson = {
      id: personToEdit.id,
      name: data.get("name"),
      email: data.get("email"),
      phone: data.get("phone"),
    };

    dispatch({
      type: "edit",
      payload: updatedPerson,
    });

    setSending(false);
    navigate("/lab03");
  };

  if (!personToEdit) {
    return <Alert variant="danger">Nie znaleziono osoby o ID: {id}</Alert>;
  }

  return (
    <Card className="shadow-sm">
      <Card.Header>
        <Card.Title>Edytuj osobę: {personToEdit.name}</Card.Title>
      </Card.Header>
      <Card.Body>
        {errors.length > 0 && (
          <Alert variant="danger">
            {errors.map((e, i) => (
              <p key={i} className="mb-0">
                {e}
              </p>
            ))}
          </Alert>
        )}

        <Form onSubmit={onSubmitFunction}>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="name">Imię i nazwisko</Form.Label>
            <FormControl
              required
              id="name"
              name="name"
              defaultValue={personToEdit.name}
              minLength={3}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label htmlFor="email">Adres email</Form.Label>
            <FormControl
              required
              id="email"
              name="email"
              type="email"
              defaultValue={personToEdit.email}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label htmlFor="phone">Telefon</Form.Label>
            <FormControl
              required
              id="phone"
              name="phone"
              defaultValue={personToEdit.phone}
            />
          </Form.Group>

          <Button disabled={isSending} type="submit" variant="primary">
            {isSending ? "Zapisywanie..." : "Zapisz zmiany"}
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default PersonEditForm;
