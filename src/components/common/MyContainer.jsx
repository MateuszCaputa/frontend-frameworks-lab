import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "react-bootstrap";

import useData from "../hooks/useData";

/**
 * (Lab 3, Task 2 & 7) & (Lab 5, Task 2 & 4)
 * A generic container component.
 * Renders a list of 'ElementComponent' using data from the 'useData' hook.
 *
 * @param {object} props - Component properties.
 * @param {React.ElementType} props.element - The component to render for each item.
 */
// eslint-disable-next-line no-unused-vars
function MyContainer({ element: ElementComponent }) {
  const items = useData();

  return (
    <Row>
      {items.map((item) => (
        <Col
          key={item.id}
          xs={12}
          md={6}
          lg={4}
          className="d-flex justify-content-center mb-4"
        >
          <ElementComponent {...item} />
        </Col>
      ))}
    </Row>
  );
}

MyContainer.propTypes = {
  element: PropTypes.elementType.isRequired,
};

export default MyContainer;
