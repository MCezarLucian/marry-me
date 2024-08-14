import React, { useState } from "react";
import { UserType } from "../../lib/types";
import DoubleIntervalSlider from "./DoubleIntervalSlider";

interface FilterProps {
  users: UserType[];
  admin?: boolean;
  fetchFilteredUsers: (category: string[], value: string[]) => Promise<void>;
}

const Filter = ({ users, admin, fetchFilteredUsers }: FilterProps) => {
  const [name, setName] = useState<string>("");
  const [attributes, setAttributes] = useState<string>("");
  const [selectedAgeRanges, setSelectedAgeRanges] = useState<string[]>([]);
  const [selectedGenders, setSelectedGenders] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [range, setRange] = useState<[number, number]>([18, 110]);
  const [sliderChanged, setSliderChanged] = useState<boolean>(false);
  const [resetSlider, setResetSlider] = useState<boolean>(false);

  const ageRanges = ["18 > 25", "25 > 30", "30 > 40", "40 > 50", "50 > 70"];
  const userTypes = ["Contestant", "Regular"];

  const handleSliderChange = (values: [number, number]) => {
    setRange(values);
    setSliderChanged(true);
    setSelectedAgeRanges([]);
  };

  const handleAgeRangeChange = (range: string) => {
    const newSelectedRanges = selectedAgeRanges.includes(range)
      ? selectedAgeRanges.filter((r) => r !== range)
      : [...selectedAgeRanges, range];

    setSelectedAgeRanges(newSelectedRanges);
    setSliderChanged(false);
    setRange([18, 110]);

    if (newSelectedRanges.length === 1) {
      const [min, max] = newSelectedRanges[0].split(" > ").map(Number);
      setRange([min, max]);
      setSliderChanged(false);
      setResetSlider(true);
    } else {
      setRange([18, 110]);
      setSliderChanged(false);
    }
  };

  const resetSliderRange = () => {
    setResetSlider(false);
  };

  const handleGenderChange = (gender: string) => {
    setSelectedGenders((prev) =>
      prev.includes(gender)
        ? prev.filter((g) => g !== gender)
        : [...prev, gender]
    );
  };

  const handleTypeChange = (type: string) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const handleSearch = () => {
    const { categories, values } = constructQueryParams();
    console.log("Search Params:", { categories, values });
    fetchFilteredUsers(categories, values);
  };

  const constructQueryParams = () => {
    const categories: string[] = [];
    const values: string[] = [];

    if (name) {
      console.log("Filtering by name:", name);
      categories.push("full_name");
      values.push(name);
    }

    if (attributes) {
      console.log("Filtering by attributes:", attributes);
      const personalAttributes = attributes.split(",");
      personalAttributes.forEach((attribute) => {
        categories.push("personal_attributes[]");
        values.push(attribute);
      });
    }

    if (selectedGenders.length > 0) {
      console.log("Filtering by gender:", selectedGenders);
      categories.push("gender");
      values.push(selectedGenders.toString());
    }

    if (selectedAgeRanges.length > 0) {
      console.log(selectedAgeRanges);
      console.log("Filtering by age range:", selectedAgeRanges);
      selectedAgeRanges.forEach((element) => {
        const [age_from, age_to] = element.split(" > ");
        categories.push("age_from[]");
        categories.push("age_to[]");
        values.push(age_from);
        values.push(age_to);
      });
    } else if (sliderChanged) {
      console.log("Filtering by age slider:", range);
      categories.push("age_from[]");
      values.push(range[0].toString());
      categories.push("age_to[]");
      values.push(range[1].toString());
    }

    if (admin && selectedTypes.length > 0) {
      console.log("Filtering by type:", selectedTypes);
      categories.push("type");
      values.push(selectedTypes.join(","));
    }

    return { categories, values };
  };

  if (!users) {
    return <></>;
  }

  return (
    <div className="flex flex-col px-4 py-10 top-0 font-Inter left-0 sticky min-h-full bg-backgroundGray max-w-64 border-r border-r-darkGray border-r-1 overflow-y-scroll scrollbar-hide">
      <div className="mb-4 w-full">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white"
          placeholder="Search Name.."
        />
      </div>
      <div className="mb-4 w-full">
        <input
          type="text"
          value={attributes}
          onChange={(e) => setAttributes(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white"
          placeholder="Search Attributes..."
        />
      </div>
      <div className="flex flex-col mt-4 mb-4 w-full">
        <label className="block text-gray-700 text-sm font-bold mb-5">
          Gender
        </label>
        <div className="flex flex-col text-base">
          <label className="mr-2 mb-5 flex flex-row items-center cursor-pointer">
            <input
              type="checkbox"
              value="m"
              checked={selectedGenders.includes("m")}
              onChange={() => handleGenderChange("m")}
              className="mr-2 border-darkGray p-6 w-4 h-4"
            />
            Male
          </label>
          <label className="mr-2 mb-5 text-base flex flex-row items-center cursor-pointer">
            <input
              type="checkbox"
              value="f"
              checked={selectedGenders.includes("f")}
              onChange={() => handleGenderChange("f")}
              className="mr-2 w-4 h-4"
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
            <label
              key={range}
              className="mr-2 mb-5 text-base flex flex-row items-center cursor-pointer"
            >
              <input
                type="checkbox"
                value={range}
                checked={selectedAgeRanges.includes(range)}
                onChange={() => handleAgeRangeChange(range)}
                onClick={resetSliderRange}
                className="mr-2 w-4 h-4"
              />
              {range}
            </label>
          ))}

          <DoubleIntervalSlider
            min={18}
            max={110}
            step={1}
            onChange={handleSliderChange}
            reset={resetSlider}
          />
        </div>
      </div>
      {admin && (
        <div className="flex flex-col mt-4 mb-4 w-full">
          <label className="block text-gray-700 text-sm font-bold mb-5">
            Type
          </label>
          <div className="flex flex-col text-base">
            {userTypes.map((type) => (
              <label
                key={type}
                className="mr-2 mb-5 flex flex-row items-center cursor-pointer"
              >
                <input
                  type="checkbox"
                  value={type}
                  checked={selectedTypes.includes(type)}
                  onChange={() => handleTypeChange(type)}
                  className="mr-2 w-4 h-4"
                />
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </label>
            ))}
          </div>
        </div>
      )}
      <button
        onClick={handleSearch}
        className="bg-gradient-to-r from-customStart to-customEnd text-white font-bold py-2 px-4 rounded mb-6"
      >
        Search
      </button>
    </div>
  );
};

export default Filter;
