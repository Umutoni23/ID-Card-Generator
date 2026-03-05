import React from "react";

const ProfileCard = ({ image, name, role }) => {
  return (
    <div className="card">

      <img
        src={image}
        alt="profile"
        className="profile-image"
      />

      <h2 className="name">{name}</h2>

      <p className="role">{role}</p>

      <button className="profile-btn">
        View Profile
      </button>

    </div>
  );
};

export default ProfileCard;