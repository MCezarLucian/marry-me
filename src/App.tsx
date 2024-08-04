import React from "react";
import "./App.css";
import Footer from "./components/footer/Footer";
import { users } from "./mockdata/data";
import Navbar from "./components/navbar/Navbar";
import RequestsList from "./components/requestsList/RequestsList";
function App() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-gray-100 border-b-2 border-gray-200">
      <Navbar logged user={users[0]} />
      <div className="h-[calc(100vh-143px)] w-[60%] flex justify-center items-center">
        <RequestsList users={users} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
