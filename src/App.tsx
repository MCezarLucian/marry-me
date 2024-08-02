import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { users } from "./mockdata/data";
import ModalEdit from "./components/modalEdit/ModalEdit";

function App() {
  return (
    <div className="h-full w-[60%]">
      <Navbar logged user={users[0]} />
      <ModalEdit user={users[0]}></ModalEdit>
      <Footer />
    </div>
  );
}

export default App;
