import React from "react";
import "./App.css";
import FileUploadDropzone from "./components/imageUploader/FileUploadDropzone";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { users } from "./mockdata/data";
import ProfilePicture from "./components/imageUploader/ProfilePicture";

function App() {
  return (
    <div className="h-32 w-[60%]">
      <Navbar logged user={users[0]} />
      <ProfilePicture profilePicture={users[0].profilePicture} />
      <FileUploadDropzone user={users[0]} />
      <Footer />
    </div>
  );
}

export default App;
