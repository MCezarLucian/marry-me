import { AttributesType } from "@/lib/types";
import { X } from "lucide-react";
import React from "react";
import Rating from "./Rating";

interface RatingModalProps {
  attributes: AttributesType[];
  isOpen: boolean;
  onClose: () => void;
}

const handleModalClick = (e: React.MouseEvent) => {
  e.stopPropagation();
};

const RatingModal = ({ attributes, isOpen, onClose }: RatingModalProps) => {
  if (!isOpen) return null;
  return (
    <div
      className="fixed inset-0 z-10 flex items-center justify-center bg-opacity-50"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
    >
      <div
        onClick={handleModalClick}
        className="font-Inter rounded-xl w-1/3 h-auto py-10 px-8 bg-white flex flex-col gap-6"
      >
        <div className="w-full flex justify-end">
          <X onClick={onClose} className="cursor-pointer" />
        </div>
        <p className="text-4xl font-bold">Rating</p>
        <div className="flex flex-col gap-4">
          {attributes.map((attribute, id) => (
            <div>
              <p>{attribute.attributeName}</p>
              <Rating
                value={Number(attribute.value)}
                edit
                attributeId={attribute.attributeId}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RatingModal;
