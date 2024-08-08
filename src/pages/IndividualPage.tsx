import { UserType } from "@/lib/types";
import React, { useState } from "react";
import Bio from "../components/bio/BioIndividualPage";
import Chat from "../components/chat/Chat";
import { users, messages } from "../mockdata/data";
import { useParams } from "react-router-dom";

const IndividualPage = () => {
  const [openChat, setOpenChat] = useState<boolean>(false);
  const [selectedUser, setSelectedUser] = useState<UserType | null>(null);
  const { id } = useParams<{ id: string }>();

  const handleCloseChat = () => {
    setOpenChat(false);
    setSelectedUser(null);
  };

  const handleCardClick = (user: UserType) => {
    setSelectedUser(user);
    setOpenChat(true);
  };

  const currentUser = users.find((user) => user.id === id) || users[0];

  return (
    <div className="relative">
      {/*  <Bio
        user={id}
        openChat={openChat}
        onClick={() => handleCardClick(currentUser)}
      /> */}
      {openChat && selectedUser && (
        <Chat
          sender={currentUser}
          receiver={selectedUser}
          openChat={openChat}
          onClose={handleCloseChat}
        />
      )}
    </div>
  );
};

export default IndividualPage;
