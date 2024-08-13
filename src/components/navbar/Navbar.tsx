import clsx from "clsx";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { UserType } from "../../lib/types";
import { Link, useNavigate } from "react-router-dom";
import { logOut } from "../../lib/utils";
import Spinner from "../spinner/Spinner";
import { PICTURE_URL } from "../../configuration/api";

interface NavbarProps {
  logged?: boolean; //verify if an user is logged
  admin?: boolean; //verify if the user is an admin
  user?: UserType; //user data
}

function ShowMenu(admin: boolean | undefined, user: UserType | undefined) {
  const navigate = useNavigate();

  if (admin) {
    return (
      <div className="flex flex-row gap-4 pr-4 justify-center items-center top-0">
        <a className="hover:text-MainPink" href="/home">
          Home
        </a>
        <a className="hover:text-MainPink" href="/requests">
          Requests
        </a>
        <a className="hover:text-MainPink" href="/users">
          Users
        </a>
        <p>{user?.fullName}</p>
        <p
          className="hover:text-MainPink cursor-pointer"
          onClick={() => {
            logOut();
            navigate("/login");
          }}
        >
          Log Out
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
        <a className="hover:text-MainPink" href="/home">
          Home
        </a>
        <a className="hover:text-MainPink" href="/contact">
          Contact Us
        </a>
        <a className="hover:text-MainPink" href="/my_profile">
          {user?.fullName}
        </a>
        <p
          className="hover:text-MainPink cursor-pointer"
          onClick={() => {
            logOut();
            navigate("/login");
          }}
        >
          Log Out
        </p>
        <Avatar>
          <AvatarImage src={`${PICTURE_URL}${user?.profilePicture}`} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    );
  }
}

const Navbar = ({ logged, admin, user }: NavbarProps) => {
  if (!user) {
    return <Spinner />;
  }
  return (
    <div className=" drop-shadow-xl h-[68px] flex flex-row justify-between font-Inter top-0 bg-white">
      <Link
        to={`/home`}
        className="flex justify-center items-center pl-4 gap-4 font-bold"
      >
        <img src="images/logo.png" alt="logo" />
        <p className="text-3xl">Marry Me</p>
      </Link>
      <div className={clsx(logged ? "" : "hidden", "flex justify-center")}>
        {ShowMenu(admin, user)}
      </div>
    </div>
  );
};

export default Navbar;
