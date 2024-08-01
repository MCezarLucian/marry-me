import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import { users } from "./mockdata/data"
import UserTypeComponent from "./components/usertypecomponent/UserTypeComponent";
function App() {
  return (
    <div className="h-full w-[60%]">
      <Navbar logged user={users[0]} />
      <UserTypeComponent participant={false} />
      <Footer />
    </div>
  );
}

export default App;
