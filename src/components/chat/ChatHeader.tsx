import { X } from "lucide-react";
import React from "react";

interface ChatHeaderProps {
  name: string;
}

const ChatHeader = ({ name }: ChatHeaderProps) => {
  return (
    <div className="w-full flex justify-between justify-items-center items-center p-4 border-b-2 border-gray-200">
      <div>{name}</div>
      <X className="text-MainBlue" />
    </div>
  );
};

export default ChatHeader;
