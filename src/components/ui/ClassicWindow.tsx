'use client';

import { ReactNode } from 'react';

interface ClassicWindowProps {
  title: string;
  children: ReactNode;
  className?: string;
  showCloseBox?: boolean;
  onClose?: () => void;
}

export function ClassicWindow({
  title,
  children,
  className = '',
  showCloseBox = true,
  onClose,
}: ClassicWindowProps) {
  return (
    <div
      className={`
        bg-[#DDDDDD]
        border border-black
        shadow-[2px_2px_0_#000000]
        ${className}
      `}
      style={{
        boxShadow: `
          2px 2px 0 #000000,
          inset 1px 1px 0 #FFFFFF,
          inset -1px -1px 0 #888888
        `,
      }}
    >
      {/* Title Bar */}
      <div
        className="h-5 flex items-center px-1 relative border-b border-black"
        style={{
          background: 'linear-gradient(180deg, #FFFFFF 0%, #CCCCCC 100%)',
        }}
      >
        {/* Close Box */}
        {showCloseBox && (
          <button
            onClick={onClose}
            className="w-[13px] h-[11px] bg-[#DDDDDD] border border-black relative z-10 flex-shrink-0 hover:bg-[#CCCCCC] active:bg-[#AAAAAA]"
            style={{
              boxShadow: 'inset 1px 1px 0 #FFFFFF, inset -1px -1px 0 #888888',
            }}
            aria-label="Close window"
          />
        )}

        {/* Horizontal Stripes (behind title) */}
        <div
          className="absolute left-6 right-6 top-1 bottom-1"
          style={{
            background: `repeating-linear-gradient(
              0deg,
              #AAAAAA 0px,
              #AAAAAA 1px,
              #DDDDDD 1px,
              #DDDDDD 2px,
              #AAAAAA 2px,
              #AAAAAA 3px,
              #DDDDDD 3px,
              #DDDDDD 4px
            )`,
          }}
        />

        {/* Title Text */}
        <span
          className="relative z-10 flex-1 text-center text-xs px-2"
          style={{
            fontFamily: "'ChicagoFLF', 'Geneva', 'Verdana', sans-serif",
            background: 'linear-gradient(180deg, #FFFFFF 0%, #CCCCCC 100%)',
          }}
        >
          {title}
        </span>

        {/* Spacer for balance */}
        {showCloseBox && <div className="w-[13px] flex-shrink-0" />}
      </div>

      {/* Window Content */}
      <div className="bg-white p-3">{children}</div>
    </div>
  );
}
