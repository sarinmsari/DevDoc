import React, { useState, useRef, useEffect } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface DropdownProps {
  value: string | number;
  options: Array<{ value: string | number; label: string }>;
  onChange: (value: string | number) => void;
  placeholder?: string;
}

const Dropdown = ({ value, options, onChange, placeholder = "Select..." }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectedOption = options.find((opt) => opt.value === value);

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between min-w-[120px] gap-2 px-3 py-1.5 text-sm font-medium bg-mainBg border border-border text-textSecondary hover:text-textPrimary rounded-md transition-all"
      >
        <span className="truncate">{selectedOption ? selectedOption.label : placeholder}</span>
        <ExpandMoreIcon className={`text-textSecondary transform-gpu duration-200 transition-transform ease-in-out ${isOpen ? 'rotate-180' : ''}`} fontSize="small" />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-1 w-full min-w-[150px] bg-mainBg border border-border shadow-xl rounded-md overflow-hidden z-[100]">
          {options.map((opt) => (
            <button
              key={opt.value}
              onClick={() => {
                onChange(opt.value);
                setIsOpen(false);
              }}
              className={`w-full text-left px-3 py-2 text-sm transition-colors hover:bg-secondaryBg ${
                value === opt.value ? 'text-textPrimary font-semibold' : 'text-textSecondary'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;