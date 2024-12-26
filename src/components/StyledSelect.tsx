import React from 'react';
import { ChevronDown } from "lucide-react";

interface SelectOption {
  value: string;
  label: string;
}

interface StyledSelectProps {
  value: string;
  onChange: (value: string) => void;
  options: SelectOption[];
  label?: string;
  className?: string;
}

const StyledSelect: React.FC<StyledSelectProps> = ({
  value,
  onChange,
  options,
  label,
  className = ''
}) => {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {label && (
        <span className="font-pedagogique text-[#ee97af] text-lg">
          {label}
        </span>
      )}
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="appearance-none bg-white 
                   border-2 border-[#ee97af] text-[#ee97af] 
                   font-pedagogique rounded-full px-6 py-2 pr-10 
                   w-40 focus:outline-none focus:border-[#ee97af] 
                   focus:ring-2 focus:ring-[#ee97af] cursor-pointer 
                   transition-all duration-300 hover:bg-pink-50"
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <ChevronDown 
          className="absolute right-3 top-1/2 transform -translate-y-1/2 
                     text-[#ee97af] w-5 h-5 pointer-events-none" 
        />
      </div>
    </div>
  );
};

export default StyledSelect;