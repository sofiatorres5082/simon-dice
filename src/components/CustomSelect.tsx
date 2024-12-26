import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface Option {
  value: string;
  label: string;
}

interface CustomSelectProps {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  options,
  value,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOptionClick = (option: string) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className="relative w-[250px]">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between border-2 border-[#df6c8d] 
                   bg-white hover:bg-[#f1c8d3] transition-all duration-500 rounded-full px-2 py-1 sm:px-4 sm:py-2 cursor-pointer"
      >
        <div className="flex items-center gap-2 text-[#df6c8d] hover:text-[#ffeff3] transition-all duration-500 px-4 font-pedagogique">
          <span>
            {options.find((opt) => opt.value === value)?.label || "Seleccionar"}
          </span>
        </div>
        <ChevronDown size={18} className="text-[#df6c8d]" />
      </div>

      {isOpen && (
        <div
          className="absolute top-full left-0 w-full border-2 border-[#df6c8d] 
                  bg-white rounded-xl mt-1 shadow-md z-50"
        >
          {options.map((option) => (
            <div
              key={option.value}
              onClick={() => handleOptionClick(option.value)}
              className={`px-11 py-2 cursor-pointer rounded-xl hover:bg-[#ee99b1] hover:text-white font-pedagogique ${
                value === option.value
                  ? "bg-[#ee99b1] text-white"
                  : "text-[#df6c8d]"
              }`}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
