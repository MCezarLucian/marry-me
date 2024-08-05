import React, { useState } from "react";
import "./App.css";
import Footer from "./components/footer/Footer";
import { users } from "./mockdata/data";
import ForgotPassword from "./components/forgotPassword/ForgotPassword";
import Navbar from "./components/navbar/Navbar";
import Rating from "./components/rating/Rating";
function App() {
  const [rating, setRating] = useState(3.6);
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-gray-100 border-b-2 border-gray-200">
      <Navbar logged user={users[0]} />
      <div className="h-[calc(100vh-143px)] w-[60%] flex justify-center items-center">
        {/* <ForgotPassword /> */}
        <Rating
          value={rating}
          onChange={(newRating) => setRating(newRating)}
          edit={false}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
