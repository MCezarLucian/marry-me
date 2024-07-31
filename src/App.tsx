import React from "react";
import "./App.css";
import FileUploadDropzone from "./components/imageUploader/FileUploadDropzone";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import { users } from "./mockdata/data";
import Card from "./components/Card.tsx/Card";

function App() {
  return (
    <div>
      <Card user={users[0]}></Card>
    </div>
  );
}

export default App;
