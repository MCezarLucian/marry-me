import clsx from "clsx";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { UserType } from "@/lib/types";

interface NavbarProps {
  logged?: boolean;
  admin?: boolean;
  user?: UserType;
}

function ShowMenu(admin: boolean | undefined, user: UserType | undefined) {
  if (admin) {
    return (
      <div className="flex flex-row gap-4 pr-4 justify-center items-center">
        <p>Home</p>
        <p>Requests</p>
        <p>Users</p>
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
        <p>Home</p>
        <p>My Profile</p>
        <p>Contact Us</p>
        <p>Full Name</p>
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
