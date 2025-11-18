import React from "react";
import PropTypes from "prop-types";
import { Card, Button, Form, Badge } from "react-bootstrap";
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
      className={`shadow-sm w-100 card-hover`}
      style={{
        maxWidth: "350px",
        transition: "all 0.2s",
        border: checked ? "2px solid #10b981" : "2px solid transparent",
      }}
    >
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center mb-2">
          <Card.Title className="mb-0 h5 font-weight-bold">{name}</Card.Title>
          {checked && (
            <Badge pill className="custom-badge-checked" bg="">
              Zaznaczono
            </Badge>
          )}
        </div>

        <RatingBar rate={rating} />

        <Card.Text className="text-muted small mt-2">
          <strong>Email:</strong> {email} <br />
          <strong>Tel:</strong> {phone}
        </Card.Text>

        <div className="d-flex mt-3 pt-3 border-top">
          <Button
            as={Link}
            to={`/lab04/edit/${id}`}
            variant="secondary"
            size="sm"
            className="flex-grow-1 mr-2"
          >
            Edytuj
          </Button>

          <Button
            variant="primary"
            size="sm"
            onClick={handleRate}
            className="flex-grow-1 mr-2"
          >
            Ocena ({rating})
          </Button>

          <Button
            variant="danger"
            size="sm"
            onClick={handleDelete}
            title="Usuń"
          >
            Usuń
          </Button>
        </div>

        <Form.Check
          type="switch"
          id={`check-${id}`}
          label={checked ? "Odznacz" : "Zaznacz"}
          checked={checked}
          onChange={handleCheck}
          className="mt-3 text-muted small"
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
