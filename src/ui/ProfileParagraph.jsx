import React from "react";
import PropTypes from "prop-types";

/**
 * Renders a single row of user profile information.
 * @param {object} props - Component properties.
 * @param {string} props.label - The descriptive label (e.g., "Email").
 * @param {string} props.value - The data value for the label.
 */
function ProfileParagraph({ label, value }) {
  return (
    <div className="d-flex mb-2">
      <strong className="text-muted mr-2" style={{ minWidth: "120px" }}>
        {label}:
      </strong>
      <p className="mb-0 text-dark">{value}</p>
    </div>
  );
}

ProfileParagraph.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default ProfileParagraph;
