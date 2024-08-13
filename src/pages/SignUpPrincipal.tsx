import UserTypeComponent from "../components/usertypecomponent/UserTypeComponent";
import React from "react";

const SignUpPrincipal = () => {
  return (
    <div className="h-full w-full griditems-center justify-center">
      <div className="flex flex-row items-center justify-center gap-16 justify-items-center mt-[15%]">
        <UserTypeComponent participant />
        <UserTypeComponent participant={false} />
      </div>
    </div>
  );
};

export default SignUpPrincipal;
