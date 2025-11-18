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
    setValue,
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

  /**
   * Formatting helper for phone number (XXX-XXX-XXX).
   * @param {string} value - Raw input value
   * @returns {string} Formatted value
   */
  const formatPhoneNumber = (value) => {
    if (!value) return value;
    const phoneNumber = value.replace(/[^\d]/g, "");
    const phoneNumberLength = phoneNumber.length;

    if (phoneNumberLength < 4) return phoneNumber;
    if (phoneNumberLength < 7) {
      return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3)}`;
    }
    return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(
      3,
      6
    )}-${phoneNumber.slice(6, 9)}`;
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
            <Form.Label>Numer telefonu</Form.Label>
            <Form.Control
              type="text"
              placeholder="Wprowadź nr. telefonu (np. 123-456-789)"
              maxLength={11}
              {...register("phone", {
                required: "Numer telefonu jest wymagany.",
                pattern: {
                  value: /^[0-9]{3}-[0-9]{3}-[0-9]{3}$/,
                  message: "Format musi być 123-456-789.",
                },
                onChange: (e) => {
                  const formatted = formatPhoneNumber(e.target.value);
                  setValue("phone", formatted);
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
