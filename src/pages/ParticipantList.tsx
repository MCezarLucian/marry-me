import React, { useEffect, useState } from "react";
import { UserType } from "../lib/types";
import Chat from "../components/chat/Chat";
import useUserStore from "../store/useUserStore";
import Spinner from "../components/spinner/Spinner";
import Filter from "../components/filter/Filter";
import Card from "../components/card.tsx/Card";

const ParticipantList = () => {
  const { users, fetchUsers, user, fetchFilteredUsers, loading } = useUserStore(
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

  if (!users) {
    return <Spinner />;
  }

  return (
    <div className="w-full overflow-y-scroll h-[calc(100vh-143px)] flex flex-col relative bg-gray-100 border-gray-200s">
      <Filter users={users} fetchFilteredUsers={fetchFilteredUsers} />
      <div className="grid grid-cols-3 gap-4 justify-center items-center absolute top-0 left-1/4 p-8 mb-56">
        {loading ? (
          <div className="w-[80vh] pt-20 col-span-3 flex justify-center items-center justify-items-center">
            <Spinner />
          </div>
        ) : (
          users.map((user) => (
            <Card
              key={user.id}
              user={user}
              openChat={openChat}
              onClick={() => handleCardClick(user)}
            />
          ))
        )}
        {/* {user?.roleType !== "Admin" &&
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
            ))} */}
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
