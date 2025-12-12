'use client';

import { SelectHTMLAttributes, forwardRef } from 'react';

interface ClassicSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: { value: string; label: string }[];
}

export const ClassicSelect = forwardRef<HTMLSelectElement, ClassicSelectProps>(
  ({ label, options, className = '', ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1">
        {label && (
          <label
            className="text-xs"
            style={{ fontFamily: "'Geneva', 'Verdana', sans-serif" }}
          >
            {label}
          </label>
        )}
        <select
          ref={ref}
          className={`
            bg-[#DDDDDD]
            border border-black
            px-1.5 py-1
            text-xs
            outline-none
            cursor-pointer
            focus:ring-2 focus:ring-[#0066CC] focus:ring-offset-0
            ${className}
          `}
          style={{
            fontFamily: "'Geneva', 'Verdana', sans-serif",
            boxShadow: 'inset 1px 1px 0 #FFFFFF, inset -1px -1px 0 #888888',
          }}
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    );
  }
);

ClassicSelect.displayName = 'ClassicSelect';
