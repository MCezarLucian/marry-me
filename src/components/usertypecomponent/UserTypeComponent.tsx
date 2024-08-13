import { Eye, User } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router";

interface UserTypeComponentProps {
  participant: boolean;
}

const UserTypeComponent = ({ participant }: UserTypeComponentProps) => {
  const navigate = useNavigate();

  const handleChoosUser = (e: any) => {
    if (!participant) {
      navigate("/signup_regular");
    } else {
      navigate("/signup_participant");
    }
  };

  return (
    <div
      onClick={handleChoosUser}
      className="cursor-pointer h-[300px] flex flex-col p-10 justify-center items-center w-64 gap-6 rounded-3xl bg-gradient-to-b from-NeonBlue to-MainPink font-Inter text-white"
    >
      {participant ? (
        <>
          <User size={100} className="" />
          <div className="text-2xl">Participant</div>
        </>
      ) : (
        <>
          <Eye size={100} />
          <div className="text-2xl">Regular user</div>
        </>
      )}
    </div>
  );
};

export default UserTypeComponent;
