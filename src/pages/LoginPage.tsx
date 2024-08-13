import LoginForm from "../components/loginForm/LoginForm";
import React from "react";

const LoginPage = () => {
  return (
    <div className="w-full h-[calc(100vh-59px)] flex justify-center p-16 max-w-[1280px]">
      <LoginForm />
    </div>
  );
};

export default LoginPage;
