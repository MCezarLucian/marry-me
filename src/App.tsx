import React, { useState } from "react";
import "./App.css";
import Footer from "./components/footer/Footer";
import { users } from "./mockdata/data";
import ForgotPassword from "./components/forgotPassword/ForgotPassword";
function App() {
  const [users, setUsers] = useState(initialUsers);

  const handleDelete = (id: string) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
  };

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-gray-100 border-b-2 border-gray-200">
      <Navbar logged user={users[0]} />
      <div className="h-[calc(100vh-143px)] w-[60%] flex justify-center items-center">
        <ForgotPassword />
      </div>
      <Footer />
    </div>
  );
}

export default App;
