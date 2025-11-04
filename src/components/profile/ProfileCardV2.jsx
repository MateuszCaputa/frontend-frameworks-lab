import React from "react";
import PropTypes from "prop-types";
import { Card, Button, Form, Stack, Badge } from "react-bootstrap";
import RatingBar from "../ui/RatingBar";
import { Link } from "react-router-dom";

import useDispatch from "../hooks/useDispatch";

/**
 * (Lab 3, Task 1, 3, 6, 8) & (Lab 4, Task 3, 8)
 * Renders an interactive profile card for a single person.
 * This component is "dumb" and gets its state from props.
 * It uses the 'useDispatch' hook to send actions (rate, delete, check).
 *
 * @param {object} props - Component properties.
 * @param {string|number} props.id - Person's unique ID.
 * @param {string} props.name - Person's name.
 * @param {number} props.rating - Person's rating (0-10).
 * @param {boolean} props.checked - Person's checked status.
 * @param {string} props.email - Person's email.
 * @param {string} props.phone - Person's phone number.
 */
function ProfileCardV2({ id, name, rating, checked, email, phone }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch({ type: "delete", id: id });
  };

  const handleRate = () => {
    dispatch({ type: "rate", id: id, rating: rating });
  };

  const handleCheck = () => {
    dispatch({ type: "check", id: id });
  };

  return (
    <Card
      className={`shadow-sm w-100 ${checked ? "border-primary border-2" : ""}`}
      style={{ maxWidth: "350px", transition: "border 0.2s" }}
    >
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center mb-2">
          <Card.Title className="mb-0">{name}</Card.Title>
          {checked && (
            <Badge bg="primary" pill>
              Zaznaczono
            </Badge>
          )}
        </div>

        <RatingBar rate={rating} />

        <Card.Text className="text-muted small mt-2">
          {email} <br /> {phone}
        </Card.Text>

        <Stack direction="horizontal" gap={2} className="mt-3">
          <Button
            as={Link}
            to={`/lab04/edit/${id}`}
            variant="outline-secondary"
            size="sm"
          >
            Edit
          </Button>

          <Button variant="primary" size="sm" onClick={handleRate}>
            Rate ({rating})
          </Button>
          <Button variant="danger" size="sm" onClick={handleDelete}>
            Delete
          </Button>
        </Stack>

        <Form.Check
          type="switch"
          id={`check-${id}`}
          label="Zaznacz"
          checked={checked}
          onChange={handleCheck}
          className="mt-3 border-top pt-3"
        />
      </Card.Body>
    </Card>
  );
}

ProfileCardV2.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  checked: PropTypes.bool.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

export default ProfileCardV2;
