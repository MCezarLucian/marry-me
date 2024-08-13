import { UserType } from "@/lib/types";
import React, { useEffect, useState } from "react";
import Bio from "../components/bio/BioIndividualPage";
import Chat from "../components/chat/Chat";
import { useParams } from "react-router-dom";
import useUserStore from "../store/useUserStore";
import Spinner from "../components/spinner/Spinner";

const IndividualPage = () => {
  const [openChat, setOpenChat] = useState<boolean>(false);
  const [selectedUser, setSelectedUser] = useState<UserType | null>(null);
  const { id } = useParams();
  const { user, fetchUserById, loading } = useUserStore((state) => ({
    user: state.user,
    loading: state.loading,
    fetchUserById: state.fetchUserById,
  }));

  const handleCloseChat = () => {
    setOpenChat(false);
    setSelectedUser(null);
  };

  const handleCardClick = (user: UserType) => {
    setSelectedUser(user);
    setOpenChat(true);
  };

  useEffect(() => {
    if (id) {
      fetchUserById(id);
    }
  }, [fetchUserById, id]);

  if (loading) {
    return <Spinner />;
  }

  if (!user) {
    return <></>;
  }

  return (
    <div className="relative">
      <Bio
        user={user}
        openChat={openChat}
        onClick={() => handleCardClick(user)}
        userId={id ? id : ""}
      />
      {openChat && selectedUser && (
        <Chat
          sender={user}
          receiver={selectedUser}
          openChat={openChat}
          onClose={handleCloseChat}
        />
      )}
    </div>
  );
};

export default IndividualPage;
