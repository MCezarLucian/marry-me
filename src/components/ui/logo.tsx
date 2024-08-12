import React from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";

const Logo = () => {
  return (
    <div className="bg-gray-100 w-screen h-screen">
      <div className="flex pt-10 pl-14 justify-start items-center gap-4 font-bold">
        <img src="/images/logo.png" alt="logo" />
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
