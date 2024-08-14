import clsx from "clsx";
import React from "react";

interface MessageProps {
  message: string;
  sender?: boolean;
  read?: boolean;
}

const Message = ({ message, sender, read }: MessageProps) => {
  return (
    <div
      className={clsx(sender ? "justify-end" : "justify-start", "w-full flex")}
    >
      <p
        className={clsx(
          sender
            ? `text-white bg-MainBlue ${read ? "" : "bg-blue-900"}`
            : `bg-gray-200 ${read ? "" : "bg-gray-300"}`,
          "rounded-xl px-4 py-2 max-w-[200px] overflow-hidden whitespace-normal break-words"
        )}
      >
        {message}
      </p>
    </div>
  );
};

export default Message;
