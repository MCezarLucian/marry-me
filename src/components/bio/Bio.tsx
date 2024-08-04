import React, { useState } from "react";
import { UserType } from "@/lib/types";
import { Star } from "lucide-react";

interface BioProps {
  user: UserType; //user data
}

const Bio = ({ user }: BioProps) => {
  const [showMessage, setShowMessage] = useState(false);

  const handleButtonClick = () => {
    setShowMessage(true);
  };

  return (
    <div className="flex items-center justify-center w-full">
      <div className="flex flex-col items-center justify-center mt-24 w-full max-w-3xl">
        <div className="grid grid-cols-2 gap-x-12 w-full">
          <div className="text-textColorSecondary text-xl font-medium w-full">
            <div>
              <label>Name</label>
              <div className="mt-2 mb-3 text-base text-darkGray">
                {user.firstName} {user.lastName}
              </div>
            </div>
            <div>
              <label>Email</label>
              <div className="mt-2 mb-3 text-base text-darkGray">
                {user.email}
              </div>
            </div>
            <div>
              <label>Age</label>
              <div className="mt-2 mb-3 text-base text-darkGray">
                {user.age}
              </div>
            </div>
            <div>
              <label>Gender</label>
              <div className="capitalize mt-2 mb-3 text-base text-darkGray">
                {user.gender}
              </div>
            </div>
            <div>
              <label>Phone Number</label>
              <div className="mt-2 text-base text-darkGray">
                {user.phoneNumber}
              </div>
            </div>
            <button
              className="text-white text-base font-normal bg-gradient-to-r from-customStart to-customEnd py-2 px-4 rounded mt-9 mb-6 w-full"
              onClick={handleButtonClick}
            >
              Send Message
            </button>
          </div>
          <div className="flex flex-col items-center w-full">
            <img
              className=" h-80 max-w-full object-cover px-7"
              src={user.profilePicture}
              alt="Profile Picture"
            />
            <div className="flex flex-row text-xl gap-1 font-medium tracking-tight text-gray-900 sm:text-5xl mt-14">
              <Star className="text-darkGray fill-darkGray" />
              <Star className="text-darkGray fill-darkGray" />
              <Star className="text-darkGray fill-darkGray" />
              <Star className="text-darkGray fill-darkGray" />
              <Star className="text-darkGray fill-darkGray" />
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full mt-12">
          <div className="text-textColorSecondary text-xl font-medium flex flex-col w-full mb-6">
            <label>My Description</label>
            <textarea
              className="mt-2 mb-3 text-base bg-background text-darkGray w-full border border-lightGray rounded p-2  h-32 resize-none focus:border-lightGray focus:outline-none"
              placeholder="My Description"
              readOnly
            >
              {user.description}
            </textarea>
          </div>
          <div className="flex flex-col w-full mb-6 text-textColorSecondary text-xl font-medium">
            <label>My Attributes</label>
            <textarea
              className="mt-2 mb-3 text-base bg-background text-darkGray w-full border border-lightGray rounded p-2  h-32 resize-none focus:border-lightGray focus:outline-none"
              placeholder="My Attributes"
              readOnly
            >
              {user.attributes.join(", ")}
            </textarea>
          </div>
          <div className="flex flex-col w-full mb-6 text-textColorSecondary text-xl font-medium">
            <label>Attributes for Soulmate</label>
            <textarea
              className="mt-2 mb-3 text-base bg-background text-darkGray w-full border border-lightGray rounded p-2  h-32 resize-none focus:border-lightGray focus:outline-none"
              placeholder="Attributes for Soulmate"
              readOnly
            >
              {user.soulmateAttributes.join(", ")}
            </textarea>
          </div>
          <div className="w-full">
            <label className="text-textColorSecondary text-xl font-medium">
              Images
            </label>
            <div className="flex flex-row space-x-10 gap-9 w-full">
              {user.imageUrls.map((imageUrl, index) => (
                <div key={index} className="w-52">
                  <img
                    className="w-56 h-56 object-cover"
                    src={imageUrl}
                    alt={`User Image ${index + 1}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bio;
