import React, { useState } from "react";
import "./App.css";
import Footer from "./components/footer/Footer";
import { users } from "./mockdata/data";
import Navbar from "./components/navbar/Navbar";
import ContactForm from "./components/contactForm/ContactForm";
import Bio from "./components/bio/Bio";
import Card from "./components/card.tsx/Card";
import Filter from "./components/filter/Filter";
import ModalDelete from "./components/modal-delete/ModalDelete";
import ModalEdit from "./components/modalEdit/ModalEdit";

//todo: validari,

function App() {
  const [filteredUsers, setFilteredUsers] = useState(users);

  const handleFilter = (filtered: typeof users) => {
    setFilteredUsers(filtered);
  };

  return (
    <div>
      {/* <ContactForm></ContactForm> */}
      {/* <Bio user={users[0]}></Bio> */}
      <ContactForm></ContactForm>
      {/* <Filter users={users} onFilter={handleFilter}></Filter> */}
      {/*  <div className="user-cards">
        {filteredUsers.map((user) => (
          <Card key={user.id} user={user} />
        ))}
      </div> */}
    </div>
  );
}

export default App;
