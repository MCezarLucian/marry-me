import { UserType } from "@/lib/types";
import React, { useState } from "react";
import Bio from "../components/bio/BioIndividualPage";
import Chat from "../components/chat/Chat";
import { users, messages } from "../mockdata/data";

const IndividualPage = () => {
  const [openChat, setOpenChat] = useState<boolean>(false);
  const [selectedUser, setSelectedUser] = useState<UserType | null>(null);

  const handleCloseChat = () => {
    setOpenChat(false);
    setSelectedUser(null);
  };

  const handleCardClick = (user: UserType) => {
    setSelectedUser(user);
    setOpenChat(true);
  };

  return (
    <div className="relative">
      <Bio
        user={users[0]}
        openChat={openChat}
        onClick={() => handleCardClick(users[0])}
      ></Bio>
      {openChat && selectedUser && (
        <Chat
          sender={users[0]}
          receiver={selectedUser}
          openChat={openChat}
          onClose={handleCloseChat}
        />
      )}
    </div>
  );
};

export default IndividualPage;
