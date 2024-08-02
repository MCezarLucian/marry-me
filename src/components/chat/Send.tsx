import React, { useState } from "react";
import { SendHorizonal } from "lucide-react";

interface SendMessageProps {
  handeleSend: (message: string) => void;
}

const SendMessage = ({ handeleSend }: SendMessageProps) => {
  const [text, setText] = useState<string>("");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handeleSend(text);
      setText("");
    }
  };

  return (
    <div className="p-2 bg-white w-full border-t-2 border-gray-200 grid grid-cols-10 justify-center items-end justify-items-center row-span-2">
      <textarea
        placeholder="Type here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
        className="col-span-9 border-0 w-full resize-none focus:border-transparent focus:outline-none overflow-hidden"
      />
      <SendHorizonal
        onClick={() => {
          handeleSend(text);
          setText("");
        }}
        className="text-MainBlue cursor-pointer"
        style={{ fill: "#1E5EFF" }}
      />
    </div>
  );
};

export default SendMessage;
