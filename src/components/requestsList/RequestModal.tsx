import React from "react";
import { Button } from "../ui/button";
import { UserType } from "@/lib/types";
import { X } from "lucide-react";

interface RequestModalProps {
  user: UserType;
  isOpen: boolean;
  onClose: () => void;
  approveRequest: (e: React.MouseEvent) => void;
  rejectRequest: (e: React.MouseEvent) => void;
}

const handleModalClick = (e: React.MouseEvent) => {
  e.stopPropagation();
};

const RequestModal: React.FC<RequestModalProps> = ({
  user,
  isOpen,
  onClose,
  approveRequest,
  rejectRequest,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-10 flex items-center justify-center bg-opacity-50"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
    >
      <div
        onClick={handleModalClick}
        className="font-Inter rounded-xl w-2/4 h-auto py-14 px-8 bg-white flex flex-col gap-6"
      >
        <div className="w-full flex justify-end">
          <X onClick={onClose} className="cursor-pointer" />
        </div>
        <p className="text-4xl font-bold">Request</p>
        <p className="text-4xl">{user.fullName}</p>
        <p className="w-full h-44 bg-gray-100 border border-gray-300 p-4 rounded">
          {user.description}
        </p>
        <div className="flex flex-row w-full justify-center items-center gap-12">
          <Button
            variant="outline"
            className="border-red-600 text-red-600 border-4"
            onClick={rejectRequest}
          >
            Reject
          </Button>
          <Button
            variant="outline"
            className="border-green-600 text-green-600 border-4"
            onClick={approveRequest}
          >
            Approve
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RequestModal;
