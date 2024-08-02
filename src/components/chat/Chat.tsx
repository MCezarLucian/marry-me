import { MessageType, UserType } from "@/lib/types";
import React, { useEffect, useRef, useState } from "react";
import ChatHeader from "./ChatHeader";
import { messages } from "../../mockdata/data";
import Message from "./Message";
import SendMessage from "./Send";

interface ChatProps {
  sender: UserType;
  receiver: UserType;
}

const Chat = ({ sender, receiver }: ChatProps) => {
  const [chatMessages, SetChatMessages] = useState<MessageType[]>(messages);
  const endOfMessagesRef = useRef<HTMLDivElement>(null);

  const handleSend = (message: string) => {
    if (message !== "") {
      const newId =
        chatMessages.reduce(
          (maxId, message) => Math.max(maxId, message.id),
          0
        ) + 1;
      const newMessage = {
        id: newId,
        senderId: Number(sender.id),
        receiverId: Number(receiver.id),
        content: message,
        timestamp: new Date(),
      };

      SetChatMessages([...chatMessages, newMessage]);
    }
  };

  const scrollToBottom = () => {
    if (endOfMessagesRef.current) {
      endOfMessagesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatMessages]);

  return (
    <div className="h-[50vh] grid grid-rows-12 w-[30vh] border border-gray-200 gap-4 bg-white">
      <ChatHeader name={receiver.firstName} />
      <div className="row-span-9 p-2 flex flex-col gap-1 overflow-y-scroll">
        {chatMessages
          .filter(
            (message) =>
              message.receiverId === Number(sender.id) ||
              message.senderId === Number(sender.id)
          )
          .map((message) => (
            <Message
              key={message.id}
              message={message.content}
              sender={Number(sender.id) === message.senderId ? true : false}
            />
          ))}
        <div ref={endOfMessagesRef} />
      </div>
      <SendMessage handeleSend={handleSend} />
    </div>
  );
};

export default Chat;
