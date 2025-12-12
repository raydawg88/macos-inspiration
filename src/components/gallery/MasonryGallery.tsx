'use client';

import Masonry from 'react-masonry-css';
import { AppCard } from './AppCard';
import type { AppWithImages } from '@/types';

interface MasonryGalleryProps {
  apps: AppWithImages[];
}

const breakpointColumns = {
  default: 4,
  1280: 3,
  1024: 2,
  640: 1,
};

export function MasonryGallery({ apps }: MasonryGalleryProps) {
  if (apps.length === 0) {
    return (
      <div
        className="bg-[#DDDDDD] border border-black p-8 text-center"
        style={{
          boxShadow: `
            2px 2px 0 #000000,
            inset 1px 1px 0 #FFFFFF,
            inset -1px -1px 0 #888888
          `,
        }}
      >
        <div className="mb-4">
          {/* Sad Mac Icon */}
          <svg
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="currentColor"
            className="mx-auto"
          >
            <rect x="16" y="8" width="32" height="48" fill="#DDDDDD" stroke="black" strokeWidth="2" />
            <rect x="20" y="12" width="24" height="20" fill="white" stroke="black" strokeWidth="1" />
            <circle cx="26" cy="20" r="2" fill="black" />
            <circle cx="38" cy="20" r="2" fill="black" />
            <path d="M26 26 Q32 22 38 26" stroke="black" strokeWidth="2" fill="none" />
            <rect x="24" y="36" width="16" height="4" fill="black" />
          </svg>
        </div>
        <p
          style={{
            fontFamily: "'ChicagoFLF', 'Geneva', 'Verdana', sans-serif",
            fontSize: '14px',
          }}
        >
          No apps found
        </p>
        <p
          className="text-[#666666] mt-2"
          style={{
            fontFamily: "'Geneva', 'Verdana', sans-serif",
            fontSize: '12px',
          }}
        >
          Try a different category or check back soon!
        </p>
      </div>
    );
  }

  return (
    <Masonry
      breakpointCols={breakpointColumns}
      className="flex -ml-4 w-auto"
      columnClassName="pl-4 bg-clip-padding"
    >
      {apps.map((app) => (
        <div key={app.id} className="mb-4">
          <AppCard app={app} />
        </div>
      ))}
    </Masonry>
  );
}
