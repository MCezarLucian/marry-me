import clsx from "clsx";
import React from "react";

interface MessageProps {
  message: string;
  sender?: boolean;
}

const Message = ({ message, sender }: MessageProps) => {
  return (
    <div
      className={clsx(sender ? "justify-end" : "justify-start", "w-full flex")}
    >
      <p
        className={clsx(
          sender ? "text-white bg-MainBlue" : "bg-gray-200",
          "rounded-xl px-4 py-2"
        )}
      >
        {message}
      </p>
    </div>
  );
};

export default Message;
