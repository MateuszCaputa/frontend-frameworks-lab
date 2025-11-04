import React from "react";
import PropTypes from "prop-types";

/**
 * (Lab 1, Task 1 & 8)
 * Renders a single row of user profile information.
 * @param {object} props - Component properties.
 * @param {string} props.label - The descriptive label (e.g., "Email").
 * @param {string|number} props.value - The data value for the label.
 */
function ProfileParagraph({ label, value }) {
  return (
    <div className="d-flex mb-1">
      <strong
        className="text-muted mr-2"
        style={{ minWidth: "100px", fontSize: "0.9rem" }}
      >
        {label}:
      </strong>
      <p
        className="mb-0 text-dark"
        style={{ overflowWrap: "break-word", fontSize: "0.9rem" }}
      >
        {value}
      </p>
    </div>
  );
}

ProfileParagraph.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default ProfileParagraph;
