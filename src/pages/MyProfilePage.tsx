import React, { useState } from "react";
import { UserType } from "../lib/types";
import BioMyProfile from "../components/bio/BioMyProfile";
import ModalDelete from "../components/modal-delete/ModalDelete";
import ModalEdit from "../components/modalEdit/ModalEdit";
import useUserStore from "../store/useUserStore";

const MyProfilePage = () => {
  const [openModalDelete, setOpenModalDelete] = useState<boolean>(false);
  const [openModalEdit, setOpenModalEdit] = useState<boolean>(false);
  const { loggedUser, fetchUpdateUser, fetchDeleteUser } = useUserStore(
    (state) => ({
      loggedUser: state.loggedUser,
      fetchUpdateUser: state.fetchUpdateUser,
      fetchDeleteUser: state.fetchDeleteUser,
    })
  );

  const handleSave = (updatedUser: UserType) => {
    const formData: FormData = new FormData();
    formData.append("full_name", updatedUser.fullName);
    formData.append("phone_number", updatedUser.phoneNumber);
    formData.append("gender", updatedUser.gender);
    formData.append("description", updatedUser.description);
    fetchUpdateUser(loggedUser?.id ? loggedUser?.id : "", formData);
    setOpenModalEdit(false);
  };

  const handleDelete = () => {
    fetchDeleteUser(loggedUser?.id ? loggedUser?.id : "");
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
          user={loggedUser}
          openModalDelete={openModalDelete}
          onDelete={handleDelete}
          onClose={handleCloseModalDelete}
        />
      )}
      {openModalEdit && (
        <ModalEdit
          user={loggedUser}
          onSave={handleSave}
          openModalEdit={openModalEdit}
          onClose={handleCloseModalEdit}
        />
      )}
    </div>
  );
};

export default MyProfilePage;
