import React, { useState } from "react";
import { UserType } from "@/lib/types";

/* interface BioProps {
  user: UserType; //user data
} */

const ModalDelete = () => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center font-Inter">
      <div className="bg-white flex flex-col items-center justify-center rounded-lg p-8 max-w-xs w-full">
        <h2 className="text-lg font-bold mb-8">Delete account?</h2>
        <div className="flex justify-end">
          <button className="text-MainBlue px-4 py-2 rounded hover:bg-MainBlue/10">
            Cancel
          </button>
          <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalDelete;
