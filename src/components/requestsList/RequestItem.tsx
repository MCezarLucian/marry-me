import { UserType } from "@/lib/types";
import { CircleCheck, CircleX } from "lucide-react";
import React from "react";
import RequestModal from "./RequestModal";

interface RequestItemProps {
  user: UserType;
  isOpen: boolean;
  onClose: () => void;
}

const RequestItem = ({ user, isOpen, onClose }: RequestItemProps) => {
  const approveRequest = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    //approve
  };

  const rejectRequest = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    //reject
  };

  return (
    <>
      <div
        onClick={onClose}
        className="w-full h-full grid grid-cols-6 border-b border-b-gray-200 pb-6 cursor-pointer"
      >
        <div className="">{user.fullName}</div>
        <div className="col-span-4 text-gray-800">{user.description}</div>
        <div className="flex flex-row justify-center items-start gap-4">
          <CircleX
            onClick={(e) => rejectRequest(e)}
            size={36}
            className="text-red-600 hover:text-red-900"
          />
          <CircleCheck
            onClick={(e) => approveRequest(e)}
            size={36}
            className="text-green-600 hover:text-green-900"
          />
        </div>
      </div>
      <RequestModal
        isOpen={isOpen}
        user={user}
        onClose={onClose}
        approveRequest={approveRequest}
        rejectRequest={rejectRequest}
      />
    </>
  );
};

export default RequestItem;
