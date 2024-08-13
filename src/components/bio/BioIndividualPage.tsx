import React, { useEffect, useState } from "react";
import { UserType } from "../../lib/types";
import { Star, StarIcon } from "lucide-react";
import RatingModal from "../rating/RatingModal";
import Spinner from "../spinner/Spinner";
import useRatingStore from "../../store/useRatingStore";
import { PICTURE_URL } from "../../configuration/api";

interface BioProps {
  user: UserType;
  openChat: boolean;
  onClick: () => void;
  userId: string;
}

const Bio = ({ user, onClick, userId }: BioProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const { initializeAttributes } = useRatingStore((state) => ({
    initializeAttributes: state.initializeAttributes,
  }));
  const [rating, setRating] = useState(user.rating);

  const onClose = () => {
    setIsOpen(false);
  };

  const onOpen = () => {
    setIsOpen(true);
  };

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 3000);
    });
  };

  useEffect(() => {
    if (user === null) {
      return;
    }
    initializeAttributes(user.personalAttributes);
    setRating(user.rating);
    // console.log(user);
  }, [initializeAttributes, user]);

  if (user === null) {
    return <Spinner />;
  }

  return (
    <div className="flex items-center justify-center w-full" key={userId}>
      <div className="flex flex-col items-center justify-center mt-24 w-full max-w-3xl">
        <div className="grid grid-cols-2 gap-x-12 w-full">
          <div className="text-textColorSecondary text-xl font-medium min-w-[360px]">
            <div>
              <label>Name</label>
              <div className="mt-2 mb-3 text-base text-darkGray">
                {user.fullName}
              </div>
            </div>
            <div className="relative">
              <label>Email</label>
              <div
                className="mt-2 mb-3 text-base text-darkGray cursor-pointer relative"
                onClick={() => handleCopy(user.email, "email")}
              >
                {user.email}
                {copiedField === "email" && (
                  <span className="absolute top-0 right-0 text-green-500 text-sm">
                    Copied!
                  </span>
                )}
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
            <div className="relative">
              <label>Phone Number</label>
              <div
                className="mt-2 mb-3 text-base text-darkGray cursor-pointer relative"
                onClick={() => handleCopy(user.phoneNumber, "phone")}
              >
                {user.phoneNumber}
                {copiedField === "phone" && (
                  <span className="absolute top-0 right-0 text-green-500 text-sm">
                    Copied!
                  </span>
                )}
              </div>
            </div>
            <button
              className="text-white text-base font-normal bg-gradient-to-r from-customStart to-customEnd py-2 px-4 rounded mt-10 mb-6 w-full"
              onClick={onClick}
            >
              Send Message
            </button>
          </div>
          <div className="flex flex-col items-center w-full rounded">
            <img
              className=" h-80 max-w-full object-cover px-7 rounded overflow-hidden"
              src={
                user.profilePicture
                  ? `${PICTURE_URL}${user.profilePicture}`
                  : "logo.png"
              }
              alt="profile_picture"
            />
            <div
              className="flex flex-row text-xl gap-1 font-medium tracking-tight text-gray-900 sm:text-5xl mt-20"
              onClick={onOpen}
            >
              {[...Array(5)].map((_, index) => (
                <StarIcon
                  key={index}
                  className={`w-6 h-6 cursor-pointer ${
                    index < rating ? "text-yellow-400" : "text-gray-400"
                  }`}
                  fill={index < rating ? "#f59e0b" : "none"}
                  stroke={index < rating ? "none" : "#9ca3af"}
                />
              ))}
              <p className="text-lg">{`(${rating})`}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full mt-12">
          <div className="text-textColorSecondary text-xl font-medium flex flex-col w-full mb-6">
            <label>My Description</label>
            <textarea
              className="mt-2 mb-3 text-base bg-background text-darkGray w-full border border-lightGray rounded p-2 h-auto resize-none focus:border-lightGray focus:outline-none"
              placeholder="My Description"
              readOnly
              value={user.description}
            />
          </div>
          <div className="flex flex-col w-full mb-6 text-textColorSecondary text-xl font-medium">
            <label>My Attributes</label>
            <textarea
              className="mt-2 mb-3 text-base bg-background text-darkGray w-full border border-lightGray rounded p-2 h-auto resize-none focus:border-lightGray focus:outline-none"
              placeholder="My Attributes"
              readOnly
              value={user.personalAttributes
                .map((attr) => attr.attributeName)
                .join(", ")}
            />
          </div>
          <div className="flex flex-col w-full mb-6 text-textColorSecondary text-xl font-medium">
            <label>Attributes for Soulmate</label>
            <textarea
              className="mt-2 mb-3 text-base bg-background text-darkGray w-full border border-lightGray rounded p-2 h-auto resize-none focus:border-lightGray focus:outline-none"
              placeholder="Attributes for Soulmate"
              readOnly
              value={user.searchedAttributes
                ?.map((attr) => attr.attributeName)
                .join(", ")}
            />
          </div>
          {user.coverPictures && (
            <div className="w-full">
              <label className="text-textColorSecondary text-xl font-medium">
                Images
              </label>
              <div className="flex flex-row gap-16 w-full mb-10">
                {user.coverPictures &&
                  user.coverPictures.map((imageUrl, index) => (
                    <div key={index} className="relative">
                      <img
                        className="w-56 h-56 object-cover"
                        src={`${PICTURE_URL}${imageUrl}`}
                        alt={"UserImage"}
                      />
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <RatingModal onClose={onClose} isOpen={isOpen} />
    </div>
  );
};

export default Bio;
