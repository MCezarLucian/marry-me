import { UserType } from "@/lib/types";
import React, { useState } from "react";
import RequestItem from "./RequestItem";

interface RequestsListProps {
  users: UserType[];
}

const RequestsList = ({ users }: RequestsListProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function onClose() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="font-Inter rounded-xl w-2/3 h-[64vh] py-14 px-24 bg-white flex flex-col gap-12">
      <p className="text-4xl font-bold">Requests</p>
      <div className="flex flex-col w-full gap-8">
        {users.map((user: UserType) => (
          <RequestItem user={user} isOpen={isOpen} onClose={onClose} />
        ))}
      </div>
    </div>
  );
};

export default RequestsList;
