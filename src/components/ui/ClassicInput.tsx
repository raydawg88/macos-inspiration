'use client';

import { InputHTMLAttributes, forwardRef } from 'react';

interface ClassicInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const ClassicInput = forwardRef<HTMLInputElement, ClassicInputProps>(
  ({ label, className = '', ...props }, ref) => {
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
        <input
          ref={ref}
          className={`
            bg-white
            border border-black
            px-1.5 py-1
            text-xs
            outline-none
            focus:ring-2 focus:ring-[#0066CC] focus:ring-offset-0
            ${className}
          `}
          style={{
            fontFamily: "'Geneva', 'Verdana', sans-serif",
            boxShadow: 'inset 1px 1px 0 #888888, inset -1px -1px 0 #FFFFFF',
          }}
          {...props}
        />
      </div>
    );
  }
);

ClassicInput.displayName = 'ClassicInput';
