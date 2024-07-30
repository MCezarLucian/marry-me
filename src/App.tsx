import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { users } from "./mockdata/data";

function App() {
  return (
    <div>
      <Navbar admin={true} logged={true} user={users[0]} />
    </div>
  );
}

export default App;
