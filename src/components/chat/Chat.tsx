import { MessageType, UserType } from "@/lib/types";
import React, { useEffect, useRef, useState } from "react";
import ChatHeader from "./ChatHeader";
import Message from "./Message";
import SendMessage from "./Send";
import useChatStore from "../../store/useChatStore";
import Cookies from "js-cookie";

interface ChatProps {
  sender?: UserType;
  receiver: UserType;
  openChat: boolean;
  onClose: () => void;
}

const Chat = ({ sender, receiver, onClose }: ChatProps) => {
  const { messages, fetchAllMessages, fetchSendMessage } = useChatStore(
    (state) => ({
      messages: state.messages,
      fetchAllMessages: state.fetchAllMessages,
      fetchSendMessage: state.fetchSendMessage,
    })
  );
  const senderId = Cookies.get("id");
  const [chatMessages, setChatMessages] = useState<MessageType[]>(
    messages ? messages : []
  );
  const endOfMessagesRef = useRef<HTMLDivElement>(null);

  const handleSend = (message: string) => {
    if (message !== "") {
      fetchSendMessage(senderId ? senderId : "", receiver.id, message);
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

  useEffect(() => {
    const interval = setInterval(() => {
      fetchAllMessages(senderId ? senderId : "", receiver.id);
    }, 1000);

    return () => clearInterval(interval);
  }, [fetchAllMessages, senderId, receiver.id]);

  useEffect(() => {
    setChatMessages(messages ? messages : chatMessages);
  }, [chatMessages, messages]);

  return (
    <div className="h-[50vh] grid grid-rows-12 w-[40vh] border border-gray-200 gap-4 bg-white fixed bottom-0 right-20">
      <ChatHeader onClose={onClose} name={receiver.fullName} />
      <div className="row-span-9 p-2 flex flex-col gap-1 overflow-y-scroll">
        {chatMessages.map((message) => (
          <Message
            key={message.id}
            message={message.content}
            sender={
              (senderId ? senderId : "") === message.sender_id ? true : false
            }
          />
        ))}
        <div ref={endOfMessagesRef} />
      </div>
      <SendMessage handeleSend={handleSend} />
    </div>
  );
};

export default Chat;
