import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { users } from "./mockdata/data";
import Chat from "./components/chat/Chat";
function App() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-gray-100 border-b-2 border-gray-200">
      <Navbar logged user={users[0]} />
      <div className="h-[calc(100vh-143px)] w-[60%] flex justify-center items-center">
        <Chat sender={users[0]} receiver={users[0]} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
