import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { users } from "./mockdata/data";
import RegisterForm from "./components/registerForm/registerForm";
function App() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-gray-100">
      <Navbar logged user={users[0]} />
      <div className="h-[calc(100vh-143px)] w-[60%] flex justify-center items-center">
        <RegisterForm />
      </div>
      <Footer />
    </div>
  );
}

export default App;
