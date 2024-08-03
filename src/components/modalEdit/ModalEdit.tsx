import React, { useState } from "react";
import { UserType } from "@/lib/types";
import { Input } from "../ui/input";

interface ModalEditProps {
  user: UserType;
}

const ModalEdit = ({ user }: ModalEditProps) => {
  const [formData, setFormData] = useState<UserType>(user);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center font-Inter">
      <div className="bg-white rounded-lg p-12 max-w-2xl w-full">
        <h2 className="text-3xl font-bold mb-10">Edit Profile</h2>
        <div className="grid gap-24	 grid-cols-2">
          <div>
            <label className="flex flex-col text-textColorSecondary font-medium">
              First Name
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="border rounded py-2 px-3 mt-2 mb-3 text-base text-darkGray focus:border-lightGray focus:outline-none"
              />
            </label>
            <label className="flex flex-col text-textColorSecondary font-medium">
              Last Name
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="border rounded py-2 px-3 mt-2 mb-3 text-base text-darkGray focus:border-lightGray focus:outline-none"
              />
            </label>
            <label className="flex flex-col text-textColorSecondary font-medium">
              Email
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="border rounded py-2 px-3 mt-2 mb-3 text-base text-darkGray focus:border-lightGray focus:outline-none"
              />
            </label>
          </div>
          <div>
            <label className="flex flex-col text-textColorSecondary font-medium">
              Phone Number
              <input
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="border rounded py-2 px-3 mt-2 mb-3 text-base text-darkGray focus:border-lightGray focus:outline-none"
              />
            </label>
            <label className="flex flex-col text-textColorSecondary font-medium">
              Gender
              <input
                type="text"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="border rounded py-2 px-3 mt-2 mb-3 text-base text-darkGray focus:border-lightGray focus:outline-none"
              />
            </label>
            <label className="flex flex-col text-textColorSecondary font-medium">
              Birthday
              <input
                type="date"
                name="birthdayDate"
                value={formData.birthdayDate.toISOString().substr(0, 10)}
                onChange={handleChange}
                className="border rounded py-2 px-3 mt-2 mb-3 text-base text-darkGray focus:border-lightGray focus:outline-none"
              />
            </label>
          </div>
        </div>
        <label className="flex flex-col text-textColorSecondary font-medium">
          Description
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="border rounded py-2 px-3 mt-2 mb-3 text-base text-darkGray resize-none focus:border-lightGray focus:outline-none"
          />
        </label>
        <div className="flex relative space-x-4 mt-4 ">
          <button className="border border-MainBlue justify-start text-MainBlue px-4 py-2 rounded hover:bg-MainBlue/10">
            Cancel
          </button>
          <button className="bg-blue-500 absolute right-0 text-white px-8 py-2 rounded hover:bg-blue-700">
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalEdit;
