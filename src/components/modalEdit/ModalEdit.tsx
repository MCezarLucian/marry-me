import React, { useState } from "react";
import { UserType } from "../../lib/types";

interface ModalEditProps {
  user: UserType;
  onSave: (updatedUser: UserType) => void;
  openModalEdit: boolean;
  onClose: () => void;
}

const ModalEdit = ({ user, onSave, onClose }: ModalEditProps) => {
  const [formData, setFormData] = useState<UserType>({
    ...user,
    dateOfBirth: new Date(user.dateOfBirth),
  });
  const [firstName, setFirstName] = useState<string>(
    formData.fullName.split(" ")[0]
  );
  const [lastName, setLastName] = useState<string>(
    formData.fullName.split(" ")[1]
  );

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    gender: "",
    birthdayDate: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    let newErrors = { ...errors };

    if (name === "firstName") {
      if (value.trim() === "") {
        newErrors.firstName = "First name is required";
      } else {
        console.log(e.target.value);
        newErrors.firstName = "";
        setFirstName(e.target.value);
      }
    }

    if (name === "lastName") {
      if (value.trim() === "") {
        newErrors.lastName = "Last name is required";
      } else {
        newErrors.lastName = "";
        setLastName(e.target.value);
      }
    }

    if (name === "phoneNumber") {
      if (value.trim() === "") {
        newErrors.phoneNumber = "Phone number is required";
      } else {
        newErrors.phoneNumber = "";
        setFormData({ ...formData, phoneNumber: e.target.value });
      }
    }

    if (name === "gender") {
      if (value.trim() === "") {
        newErrors.gender = "Gender is required";
      } else {
        newErrors.gender = "";
        setFormData({ ...formData, gender: e.target.value });
      }
    }

    setErrors(newErrors);

    setFormData({
      ...formData,
      [name]: name === "birthdayDate" ? new Date(value) : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({ ...formData, fullName: firstName + " " + lastName });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center font-Inter">
      <div className="bg-white rounded-lg p-12 max-w-2xl w-full">
        <h2 className="text-3xl font-bold mb-10">Edit Profile</h2>
        <div className="grid gap-24 grid-cols-2">
          <div>
            <label className="flex flex-col relative text-textColorSecondary font-medium pb-5">
              First Name
              <input
                type="text"
                name="firstName"
                value={firstName}
                onChange={handleChange}
                className={`border rounded py-2 px-3 mt-2 mb-1 text-base text-darkGray focus:border-lightGray focus:outline-none ${
                  errors.firstName ? "border-red-500" : ""
                }`}
              />
              {errors.firstName && (
                <span className="text-red-500 absolute bottom-0 text-sm">
                  {errors.firstName}
                </span>
              )}
            </label>
            <label className="flex flex-col relative text-textColorSecondary font-medium pb-5">
              Last Name
              <input
                type="text"
                name="lastName"
                value={lastName}
                onChange={handleChange}
                className={`border rounded py-2 px-3 mt-2 mb-1 text-base text-darkGray focus:border-lightGray focus:outline-none ${
                  errors.lastName ? "border-red-500" : ""
                }`}
              />
              {errors.lastName && (
                <span className="text-red-500 absolute bottom-0 text-sm">
                  {errors.lastName}
                </span>
              )}
            </label>
            <label className="flex flex-col relative text-textColorSecondary font-medium pb-5">
              Email
              <input
                type="email"
                name="email"
                value={formData.email}
                disabled
                className={`border rounded py-2 px-3 mt-2 mb-1 text-base text-darkGray focus:border-lightGray focus:outline-none ${
                  errors.email ? "border-red-500" : ""
                }`}
              />
              {errors.email && (
                <span className="text-red-500 absolute bottom-0 text-sm">
                  {errors.email}
                </span>
              )}
            </label>
          </div>
          <div>
            <label className="flex flex-col relative text-textColorSecondary font-medium pb-5">
              Phone Number
              <input
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className={`border rounded py-2 px-3 mt-2 mb-1 text-base text-darkGray focus:border-lightGray focus:outline-none ${
                  errors.phoneNumber ? "border-red-500" : ""
                }`}
              />
              {errors.phoneNumber && (
                <span className="text-red-500 absolute bottom-0 text-sm">
                  {errors.phoneNumber}
                </span>
              )}
            </label>
            <label className="flex flex-col relative text-textColorSecondary font-medium pb-5">
              Gender
              <input
                type="text"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className={`border rounded py-2 px-3 mt-2 mb-1 text-base text-darkGray focus:border-lightGray focus:outline-none ${
                  errors.gender ? "border-red-500" : ""
                }`}
              />
              {errors.gender && (
                <span className="text-red-500 absolute bottom-0 text-sm">
                  {errors.gender}
                </span>
              )}
            </label>
            <label className="flex flex-col relative text-textColorSecondary font-medium pb-5">
              Birthday
              <input
                type="date"
                name="birthdayDate"
                className={`border rounded py-2 px-3 mt-2 mb-1 text-base text-darkGray focus:border-lightGray focus:outline-none ${
                  errors.birthdayDate ? "border-red-500" : ""
                }`}
                value={formData.dateOfBirth.toISOString().split("T")[0]}
                onChange={handleChange}
                disabled
              />
              {errors.birthdayDate && (
                <span className="text-red-500 absolute bottom-0 text-sm">
                  {errors.birthdayDate}
                </span>
              )}
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
          <button
            className="border border-MainBlue justify-start text-MainBlue px-4 py-2 rounded hover:bg-MainBlue/10"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className={`bg-blue-500 absolute right-0 text-white px-8 py-2 rounded hover:bg-blue-700 ${
              Object.values(errors).some((error) => error)
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
            onClick={handleSubmit}
            disabled={Object.values(errors).some((error) => error)}
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalEdit;
