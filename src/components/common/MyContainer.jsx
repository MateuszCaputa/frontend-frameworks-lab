import React, { useContext } from "react";
import PropTypes from "prop-types";
import AppContext from "../../../data/AppContext";
import { Row, Col } from "react-bootstrap";

// eslint-disable-next-line no-unused-vars
function MyContainer({ element: ElementComponent }) {
  const { items } = useContext(AppContext);

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
