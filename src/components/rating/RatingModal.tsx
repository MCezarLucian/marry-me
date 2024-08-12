import { X } from "lucide-react";
import React from "react";
import Rating from "./Rating";
import useRatingStore from "../../store/useRatingStore";

interface RatingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const handleModalClick = (e: React.MouseEvent) => {
  e.stopPropagation();
};

const RatingModal = ({ isOpen, onClose }: RatingModalProps) => {
  const { attributes } = useRatingStore((state) => ({
    attributes: state.attributes,
  }));
  console.log(attributes);

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
          {attributes.map((attribute) => (
            <div key={attribute.attributeId}>
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
