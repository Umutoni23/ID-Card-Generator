import React from "react";
import "./app.css";
import image from "./assets/smile.png";
import ProfileCard from "./components/profileCard";

function App() {
  return (
    <div className="App">
      <h1 className="text-4xl font-bold text-center mt-8">
        Team Profiles
      </h1>

     
      <div className="flex justify-center gap-6 mt-10">

        
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