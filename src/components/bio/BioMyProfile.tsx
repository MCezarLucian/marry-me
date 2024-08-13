import React, { useState, useEffect } from "react";
import { UserType } from "@/lib/types";
import { StarIcon } from "lucide-react";
import ProfilePicture from "../imageUploader/ProfilePicture";
import CoverPictureUploader from "../imageUploader/CoverPicturesUploader";

interface BioProps {
  user: UserType;
  openModalEdit: boolean;
  openModalDelete: boolean;
  onOpenModalEdit: () => void;
  onOpenModalDelete: () => void;
}

const BioMyProfile = ({
  user,
  onOpenModalDelete,
  onOpenModalEdit,
}: BioProps) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [rating, setRating] = useState(user.rating);

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 3000);
    });
  };

  useEffect(() => {
    setRating(user.rating);
  }, [user]);

  if (!user) {
    return <></>;
  }

  return (
    <div className="flex items-center justify-center w-full">
      <div className="flex flex-col items-center justify-center mb-24 mt-24 w-full max-w-3xl">
        <div className="grid grid-cols-2 gap-x-12 w-full">
          <div className="flex flex-col items-center w-full">
            <ProfilePicture profilePicture={`${user.profilePicture}`} />

            <div className="flex flex-row text-xl gap-1 font-medium tracking-tight text-gray-900 sm:text-5xl mt-20">
              {[...Array(5)].map((_, index) => (
                <StarIcon
                  key={index}
                  className={`w-6 h-6 ${
                    index < rating ? "text-yellow-400" : "text-gray-400"
                  }`}
                  fill={index < rating ? "#f59e0b" : "none"}
                  stroke={index < rating ? "none" : "#9ca3af"}
                />
              ))}
            </div>
          </div>
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
            <div className="flex flex-row justify-center items-center gap-10">
              <button
                className="text-white text-base font-normal bg-customStart py-2 px-4 rounded mt-10 mb-6 w-full"
                onClick={onOpenModalEdit}
              >
                Edit
              </button>
              <button
                className=" text-base font-normal border border-buttonDelete text-buttonDelete py-2 px-4 rounded mt-10 mb-6 w-full"
                onClick={onOpenModalDelete}
              >
                Delete
              </button>
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
              value={user.description || ""}
            />
          </div>
          <div className="flex flex-col w-full mb-6 text-textColorSecondary text-xl font-medium">
            <label>My Attributes</label>
            <textarea
              className="mt-2 mb-3 text-base bg-background text-darkGray w-full border border-lightGray rounded p-2 h-auto resize-none focus:border-lightGray focus:outline-none"
              placeholder="My Attributes"
              readOnly
              value={
                (user.personalAttributes &&
                  user.personalAttributes
                    .map((attr) => attr.attributeName)
                    .join(", ")) ||
                ""
              }
            />
          </div>
          <div className="flex flex-col w-full mb-6 text-textColorSecondary text-xl font-medium">
            <label>Attributes for Soulmate</label>
            <textarea
              className="mt-2 mb-3 text-base bg-background text-darkGray w-full border border-lightGray rounded p-2 h-auto resize-none focus:border-lightGray focus:outline-none"
              placeholder="Attributes for Soulmate"
              readOnly
              value={
                (user.searchedAttributes &&
                  user.searchedAttributes
                    .map((attr) => attr.attributeName)
                    .join(", ")) ||
                ""
              }
            />
          </div>
          <div className="w-full">
            <label className="text-textColorSecondary text-xl font-medium">
              Images
            </label>
            <div className="flex flex-row gap-16 w-full mb-10">
              {(user.coverPictures || []).map((picture, index) => (
                <CoverPictureUploader key={index} profilePicture={picture} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BioMyProfile;
