import React from "react";
import "./App.css";
import ParticipantList from "./components/Pages/ParticipantList";
import { users } from "./mockdata/data";

function App() {
  return (
    <div>
      <ParticipantList users={users} sender={users[0]} receiver={users[0]} />
    </div>
  );
}

export default App;
