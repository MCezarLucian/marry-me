import * as React from "react";
import { Star, CircleUser } from "lucide-react";
import { UserType } from "@/lib/types";
import { Link } from "react-router-dom";

interface CardProps {
  user: UserType;
  openChat: boolean;
  onClick: () => void;
}

const Card = ({ user, onClick }: CardProps) => {
  if (user === null) {
    return <></>;
  }
  const [firstName, lastName] = user.fullName.split(" ");
  return (
    <div className="flex flex-col relative">
      <Link
        key={user.id}
        to={`/individual_page/${user.id}`}
        className="flex flex-col rounded-md max-w-64 gap-2 px-16 py-12 pt-9 bg-white justify-center relative items-center font-Inter drop-shadow-md"
      >
        <CircleUser className="w-24 h-24" color="#1E5EFF" />
        <div className="flex flex-row text-xl gap-1 font-medium tracking-tight text-gray-900 sm:text-5xl">
          <Star className="text-darkGray fill-darkGray" />
          <Star className="text-darkGray fill-darkGray" />
          <Star className="text-darkGray fill-darkGray" />
          <Star className="text-darkGray fill-darkGray" />
          <Star className="text-darkGray fill-darkGray" />
        </div>
        <div className="flex flex-row text-xl font-medium tracking-tight text-gray-900">
          <div className="mr-1">{firstName}</div>
          {lastName && <div>{lastName}</div>}
        </div>
        <div className="flex flex-row text-xl font-medium tracking-tight text-gray-900">
          {user.age} years old
        </div>
        <div className="text-xl capitalize font-medium tracking-tight text-gray-900">
          {user.gender}
        </div>
      </Link>
      <button className="absolute right-5 bottom-3" onClick={onClick}>
        <img src="/images/chat.jpg" alt="chat-icon" />
      </button>
    </div>
  );
};

export default Card;
