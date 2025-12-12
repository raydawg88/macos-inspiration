'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ClassicWindow, ClassicButton } from '@/components/ui';
import type { AppWithImages } from '@/types';

interface FeaturedHeroProps {
  app: AppWithImages;
}

export function FeaturedHero({ app }: FeaturedHeroProps) {
  const [imageError, setImageError] = useState(false);
  const primaryImage = app.images?.find((img) => img.is_primary) || app.images?.[0];
  const placeholderUrl = `https://placehold.co/800x600/EEEEEE/666666?text=${encodeURIComponent(app.name)}`;

  return (
    <ClassicWindow title="Featured App of the Day" className="mb-6">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Image */}
        <div className="flex-shrink-0 w-full md:w-1/2">
          <div className="relative aspect-video bg-[#EEEEEE] border border-[#AAAAAA] overflow-hidden">
            {primaryImage || imageError ? (
              <Image
                src={imageError ? placeholderUrl : (primaryImage?.storage_path || placeholderUrl)}
                alt={primaryImage?.alt_text || app.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                unoptimized
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  className="text-[#888888] text-sm"
                  style={{ fontFamily: "'Geneva', 'Verdana', sans-serif" }}
                >
                  No Preview
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <div className="flex items-start gap-2 mb-2">
              <h2
                className="text-xl"
                style={{ fontFamily: "'ChicagoFLF', 'Geneva', 'Verdana', sans-serif" }}
              >
                {app.name}
              </h2>
              <span
                className="inline-block px-2 py-0.5 text-xs bg-[#000000] text-[#FFFFFF] border border-[#000000]"
                style={{ fontFamily: "'Geneva', 'Verdana', sans-serif" }}
              >
                {app.category.replace('-', ' ')}
              </span>
            </div>

            {app.developer_name && (
              <p
                className="text-xs text-[#666666] mb-3"
                style={{ fontFamily: "'Geneva', 'Verdana', sans-serif" }}
              >
                by {app.developer_name}
              </p>
            )}

            <p
              className="text-sm text-[#333333] mb-4 line-clamp-4"
              style={{ fontFamily: "'Geneva', 'Verdana', sans-serif" }}
            >
              {app.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <Link href={`/app/${app.slug}`}>
              <ClassicButton>View Details</ClassicButton>
            </Link>
            {app.website_url && (
              <a
                href={app.website_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ClassicButton>Visit Website</ClassicButton>
              </a>
            )}
            {app.app_store_url && (
              <a
                href={app.app_store_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ClassicButton>App Store</ClassicButton>
              </a>
            )}
          </div>
        </div>
      </div>
    </ClassicWindow>
  );
}
