import React, { useState } from "react";
import "./App.css";
import Footer from "./components/footer/Footer";
import { users as initialUsers } from "./mockdata/data";
import ModalDelete from "./components/modal-delete/ModalDelete";

function App() {
  const [users, setUsers] = useState(initialUsers);

  const handleDelete = (id: string) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
  };

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-gray-100 border-b-2 border-gray-200">
      <ModalDelete user={users[0]} onDelete={handleDelete} />
      <Footer />
    </div>
  );
}

export default App;
