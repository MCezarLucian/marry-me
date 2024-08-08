import React, { useState, useEffect } from "react";
import ReactSlider from "react-slider";

interface DoubleIntervalSliderProps {
  min: number;
  max: number;
  step: number;
  onChange: (values: [number, number]) => void;
  reset: boolean;
}

const DoubleIntervalSlider: React.FC<DoubleIntervalSliderProps> = ({
  min,
  max,
  step,
  onChange,
  reset,
}) => {
  const [values, setValues] = useState<[number, number]>([min, max]);
  const [inputs, setInputs] = useState<[string, string]>([
    min.toString(),
    max.toString(),
  ]);

  useEffect(() => {
    setInputs([min.toString(), max.toString()]);
    if (reset) {
      setValues([min, max]);
      setInputs([min.toString(), max.toString()]);
    }
  }, [min, max, reset]);

  /*  useEffect(() => {
    if (reset) {
      setValues([min, max]);
      setInputs([min.toString(), max.toString()]);
    }
  }, [reset, min, max]); */

  const handleChange = (newValues: [number, number]) => {
    setValues(newValues);
    onChange(newValues);
    setInputs([newValues[0].toString(), newValues[1].toString()]);
  };

  const handleInputChange = (index: number, value: string) => {
    const newInputs = [...inputs] as [string, string];
    newInputs[index] = value;
    setInputs(newInputs);

    const newValue = Number(value);
    if (!isNaN(newValue) && newValue >= min && newValue <= max) {
      const newValues = [...values] as [number, number];
      newValues[index] = newValue;
      handleChange(newValues);
    }
  };

  const handleInputBlur = (index: number) => {
    const newValue =
      inputs[index] === "" ? (index === 0 ? min : max) : Number(inputs[index]);
    const newValues = [...values] as [number, number];
    newValues[index] = newValue;
    handleChange(newValues);
  };

  return (
    <div className="w-full max-w-lg mx-auto mt-4 grid mb-3">
      <div className="flex justify-between mt-2 text-sm gap-5 text-gray-700">
        <input
          type="number"
          value={inputs[0]}
          min={min}
          max={max}
          step={step}
          placeholder={min.toString()}
          onChange={(e) => handleInputChange(0, e.target.value)}
          onBlur={() => handleInputBlur(0)}
          className="border p-1 rounded no-arrows"
        />
        <input
          type="number"
          value={inputs[1]}
          min={min}
          max={max}
          step={step}
          placeholder={max.toString()}
          onChange={(e) => handleInputChange(1, e.target.value)}
          onBlur={() => handleInputBlur(1)}
          className="border p-1 rounded no-arrows"
        />
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
          const { key, ...restProps } = props;
          const { index } = state;
          const trackStyle = {
            ...restProps.style,
            background: index === 1 ? "blue" : "#d1d5db",
            height: "100%",
            borderRadius: "4px",
          };
          return <div key={key} {...restProps} style={trackStyle} />;
        }}
        renderThumb={(props, state) => {
          const { key, ...restProps } = props;
          return (
            <div
              key={key}
              {...restProps}
              className={`h-6 w-6 rounded-full cursor-pointer drop-shadow ${
                values[state.index] === state.valueNow
                  ? "bg-white border-none"
                  : "bg-white border border-gray-200"
              }`}
            />
          );
        }}
      />
    </div>
  );
};

export default DoubleIntervalSlider;
