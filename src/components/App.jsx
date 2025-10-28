import React from "react";
import { people } from "../module-data";
import ProfileList from "./ProfileList";

function App() {
  return (
    <div className="container mt-5">
      <h1 className="display-4 mb-4 text-center">Frontend Frameworks Lab 1</h1>

      <ProfileList people={people} cols={3} />
    </div>
  );
}

export default App;
