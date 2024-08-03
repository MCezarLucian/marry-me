import * as React from "react";
import { Star, CircleUser } from "lucide-react";
import { UserType } from "@/lib/types";

interface CardProps {
  user: UserType; //user data
}

const Card = ({ user }: CardProps) => {
  return (
    <div className="flex flex-col rounded-md max-w-64 gap-2 px-16 py-12 pt-9 bg-white first:justify-center relative items-center font-Inter drop-shadow-md">
      <CircleUser className="w-24 h-24" color="#1E5EFF" />
      <div
        className="flex flex-row
       text-xl gap-1 font-medium tracking-tight text-gray-900 sm:text-5xl"
      >
        <Star className="text-darkGray fill-yellow-500" />
        <Star className="text-darkGray fill-yellow-500" />
        <Star className="text-darkGray fill-yellow-500" />
        <Star className="text-darkGray fill-yellow-500" />
        <Star className="text-darkGray fill-darkGray" />
      </div>
      <div className="flex flex-row text-xl font-medium tracking-tight text-gray-900">
        <div className="mr-1">{user.firstName}</div>
        <div>{user.lastName} </div>
      </div>
      <div className="flex flex-row text-xl font-medium tracking-tight text-gray-900">
        {user.age} years old
      </div>
      <div className="text-xl capitalize font-medium tracking-tight text-gray-900">
        {user.gender}
      </div>
      <button className="absolute right-5 bottom-3">
        <img src="/images/chat.jpg"></img>
      </button>
    </div>
  );
};

export default Card;
