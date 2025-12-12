'use client';

import Link from 'next/link';

export function MenuBar() {
  return (
    <div
      className="h-5 flex items-center border-b border-black sticky top-0 z-50"
      style={{
        background: 'linear-gradient(180deg, #EEEEEE 0%, #CCCCCC 100%)',
        fontFamily: "'ChicagoFLF', 'Geneva', 'Verdana', sans-serif",
        fontSize: '12px',
      }}
    >
      {/* Apple Menu Icon */}
      <div className="px-2 h-full flex items-center hover:bg-black hover:text-white cursor-pointer">
        <svg
          width="14"
          height="16"
          viewBox="0 0 14 16"
          fill="currentColor"
          className="block"
        >
          <path d="M11.3 8.1c0-1.9 1.5-2.8 1.6-2.9-0.9-1.3-2.2-1.5-2.7-1.5-1.2-0.1-2.3 0.7-2.9 0.7-0.6 0-1.5-0.7-2.5-0.7-1.3 0-2.4 0.7-3.1 1.9-1.3 2.3-0.3 5.7 1 7.5 0.6 0.9 1.4 1.9 2.4 1.9 1 0 1.3-0.6 2.5-0.6s1.5 0.6 2.5 0.6c1 0 1.7-0.9 2.3-1.8 0.7-1 1-2 1-2.1-0.1 0-2.1-0.8-2.1-3zM9.3 2.5c0.5-0.6 0.9-1.5 0.8-2.4-0.8 0-1.7 0.5-2.3 1.2-0.5 0.6-0.9 1.5-0.8 2.3 0.9 0.1 1.8-0.4 2.3-1.1z" />
        </svg>
      </div>

      {/* Site Name */}
      <Link
        href="/"
        className="px-3 h-full flex items-center hover:bg-black hover:text-white font-bold"
      >
        MacOSInspiration
      </Link>

      {/* Navigation Items */}
      <Link
        href="/"
        className="px-3 h-full flex items-center hover:bg-black hover:text-white"
      >
        Gallery
      </Link>

      <Link
        href="/submit"
        className="px-3 h-full flex items-center hover:bg-black hover:text-white"
      >
        Submit
      </Link>

      <Link
        href="/about"
        className="px-3 h-full flex items-center hover:bg-black hover:text-white"
      >
        About
      </Link>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Right side info */}
      <div className="px-3 h-full flex items-center text-[10px] text-gray-600">
        Curated macOS App UI
      </div>
    </div>
  );
}
