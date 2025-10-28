import React from "react";
import PropTypes from "prop-types";

/**
 * @param {object} props
 * @param {number} props.rate - Aktualna ocena (0-10).
 */
function RatingBar({ rate }) {
  const stars = [];
  const totalStars = 10;

  for (let i = 1; i <= totalStars; i++) {
    if (i <= rate) {
      stars.push(
        <span key={i} style={{ color: "#FFD700", fontSize: "1.2rem" }}>
          ★
        </span>
      );
    } else {
      stars.push(
        <span key={i} style={{ color: "#E0E0E0", fontSize: "1.2rem" }}>
          ☆
        </span>
      );
    }
  }

  return (
    <div className="my-2" aria-label={`Rating: ${rate} out of ${totalStars}`}>
      {stars}
    </div>
  );
}

RatingBar.propTypes = {
  rate: PropTypes.number.isRequired,
};

export default RatingBar;
