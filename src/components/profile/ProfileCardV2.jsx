import React from "react";
import PropTypes from "prop-types";
import { Card, Button, Form, Stack, Badge } from "react-bootstrap";
import RatingBar from "../ui/RatingBar";
import { Link } from "react-router-dom";

import useDispatch from "../hooks/useDispatch";

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
