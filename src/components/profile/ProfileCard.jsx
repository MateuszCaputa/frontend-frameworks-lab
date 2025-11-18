import React from "react";
import PropTypes from "prop-types";
import ProfileParagraph from "./ProfileParagraph";

/**
 * (Lab 1, Task 1 & 8)
 * Displays a non-interactive profile card (used in Lab 1 / Lab 2).
 *
 * @param {object} props - Component properties.
 * @param {number} props.id - User ID.
 * @param {string} props.name - User's full name.
 * @param {string} props.email - User's email address.
 * @param {string} props.phone - User's phone number.
 * @param {string} props.birthDate - User's birth date.
 * @param {string} props.className - Additional CSS classes.
 */
function ProfileCard({ id, name, email, phone, birthDate, className = "" }) {
  return (
    <div
      className={`card shadow-sm mb-4 ${className}`}
      style={{ maxWidth: "300px", minHeight: "220px" }}
    >
      <div className="card-body">
        <h5 className="card-title text-primary border-bottom pb-2 mb-3">
          {name}'s Profile
        </h5>

        <ProfileParagraph label="ID" value={id} />
        <ProfileParagraph label="Imię i nazwisko" value={name} />
        <ProfileParagraph label="Email" value={email} />
        <ProfileParagraph label="Telefon" value={phone} />
        <ProfileParagraph label="Data urodzin" value={birthDate} />
      </div>
    </div>
  );
}

ProfileCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  birthDate: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default ProfileCard;
