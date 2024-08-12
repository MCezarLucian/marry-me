import React, { useEffect, useState } from "react";

import { UserType } from "../lib/types";
import Chat from "../components/chat/Chat";
import useUserStore from "../store/useUserStore";
import Spinner from "../components/spinner/Spinner";
import Filter from "../components/Filter/Filter";
import Card from "../components/Card.tsx/Card";

const ParticipantList = () => {
  const { users, fetchUsers, user, fetchFilteredUsers } = useUserStore(
    (state) => ({
      users: state.users || [],
      user: state.user,
      loading: state.loading,
      fetchUsers: state.fetchUsers,
      fetchFilteredUsers: state.fetchFilteredUsers,
    })
  );

  const [openChat, setOpenChat] = useState<boolean>(false);
  const [selectedUser, setSelectedUser] = useState<UserType | null>(null);
  const [category, setCategory] = useState<string[]>([]);
  const [values, setValue] = useState<string[]>([]);

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
    console.log("Category and Values:", category, values);
    fetchFilteredUsers(category, values);
  }, [fetchUsers, fetchFilteredUsers]);

  if (!users) {
    return <Spinner />;
  }
  return (
    <div className="w-full overflow-y-scroll h-[calc(100vh-143px)] flex flex-col relative bg-gray-100 border-gray-200s">
      <Filter users={users} fetchFilteredUsers={fetchFilteredUsers} />
      <div className="grid grid-cols-3 gap-4 justify-center items-center absolute top-0 left-1/4 p-8 mb-56">
        {Array.isArray(users) && users.length > 0 ? (
          users.map((user) => (
            <Card
              key={user.id}
              user={user}
              openChat={openChat}
              onClick={() => handleCardClick(user)}
            />
          ))
        ) : (
          <Spinner />
        )}
        {user?.roleType !== "Admin" &&
          Array.isArray(users) &&
          users
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
