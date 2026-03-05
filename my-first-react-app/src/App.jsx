// src/App.jsx
import React from "react";
import CardList from "./Cardlist";
import "./App.css";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        ID Card Generator
      </h1>
      <CardList />
    </div>
  );
};

export default App;