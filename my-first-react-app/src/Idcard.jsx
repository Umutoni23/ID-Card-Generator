// src/components/IdCard.jsx
import React from "react";

const IdCard = ({ name, role, department, id, avatar }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 w-64 m-4">
      <img
        src={avatar}
        alt={name}
        className="w-24 h-24 rounded-full mx-auto border-2 border-gray-300"
      />
      <div className="text-center mt-4">
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="text-sm text-gray-500">{role}</p>
        <p className="text-sm text-gray-500">{department}</p>
        <p className="text-xs text-gray-400 mt-2">ID: {id}</p>
      </div>
    </div>
  );
};

export default IdCard;