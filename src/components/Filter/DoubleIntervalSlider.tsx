import React, { useState } from "react";
import ReactSlider from "react-slider";

interface DoubleIntervalSliderProps {
  min: number;
  max: number;
  step: number;
  onChange: (values: [number, number]) => void;
}

const DoubleIntervalSlider: React.FC<DoubleIntervalSliderProps> = ({
  min,
  max,
  step,
  onChange,
}) => {
  const [values, setValues] = useState<[number, number]>([min, max]);

  const handleChange = (newValues: [number, number]) => {
    setValues(newValues);
    onChange(newValues);
  };

  return (
    <div className="w-full max-w-lg mx-auto mt-4 grid mb-3">
      <div className="flex justify-between mt-2 text-sm text-gray-700">
        <span>{values[0]}</span>
        <span>{values[1]}</span>
      </div>

      <ReactSlider
        className="h-2 bg-transparent rounded"
        thumbClassName="h-6 w-6 bg-white border border-gray-200 drop-shadow rounded-full cursor-pointer"
        trackClassName="h-2 rounded mt-2"
        defaultValue={[min, max]}
        min={min}
        max={max}
        step={step}
        value={values}
        onChange={handleChange}
        ariaLabel={["Lower thumb", "Upper thumb"]}
        ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
        renderTrack={(props, state) => {
          const { index, value } = state;
          const trackStyle = {
            ...props.style,
            background: index === 1 ? "blue" : "#d1d5db",
            height: "100%",
            borderRadius: "4px",
          };
          return <div {...props} style={trackStyle} />;
        }}
        renderThumb={(props, state) => (
          <div
            {...props}
            className={`h-6 w-6 rounded-full cursor-pointer drop-shadow ${
              values[state.index] === state.valueNow
                ? "bg-white border-none"
                : "bg-white border border-gray-200"
            }`}
          />
        )}
      />
    </div>
  );
};

export default DoubleIntervalSlider;
