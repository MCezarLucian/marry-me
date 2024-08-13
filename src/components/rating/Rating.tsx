import React, { useEffect, useState } from "react";
import { Star as StarIcon } from "lucide-react";
import useRatingStore from "../../store/useRatingStore";
import useUserStore from "../../store/useUserStore";

interface RatingProps {
  attributeId?: string;
  value: number;
  edit: boolean;
}

const Rating: React.FC<RatingProps> = ({ value, edit, attributeId }) => {
  const { loggedUser } = useUserStore((state) => ({
    loggedUser: state.loggedUser,
  }));
  const { fetchRateAttribute, attributes } = useRatingStore((state) => ({
    fetchRateAttribute: state.fetchRateAttribute,
    attributes: state.attributes,
  }));

  const [rating, setRating] = useState(value);
  const [hover, setHover] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setHover(index);
  };

  const handleMouseLeave = () => {
    setHover(null);
  };

  const handleClick = (index: number) => {
    const newRating = index + 1;

    if (loggedUser && attributeId) {
      fetchRateAttribute(loggedUser.id, attributeId, newRating.toString());
    }
  };

  useEffect(() => {
    if (attributes) {
      setRating(
        Number(
          attributes.find((attribute) => attribute.attributeId === attributeId)
            ?.value
        )
      );
    }
  }, [attributeId, attributes]);

  if (!attributeId || !loggedUser) {
    return <></>;
  }

  return (
    <div className="flex flex-row">
      {edit &&
        [...Array(5)].map((_, index) => (
          <StarIcon
            key={index}
            className={`w-6 h-6 cursor-pointer ${
              index < (hover ?? rating) ? "text-yellow-400" : "text-gray-400"
            }`}
            onMouseEnter={() => handleMouseEnter(index + 1)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(index)}
            fill={index < (hover ?? rating) ? "#f59e0b" : "none"}
            stroke={index < (hover ?? rating) ? "none" : "#9ca3af"}
          />
        ))}
      {!edit &&
        [...Array(5)].map((_, index) => (
          <StarIcon
            key={index}
            className={`w-6 h-6 cursor-pointer ${
              index < (hover ?? rating) ? "text-yellow-400" : "text-gray-400"
            }`}
            fill={index < (hover ?? rating) ? "#f59e0b" : "none"}
            stroke={index < (hover ?? rating) ? "none" : "#9ca3af"}
          />
        ))}
      {`(${value})`}
    </div>
  );
};

export default Rating;
