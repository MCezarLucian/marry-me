import React, { useState } from "react";
import "./App.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import { users } from "./mockdata/data";
import Card from "./components/Card.tsx/Card";
import Filter from "./components/Filter/Filter";

function App() {
  const [filteredUsers, setFilteredUsers] = useState(users);

  const handleFilter = (filtered: typeof users) => {
    setFilteredUsers(filtered);
  };

  return (
    <div>
      <Navbar></Navbar>
      <Filter users={users} onFilter={handleFilter} />
      {/*  <div className="user-cards">
        {filteredUsers.map((user) => (
          <Card key={user.id} user={user} />
        ))}
      </div> */}
    </div>
  );
}

export default App;
