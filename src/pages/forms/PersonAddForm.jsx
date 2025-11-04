import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Form, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import AppContext from "../../../data/AppContext";

/**
 * (Lab 4, Task 6 & 7)
 * Renders the form for adding a new person.
 * Uses React Hook Form for validation.
 */
function PersonAddForm() {
  const { dispatch } = useContext(AppContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  /**
   * Handles the form submission.
   * @param {object} data - Data from the form.
   */
  const onSubmit = (data) => {
    dispatch({
      type: "add",
      payload: data,
    });

    navigate("/lab03");
  };

  return (
    <Card className="shadow-sm">
      <Card.Header>
        <Card.Title>Dodaj nową osobę</Card.Title>
      </Card.Header>
      <Card.Body>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3" controlId="formPersonName">
            <Form.Label>Imię i nazwisko</Form.Label>
            <Form.Control
              type="text"
              placeholder="Wprowadź imię i nazwisko"
              {...register("name", {
                required: "Imię jest wymagane.",
                minLength: {
                  value: 3,
                  message: "Imię musi mieć co najmniej 3 znaki.",
                },
              })}
              isInvalid={!!errors.name}
            />
            <Form.Control.Feedback type="invalid">
              {errors.name?.message}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPersonEmail">
            <Form.Label>Adres email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Wprowadź email"
              {...register("email", {
                required: "Email jest wymagany.",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Niepoprawny format email.",
                },
              })}
              isInvalid={!!errors.email}
            />
            <Form.Control.Feedback type="invalid">
              {errors.email?.message}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPersonPhone">
            <Form.Label>Telefon</Form.Label>
            <Form.Control
              type="text"
              placeholder="Wprowadź telefon (np. 123-456-789)"
              {...register("phone", {
                required: "Telefon jest wymagany.",
                pattern: {
                  value: /^[0-9]{3}-[0-9]{3}-[0-9]{3}$/,
                  message: "Format musi być 123-456-789.",
                },
              })}
              isInvalid={!!errors.phone}
            />
            <Form.Control.Feedback type="invalid">
              {errors.phone?.message}
            </Form.Control.Feedback>
          </Form.Group>

          <Button variant="primary" type="submit">
            Dodaj osobę
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default PersonAddForm;
