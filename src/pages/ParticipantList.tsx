import React, { useState } from "react";
import { users, messages } from "../mockdata/data";
import { UserType } from "../lib/types";
import Chat from "../components/chat/Chat";
import Filter from "../components/filter/Filter";
import Card from "../components/card.tsx/Card";

const ParticipantList = () => {
  const [filteredUsers, setFilteredUsers] = useState<UserType[]>(users);
  const [openChat, setOpenChat] = useState<boolean>(false);
  const [selectedUser, setSelectedUser] = useState<UserType | null>(null);

  const handleFilterChange = (filteredUsers: UserType[]) => {
    setFilteredUsers(filteredUsers);
  };

  const handleCardClick = (user: UserType) => {
    setSelectedUser(user);
    setOpenChat(true);
  };

  const handleCloseChat = () => {
    setOpenChat(false);
    setSelectedUser(null);
  };

  return (
    <div className="w-full flex flex-col relative bg-gray-100 border-gray-200 ">
      <Filter users={users} onFilterChange={handleFilterChange} />
      <div className="grid grid-cols-3 gap-4 justify-center items-center absolute top-10 left-1/4">
        {
          /* admin && */
          filteredUsers.map((user) => (
            <Card
              key={user.id}
              user={user}
              openChat={openChat}
              onClick={() => handleCardClick(user)}
            />
          ))
        }
        {/* {!admin &&
          filteredUsers. filter((user) => user.role).  map((user) => (
            <Card
              key={user.id}
              user={user}
              openChat={openChat}
              onClick={() => handleCardClick(user)}
            />
          ))} */}
      </div>
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

export default ParticipantList;
