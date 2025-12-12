'use client';

import Link from 'next/link';
import Image from 'next/image';
import type { AppWithImages } from '@/types';
import { CATEGORIES } from '@/types';

interface AppCardProps {
  app: AppWithImages;
}

export function AppCard({ app }: AppCardProps) {
  const primaryImage = app.images?.find((img) => img.is_primary) || app.images?.[0];
  const categoryLabel = CATEGORIES[app.category]?.label || app.category;

  return (
    <Link href={`/app/${app.slug}`} className="block group">
      <div
        className="bg-[#DDDDDD] border border-black transition-transform group-hover:translate-y-[-2px]"
        style={{
          boxShadow: `
            2px 2px 0 #000000,
            inset 1px 1px 0 #FFFFFF,
            inset -1px -1px 0 #888888
          `,
        }}
      >
        {/* Window Title Bar */}
        <div
          className="h-5 flex items-center px-1 relative border-b border-black"
          style={{
            background: 'linear-gradient(180deg, #FFFFFF 0%, #CCCCCC 100%)',
          }}
        >
          {/* Close Box */}
          <div
            className="w-[13px] h-[11px] bg-[#DDDDDD] border border-black relative z-10 flex-shrink-0"
            style={{
              boxShadow: 'inset 1px 1px 0 #FFFFFF, inset -1px -1px 0 #888888',
            }}
          />

          {/* Horizontal Stripes */}
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

          {/* Title */}
          <span
            className="relative z-10 flex-1 text-center text-xs px-2 truncate"
            style={{
              fontFamily: "'ChicagoFLF', 'Geneva', 'Verdana', sans-serif",
              background: 'linear-gradient(180deg, #FFFFFF 0%, #CCCCCC 100%)',
            }}
          >
            {app.name}
          </span>

          <div className="w-[13px] flex-shrink-0" />
        </div>

        {/* Screenshot */}
        <div className="bg-white p-2">
          <div className="relative aspect-[4/3] bg-[#EEEEEE] border border-black overflow-hidden">
            {primaryImage ? (
              <Image
                src={primaryImage.storage_path}
                alt={primaryImage.alt_text || `${app.name} screenshot`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-[#888888]">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="currentColor"
                >
                  <path d="M12 8h24v4H12zM8 12h4v24H8zM36 12h4v24h-4zM12 36h24v4H12zM16 16h16v16H16z" />
                </svg>
              </div>
            )}
          </div>
        </div>

        {/* Info Bar */}
        <div
          className="px-2 py-1.5 border-t border-black flex items-center justify-between"
          style={{
            background: 'linear-gradient(180deg, #EEEEEE 0%, #DDDDDD 100%)',
            fontFamily: "'Geneva', 'Verdana', sans-serif",
            fontSize: '10px',
          }}
        >
          <span className="text-[#666666]">{categoryLabel}</span>
          {app.featured && (
            <span className="text-[#0066CC] font-bold">Featured</span>
          )}
        </div>
      </div>
    </Link>
  );
}
