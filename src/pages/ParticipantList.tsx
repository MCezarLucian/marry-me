import React, { useEffect, useState } from "react";

import { UserType } from "../lib/types";
import Chat from "../components/chat/Chat";
import Filter from "../components/Filter/Filter";
import Card from "../components/Card.tsx/Card";
import useUserStore from "../store/useUserStore";
import Spinner from "../components/spinner/Spinner";

const ParticipantList = () => {
  const { users, fetchUsers, user } = useUserStore((state) => ({
    users: state.users,
    user: state.user,
    loading: state.loading,
    fetchUsers: state.fetchUsers,
  }));

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

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  if (users.length < 1) {
    return <Spinner />;
  }
  console.log(user);
  console.log(users);
  return (
    <div className="w-full h-[calc(100vh-143px)] flex flex-col relative bg-gray-100 border-gray-200 ">
      <Filter users={users} onFilterChange={handleFilterChange} />
      <div className="grid grid-cols-3 gap-4 justify-center items-center absolute top-0 left-1/4 p-8 overflow-y-scroll  h-full">
        {users?.map((user) => (
          <Card
            key={user.id}
            user={user}
            openChat={openChat}
            onClick={() => handleCardClick(user)}
          />
        ))}
        {user?.roleType !== "Admin" &&
          filteredUsers
            .filter((user) => user.roleType === "Contestant")
            .map((user) => (
              <Card
                key={user.id}
                user={user}
                openChat={openChat}
                onClick={() => handleCardClick(user)}
              />
            ))}
      </div>
      {openChat && selectedUser && (
        <Chat
          sender={user ? user : undefined}
          receiver={selectedUser}
          openChat={openChat}
          onClose={handleCloseChat}
        />
      )}
    </div>
  );
};

export default ParticipantList;
