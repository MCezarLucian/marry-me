import RegisterForm from "../components/registerForm/registerForm";
import React from "react";

const SignUpPage = () => {
  return (
    <div className="w-full flex  h-[calc(100vh-59px)] justify-center py-16 pt-16 pb-10 max-w-[1280px]">
      <RegisterForm />
    </div>
  );
};

export default SignUpPage;
