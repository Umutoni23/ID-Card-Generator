// src/components/CardList.jsx
import React from "react";
import IdCard from "./IdCard";

const people = [
  {
    id: 1,
    name: "Alice Johnson",
    role: "Software Engineer",
    department: "Engineering",
    avatar: "https://i.pravatar.cc/150?img=1"
  },
  {
    id: 2,
    name: "Bob Smith",
    role: "Product Manager",
    department: "Product",
    avatar: "https://i.pravatar.cc/150?img=2"
  },
  {
    id: 3,
    name: "Charlie Brown",
    role: "Designer",
    department: "Design",
    avatar: "https://i.pravatar.cc/150?img=3"
  }
];

const CardList = () => {
  return (
    <div className="flex flex-wrap justify-center mt-8">
      {people.map(person => (
        <IdCard
          key={person.id}
          name={person.name}
          role={person.role}
          department={person.department}
          id={person.id}
          avatar={person.avatar}
        />
      ))}
    </div>
  );
};

export default CardList;