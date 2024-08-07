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
    birthdayDate: new Date(user.birthdayDate),
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    gender: "",
    birthdayDate: "",
  });

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isOver18 = (birthday: Date) => {
    const today = new Date();
    const age = today.getFullYear() - birthday.getFullYear();
    const m = today.getMonth() - birthday.getMonth();
    return (
      age > 18 ||
      (age === 18 && m >= 0 && today.getDate() >= birthday.getDate())
    );
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    let newErrors = { ...errors };

    if (name === "email") {
      if (!validateEmail(value)) {
        newErrors.email = "Invalid email address";
      } else {
        newErrors.email = "";
      }
    }

    if (name === "firstName" && value.trim() === "") {
      newErrors.firstName = "First name is required";
    } else {
      newErrors.firstName = "";
    }

    if (name === "lastName" && value.trim() === "") {
      newErrors.lastName = "Last name is required";
    } else {
      newErrors.lastName = "";
    }

    if (name === "phoneNumber" && value.trim() === "") {
      newErrors.phoneNumber = "Phone number is required";
    } else {
      newErrors.phoneNumber = "";
    }

    if (name === "gender" && value.trim() === "") {
      newErrors.gender = "Gender is required";
    } else {
      newErrors.gender = "";
    }

    if (name === "birthdayDate") {
      const birthday = new Date(value);
      if (!isOver18(birthday)) {
        newErrors.birthdayDate = "You must be over 18 years old";
      } else {
        newErrors.birthdayDate = "";
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
    const isValid =
      Object.values(errors).every((error) => error === "") &&
      formData.firstName &&
      formData.lastName &&
      formData.email &&
      formData.phoneNumber &&
      formData.gender &&
      formData.birthdayDate;

    onSave(formData);
    console.log(formData);
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
                value={formData.firstName}
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
                value={formData.lastName}
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
                onChange={handleChange}
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
                value={formData.birthdayDate.toISOString().split("T")[0]}
                onChange={handleChange}
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
