import React, { useState } from "react";
import { UserType } from "@/lib/types";

interface FilterProps {
  users: UserType[]; // array of user data
  onFilter: (filteredUsers: UserType[]) => void;
}

const Filter = ({ users, onFilter }: FilterProps) => {
  const [name, setName] = useState<string>("");
  const [attributes, setAttributes] = useState<string>("");
  const [selectedAgeRanges, setSelectedAgeRanges] = useState<string[]>([]);
  const [selectedGenders, setSelectedGenders] = useState<string[]>([]);

  const handleAgeRangeChange = (range: string) => {
    setSelectedAgeRanges((prev) =>
      prev.includes(range) ? prev.filter((r) => r !== range) : [...prev, range]
    );
  };

  const handleGenderChange = (gender: string) => {
    setSelectedGenders((prev) =>
      prev.includes(gender)
        ? prev.filter((g) => g !== gender)
        : [...prev, gender]
    );
  };

  const ageRanges = ["18 > 25", "25 > 30", "30 > 40", "40 > 50", "50 > 70"];

  return (
    <div className="flex flex-col px-4 py-10 font-Inter top-0 left-0 min-h-screen bg-backgroundGray max-w-64 border-r border-r-darkGray border-r-1 overflow-y-auto">
      <div className="mb-4 w-full">
        <input
          type="text"
          value={name}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white"
          placeholder="Search Name.."
        />
      </div>
      <div className="mb-4 w-full">
        <input
          type="text"
          value={attributes}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white"
          placeholder="Search Attributs..."
        />
      </div>
      <button className="bg-gradient-to-r from-customStart to-customEnd text-white font-bold py-2 px-4 rounded  mb-6">
        Search
      </button>
      <div className="flex flex-col mt-4 mb-4 w-full">
        <label className="block text-gray-700 text-sm font-bold mb-5">
          Gender
        </label>
        <div className="flex flex-col text-base">
          <label className="mr-2 mb-5">
            <input
              type="checkbox"
              value="male"
              checked={selectedGenders.includes("male")}
              onChange={() => handleGenderChange("male")}
              className="mr-2 border-darkGray p-6"
            />
            Male
          </label>
          <label className="mr-2 mb-5 text-base">
            <input
              type="checkbox"
              value="female"
              checked={selectedGenders.includes("female")}
              onChange={() => handleGenderChange("female")}
              className="mr-2"
            />
            Female
          </label>
        </div>
      </div>
      <div className="mb-4 w-full">
        <label className="block text-gray-700 text-sm font-bold mb-5">
          Age
        </label>
        <div className="flex flex-col">
          {ageRanges.map((range) => (
            <label key={range} className="mr-2 mb-5 text-base">
              <input
                type="checkbox"
                value={range}
                checked={selectedAgeRanges.includes(range)}
                onChange={() => handleAgeRangeChange(range)}
                className="mr-2"
              />
              {range}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filter;
