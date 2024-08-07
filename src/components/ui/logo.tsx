import React from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";

const Logo = () => {
  return (
    <div>
      <div className="flex mt-10 ml-10 justify-start items-center pl-4 gap-4 font-bold">
        <img src="images/logo.png" alt="logo" />
        <p className="text-3xl">Marry Me</p>
      </div>
      <div className="flex justify-center items-center">
        <Outlet />
      </div>
      <ScrollRestoration />
    </div>
  );
};

export default Logo;
