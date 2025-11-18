import React, { useContext, useState } from "react";
import { Form, Button, Card, Alert, FormControl } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import AppContext from "../../../data/AppContext";

/**
 * (Lab 4, Task 6 & 7)
 * Renders the form for editing an existing person.
 * Uses plain JS/HTML FormData validation with manual input masking.
 */
function PersonEditForm() {
  const { items, dispatch } = useContext(AppContext);
  const navigate = useNavigate();
  const { id } = useParams();

  const personToEdit = items.find((p) => p.id.toString() === id);

  const [errors, setErrors] = useState([]);
  const [isSending, setSending] = useState(false);

  const [phoneValue, setPhoneValue] = useState(personToEdit?.phone || "");

  /**
   * Handles manual phone number masking (XXX-XXX-XXX).
   */
  const handlePhoneChange = (e) => {
    const rawValue = e.target.value.replace(/\D/g, "");
    let formatted = rawValue;

    if (rawValue.length > 3 && rawValue.length <= 6) {
      formatted = `${rawValue.slice(0, 3)}-${rawValue.slice(3)}`;
    } else if (rawValue.length > 6) {
      formatted = `${rawValue.slice(0, 3)}-${rawValue.slice(
        3,
        6
      )}-${rawValue.slice(6, 9)}`;
    }
    setPhoneValue(formatted);
  };

  /**
   * Handles the form submission.
   */
  const onSubmitFunction = async (e) => {
    e.preventDefault();
    setErrors([]);

    const data = new FormData(e.target);
    const name = data.get("name");
    const email = data.get("email");
    const phone = data.get("phone");

    const newErrors = [];

    if (!name || name.length < 3) {
      newErrors.push("Imię musi mieć co najmniej 3 znaki.");
    }

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.push("Podaj poprawny adres email.");
    }

    if (!phone || !/^[0-9]{3}-[0-9]{3}-[0-9]{3}$/.test(phone)) {
      newErrors.push("Numer telefonu musi być w formacie 123-456-789.");
    }

    if (newErrors.length > 0) {
      setErrors(newErrors);
      return;
    }

    setSending(true);
    await new Promise((resolve) => setTimeout(resolve, 500));

    const updatedPerson = {
      id: personToEdit.id,
      name: name,
      email: email,
      phone: phone,
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
            <Form.Label htmlFor="phone">Numer telefonu</Form.Label>
            <FormControl
              required
              id="phone"
              name="phone"
              value={phoneValue}
              onChange={handlePhoneChange}
              maxLength={11}
              placeholder="123-456-789"
            />
            <Form.Text className="text-muted">
              Format: 123-456-789 (uzupełniany automatycznie)
            </Form.Text>
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
