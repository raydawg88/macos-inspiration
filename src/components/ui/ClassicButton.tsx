'use client';

import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ClassicButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'default' | 'primary';
  size?: 'sm' | 'md' | 'lg';
}

export function ClassicButton({
  children,
  variant = 'default',
  size = 'md',
  className = '',
  disabled,
  ...props
}: ClassicButtonProps) {
  const sizeClasses = {
    sm: 'px-2 py-0.5 text-[10px]',
    md: 'px-4 py-1 text-xs',
    lg: 'px-6 py-1.5 text-sm',
  };

  const isPrimary = variant === 'primary';

  return (
    <button
      className={`
        bg-[#DDDDDD]
        border-black
        rounded
        cursor-pointer
        select-none
        ${isPrimary ? 'border-[3px] rounded-md' : 'border'}
        ${sizeClasses[size]}
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#EEEEEE] active:bg-[#AAAAAA]'}
        ${className}
      `}
      style={{
        fontFamily: "'ChicagoFLF', 'Geneva', 'Verdana', sans-serif",
        boxShadow: disabled
          ? 'none'
          : 'inset 1px 1px 0 #FFFFFF, inset -1px -1px 0 #888888',
      }}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
