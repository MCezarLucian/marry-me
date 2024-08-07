import React from "react";
import "./App.css";
import Home from "./components/home/Home";
function App() {
  return (
    <div className="w-full h-[calc(100vh-143px)] grid grid-rows-8">
      <Home />
    </div>
  );
}

export default App;
