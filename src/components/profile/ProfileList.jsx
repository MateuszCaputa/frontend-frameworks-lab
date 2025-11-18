import React from "react";
import PropTypes from "prop-types";
import ProfileCard from "./ProfileCard";
import { NavLink } from "react-router-dom";

/**
 * (Lab 1, Task 7)
 * Renders a list of ProfileCards, controlling the layout using Bootstrap columns.
 * Each card links to the profile's detail page (Lab 2).
 *
 * @param {object} props - Component properties.
 * @param {array} props.people - Array of person objects.
 * @param {number} props.cols - Number of columns to display on large screens.
 */
function ProfileList({ people, cols = 3 }) {
  const colClass = `col-12 col-sm-6 col-lg-${12 / cols}`;

  return (
    <div className="row">
      {people.map((person) => (
        <div
          key={person.id}
          className={`${colClass} d-flex justify-content-center`}
        >
          <NavLink
            to={`/lab02/${person.id}`}
            className="w-100 text-decoration-none w-100"
            style={{ maxWidth: "300px" }}
          >
            <ProfileCard {...person} className="card-hover" />
          </NavLink>
        </div>
      ))}
    </div>
  );
}

ProfileList.propTypes = {
  people: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      birthDate: PropTypes.string.isRequired,
    })
  ).isRequired,
  cols: PropTypes.number,
};

export default ProfileList;
