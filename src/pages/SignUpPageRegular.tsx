import RegularUserForm from "../components/registerForm/RegularUserFrom";
import React from "react";

const SignUpPageRegular = () => {
  return (
    <div className="w-full flex h-[calc(100vh-59px)] justify-center px-16 pt-16 pb-5 max-w-[1280px]">
      <RegularUserForm />
    </div>
  );
};

export default SignUpPageRegular;
