import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { users } from "./mockdata/data";
import UserTypeComponent from "./components/usertypecomponent/UserTypeComponent";
import Bio from "./components/bio/Bio";
function App() {
  return (
    <div className="h-full w-[60%]">
      <Navbar logged user={users[0]} />
      <Bio user={users[0]} />
      <Footer />
    </div>
  );
}

export default App;
