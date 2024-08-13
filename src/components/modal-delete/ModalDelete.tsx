import React from "react";
import { UserType } from "../../lib/types";
import { logOut } from "../../lib/utils";
import { useNavigate } from "react-router-dom";

interface ModalDeleteProps {
  user: UserType;
  onDelete: (id: string) => void;
  openModalDelete: boolean;
  onClose: () => void;
}

const ModalDelete: React.FC<ModalDeleteProps> = ({
  user,
  onDelete,
  onClose,
}) => {
  const handleDelete = () => {
    onDelete(user.id);
  };

  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center font-Inter">
      <div className="bg-white flex flex-col items-center justify-center rounded-lg p-8 max-w-xs w-full">
        <h2 className="text-lg font-bold mb-8">Delete account?</h2>
        <div className="flex justify-center w-full space-x-2">
          <button
            className="text-MainBlue px-4 py-2 rounded hover:bg-MainBlue/10"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
            onClick={() => {
              handleDelete();
              logOut();
              navigate("/login");
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalDelete;
