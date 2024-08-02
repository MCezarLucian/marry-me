import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { users } from "./mockdata/data";
import ModalEdit from "./components/modalEdit/ModalEdit";

function App() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-gray-100">
      <Navbar logged user={users[0]} />
      <ModalEdit user={users[0]}></ModalEdit>
      <Footer />
    </div>
  );
}

export default App;
