// Zadanie 1 & 8 (Lab 1): ProfileCard Component
import React from "react";
import PropTypes from "prop-types";
import ProfileParagraph from "./ProfileParagraph"; // Ścieżka zaktualizowana

/**
 * Displays a single user's profile card.
 * @param {object} profile - Object containing user profile data.
 * @param {number} profile.id - User ID.
 * @param {string} profile.name - User's full name.
 * @param {string} profile.email - User's email address.
 * @param {string} profile.phone - User's phone number.
 * @param {string} profile.birthDate - User's birth date.
 */
function ProfileCard({ id, name, email, phone, birthDate }) {
  return (
    <div
      className="card shadow-sm mb-4"
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
};

export default ProfileCard;
