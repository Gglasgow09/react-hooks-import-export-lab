import React from "react";
import NavBar from "./NavBar";
import About from "./About";
import Home from "./Home";
import { username, city } from "../data/user";

function App() {
  return (
    <div>
      <NavBar />
      <Home username={username} city={city} />
      <About />
    </div>
  );
}

export default App;
