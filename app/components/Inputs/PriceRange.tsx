"use client";

interface PriceRangeProps {
  value: number;
  onChange: (value: number) => void;
}

const PriceRange = ({ value, onChange }: PriceRangeProps) => {
  return (
    <>
      <p className="text-center font-semibold text-lg">${value}</p>
      <div className="flex flex-row gap-2">
        <p>$1</p>
        <input
          step={1}
          onChange={(e) => onChange(e.target.valueAsNumber)}
          type="range"
          min={1}
          max={1000}
          className="w-full"
        />
        <p>1000</p>
      </div>
    </>
  );
};

export default PriceRange;
