import React, { useReducer } from "react";
import PropTypes from "prop-types";
import AppReducer from "../../../data/AppReducer";
import { Row, Col } from "react-bootstrap";

/**
 * Zarządza stanem (przez 'useReducer') i renderuje listę
 * dowolnych komponentów ('ElementComponent').
 * * @param {object} props
 * @param {React.ElementType} props.element - Komponent do renderowania (np. ProfileCardV2).
 * @param {array} props.data - Początkowa tablica danych.
 */

// eslint-disable-next-line no-unused-vars
function MyContainer({ element: ElementComponent, data }) {
  const [state, dispatch] = useReducer(AppReducer, data);

  return (
    <Row>
      {state.map((item) => (
        <Col
          key={item.id}
          xs={12}
          md={6}
          lg={4}
          className="d-flex justify-content-center mb-4"
        >
          <ElementComponent {...item} dispatch={dispatch} />
        </Col>
      ))}
    </Row>
  );
}

MyContainer.propTypes = {
  element: PropTypes.elementType.isRequired,
  data: PropTypes.array.isRequired,
};

export default MyContainer;
