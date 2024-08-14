import * as React from "react";
import { StarIcon } from "lucide-react";
import { UserType } from "@/lib/types";
import { Link } from "react-router-dom";
import { PICTURE_URL } from "../../configuration/api";

interface CardProps {
  user: UserType;
  openChat: boolean;
  onClick: () => void;
}

const Card = ({ user, onClick }: CardProps) => {
  const [rating, setRating] = React.useState(user.rating);

  React.useEffect(() => {
    setRating(user.rating);
  }, [user]);

  if (!user) {
    return <></>;
  }

  const fullName = user.fullName || "";
  const [firstName, lastName] = fullName.split(" ");
  return (
    <div className="flex flex-col relative">
      <Link
        key={user.id}
        to={`/individual_page/${user.id}`}
        className="flex flex-col rounded-md max-w-64 gap-2 px-16 py-12 pt-9 bg-white justify-center relative items-center font-Inter drop-shadow-md"
      >
        <div className="border rounded-full overflow-hidden w-20 h-20 flex items-center justify-center mb-5">
          <img
            src={
              user.profilePicture
                ? `${PICTURE_URL}${user.profilePicture}`
                : "images/pp.png"
            }
            alt={`${user.fullName}'s profile`}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex flex-row text-xl gap-1 font-medium tracking-tight text-gray-900 sm:text-5xl">
          {[...Array(5)].map((_, index) => (
            <StarIcon
              key={index}
              className={`w-6 h-6 cursor-pointer ${
                index < rating ? "text-yellow-400" : "text-gray-400"
              }`}
              fill={index < rating ? "#f59e0b" : "none"}
              stroke={index < rating ? "none" : "#9ca3af"}
            />
          ))}
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
