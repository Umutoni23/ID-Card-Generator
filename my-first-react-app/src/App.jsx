import React from "react";
import "./app.css";
import image from "./assets/smile.png";
import ProfileCard from "./components/profileCard";

function App() {
  return (
    <div className="App">
      <h1 className="title">Team Profiles</h1>

      <div className="cards-container">

        <ProfileCard
          image={image}
          name="Leoncie Umutoni"
          role="Software Developer"
        />

        <ProfileCard
          image={image}
          name="Leoncie Umutoni"
          role="Software Developer"
        />

        <ProfileCard
          image={image}
          name="Leoncie Umutoni"
          role="Software Developer"
        />

      </div>
    </div>
  );
}

export default App;