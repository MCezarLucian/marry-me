import { UserType } from "@/lib/types";
import React, { useState } from "react";
import Bio from "../bio/BioIndividualPage";
import Chat from "../chat/Chat";

interface IndividualPageProps {
  users: UserType[];
  sender: UserType;
  receiver: UserType;
}

const IndividualPage: React.FC<IndividualPageProps> = ({
  users,
  sender,
  receiver,
}) => {
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
          sender={sender}
          receiver={selectedUser}
          openChat={openChat}
          onClose={handleCloseChat}
        />
      )}
    </div>
  );
};

export default IndividualPage;
