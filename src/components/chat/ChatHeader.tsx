import { X } from "lucide-react";
import React from "react";

interface ChatHeaderProps {
  name: string;
  onClose: () => void;
}

const ChatHeader = ({ name, onClose }: ChatHeaderProps) => {
  return (
    <div className="w-full flex justify-between justify-items-center items-center p-4 border-b-2 border-gray-200">
      <div>{name}</div>
      <X className="text-MainBlue" onClick={onClose} />
    </div>
  );
};

export default ChatHeader;
