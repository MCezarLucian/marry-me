import React, { useState } from "react";
import { Star as StarIcon } from "lucide-react";

interface RatingProps {
  value: number;
  onChange: (rating: number) => void;
  edit: boolean;
}

const Rating: React.FC<RatingProps> = ({ value, onChange, edit }) => {
  const [hover, setHover] = useState<number | null>(null);
  const roundedValue = Math.round(value);

  const handleMouseEnter = (index: number) => {
    setHover(index);
  };

  const handleMouseLeave = () => {
    setHover(null);
  };

  const handleClick = (index: number) => {
    onChange(index + 1);
  };

  return (
    <div className="flex flex-row">
      {edit &&
        [...Array(5)].map((_, index) => (
          <StarIcon
            key={index}
            className={`w-6 h-6 cursor-pointer ${
              index < (hover ?? roundedValue)
                ? "text-yellow-400"
                : "text-gray-400"
            }`}
            onMouseEnter={() => handleMouseEnter(index + 1)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(index)}
            fill={index < (hover ?? roundedValue) ? "#f59e0b" : "none"}
            stroke={index < (hover ?? roundedValue) ? "none" : "#9ca3af"}
          />
        ))}
      {!edit &&
        [...Array(5)].map((_, index) => (
          <StarIcon
            key={index}
            className={`w-6 h-6 cursor-pointer ${
              index < (hover ?? roundedValue)
                ? "text-yellow-400"
                : "text-gray-400"
            }`}
            fill={index < (hover ?? roundedValue) ? "#f59e0b" : "none"}
            stroke={index < (hover ?? roundedValue) ? "none" : "#9ca3af"}
          />
        ))}
      {`(${value})`}
    </div>
  );
};

export default Rating;
