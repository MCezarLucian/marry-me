import clsx from "clsx";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { UserType } from "@/lib/types";

interface NavbarProps {
  logged?: boolean; //verify if an user is logged
  admin?: boolean; //verify if the user is an admin
  user?: UserType; //user data
}

function ShowMenu(admin: boolean | undefined, user: UserType | undefined) {
  if (admin) {
    return (
      <div className="flex flex-row gap-4 pr-4 justify-center items-center">
        <a className="hover:text-MainPink" href="/">
          Home
        </a>
        <a className="hover:text-MainPink" href="/requests">
          Requests
        </a>
        <a className="hover:text-MainPink" href="/users">
          Users
        </a>
        <p>
          {user?.firstName} {user?.lastName}
        </p>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    );
  } else {
    return (
      <div className="flex flex-row gap-4 pr-4 justify-center items-center">
        <a className="hover:text-MainPink" href="/">
          Home
        </a>
        <a className="hover:text-MainPink" href="/myProfile">
          My Profile
        </a>
        <a className="hover:text-MainPink" href="/contactUs">
          Contact Us
        </a>
        <a className="hover:text-MainPink" href="/myProfile">
          {user?.firstName} {user?.lastName}
        </a>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    );
  }
}

const Navbar = ({ logged, admin, user }: NavbarProps) => {
  return (
    <div className="w-screen drop-shadow-xl h-[68px] flex flex-row justify-between font-Inter">
      <div className="flex justify-center items-center pl-4 gap-4 font-bold">
        <img src="images/logo.png" alt="logo" />
        <p className="text-3xl">Marry Me</p>
      </div>
      <div className={clsx(logged ? "" : "hidden", "flex justify-center")}>
        {ShowMenu(admin, user)}
      </div>
    </div>
  );
};

export default Navbar;
