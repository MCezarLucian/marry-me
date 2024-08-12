import React, { useState } from "react";
import { UserType } from "../lib/types";
import BioMyProfile from "../components/bio/BioMyProfile";
import ModalDelete from "../components/modal-delete/ModalDelete";
import ModalEdit from "../components/modalEdit/ModalEdit";
import { users } from "../mockdata/data";
import useUserStore from "../store/useUserStore";

const MyProfilePage = () => {
  const [localUsers, setLocalUsers] = useState<UserType[]>(users);
  const [openModalDelete, setOpenModalDelete] = useState<boolean>(false);
  const [openModalEdit, setOpenModalEdit] = useState<boolean>(false);
  const { loggedUser } = useUserStore((state) => ({
    loggedUser: state.loggedUser,
  }));

  const handleSave = (updatedUser: UserType) => {
    setLocalUsers((prevUsers) =>
      prevUsers.map((u) => (u.id === updatedUser.id ? updatedUser : u))
    );
    setOpenModalEdit(false);
  };

  const handleDelete = (id: string) => {
    setLocalUsers((prevUsers) => prevUsers.filter((u) => u.id !== id));
    setOpenModalDelete(false);
  };

  const handleCloseModalDelete = () => {
    setOpenModalDelete(false);
  };

  const handleOpenModalDelete = () => {
    setOpenModalDelete(true);
  };

  const handleCloseModalEdit = () => {
    setOpenModalEdit(false);
  };

  const handleOpenModalEdit = () => {
    setOpenModalEdit(true);
  };

  if (!loggedUser) {
    return <></>;
  }

  return (
    <div>
      <BioMyProfile
        user={loggedUser}
        openModalEdit={openModalEdit}
        onOpenModalEdit={handleOpenModalEdit}
        openModalDelete={openModalDelete}
        onOpenModalDelete={handleOpenModalDelete}
      />
      {openModalDelete && (
        <ModalDelete
          user={localUsers[0]}
          openModalDelete={openModalDelete}
          onDelete={handleDelete}
          onClose={handleCloseModalDelete}
        />
      )}
      {openModalEdit && (
        <ModalEdit
          user={localUsers[0]}
          onSave={handleSave}
          openModalEdit={openModalEdit}
          onClose={handleCloseModalEdit}
        />
      )}
    </div>
  );
};

export default MyProfilePage;
