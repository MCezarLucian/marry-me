import React, { useState, ChangeEvent } from "react";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  description: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    description: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {};

  return (
    <div className="flex items-center justify-center w-full">
      <div className="bg-white rounded-lg p-12 max-w-xl">
        <h2 className="text-3xl font-bold mb-10">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-x-10 grid-rows-2 grid-cols-2">
            <label className="flex flex-col text-textColorSecondary font-medium">
              First Name
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="border rounded py-2 px-3 mt-2 mb-3 text-base w-full text-darkGray focus:border-lightGray focus:outline-none"
              />
            </label>
            <label className="flex flex-col text-textColorSecondary font-medium">
              Last Name
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="border rounded py-2 px-3 mt-2 mb-3 w-full text-base text-darkGray focus:border-lightGray focus:outline-none"
              />
            </label>
            <label className="flex flex-col justify-end text-textColorSecondary font-medium">
              Email
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="border rounded py-2 px-3 mt-2 mb-3 text-base text-darkGray focus:border-lightGray focus:outline-none"
              />
            </label>
          </div>
          <label className="flex flex-col text-textColorSecondary font-medium">
            Description
            <textarea
              name="description"
              placeholder="Description"
              value={formData.description}
              onChange={handleChange}
              className="border rounded py-2 px-3 mt-2 mb-10 text-base text-darkGray resize-none focus:border-lightGray focus:outline-none"
            />
          </label>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="justify-center bg-gradient-to-r from-customStart to-customEnd text-white font-bold py-2 px-16 rounded mb-6"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
