'use client';

import { useState } from 'react';
import Image from 'next/image';
import type { AppImage } from '@/types';

interface ImageGalleryProps {
  images: AppImage[];
  appName: string;
}

export function ImageGallery({ images, appName }: ImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set());

  const sortedImages = [...images].sort((a, b) => {
    if (a.is_primary && !b.is_primary) return -1;
    if (!a.is_primary && b.is_primary) return 1;
    return a.sort_order - b.sort_order;
  });

  const selectedImage = sortedImages[selectedIndex];

  // Generate placeholder URL for an image
  const getPlaceholderUrl = (index: number) =>
    `https://placehold.co/800x600/EEEEEE/666666?text=${encodeURIComponent(appName)}+${index + 1}`;

  // Get image src with fallback
  const getImageSrc = (image: AppImage, index: number) =>
    imageErrors.has(image.id) ? getPlaceholderUrl(index) : image.storage_path;

  // Handle image error
  const handleImageError = (imageId: string) => {
    setImageErrors((prev) => new Set(prev).add(imageId));
  };

  if (sortedImages.length === 0) {
    return (
      <div
        className="aspect-video bg-[#EEEEEE] border border-black flex items-center justify-center"
        style={{
          boxShadow: 'inset 1px 1px 0 #888888, inset -1px -1px 0 #FFFFFF',
        }}
      >
        <span className="text-[#888888]">No screenshots available</span>
      </div>
    );
  }

  return (
    <>
      {/* Main Image */}
      <div
        className="mb-3 cursor-pointer"
        onClick={() => setIsLightboxOpen(true)}
      >
        <div
          className="relative aspect-video bg-[#EEEEEE] border border-black overflow-hidden"
          style={{
            boxShadow: 'inset 1px 1px 0 #888888, inset -1px -1px 0 #FFFFFF',
          }}
        >
          <Image
            src={getImageSrc(selectedImage, selectedIndex)}
            alt={selectedImage.alt_text || `${appName} screenshot`}
            fill
            className="object-contain"
            priority
            unoptimized
            onError={() => handleImageError(selectedImage.id)}
          />
        </div>
      </div>

      {/* Thumbnails */}
      {sortedImages.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-2">
          {sortedImages.map((image, index) => (
            <button
              key={image.id}
              onClick={() => setSelectedIndex(index)}
              className={`flex-shrink-0 relative w-20 h-14 border overflow-hidden ${
                index === selectedIndex
                  ? 'border-[#0066CC] border-2'
                  : 'border-black'
              }`}
              style={{
                boxShadow:
                  index === selectedIndex
                    ? 'none'
                    : 'inset 1px 1px 0 #888888, inset -1px -1px 0 #FFFFFF',
              }}
            >
              <Image
                src={getImageSrc(image, index)}
                alt={image.alt_text || `${appName} thumbnail ${index + 1}`}
                fill
                className="object-cover"
                unoptimized
                onError={() => handleImageError(image.id)}
              />
            </button>
          ))}
        </div>
      )}

      {/* Lightbox */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setIsLightboxOpen(false)}
        >
          <div
            className="relative max-w-5xl w-full max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="absolute -top-10 right-0 text-white hover:text-[#AAAAAA] text-sm"
              style={{ fontFamily: "'ChicagoFLF', 'Geneva', 'Verdana', sans-serif" }}
            >
              Close [X]
            </button>

            <div className="relative aspect-video bg-black">
              <Image
                src={getImageSrc(selectedImage, selectedIndex)}
                alt={selectedImage.alt_text || `${appName} screenshot`}
                fill
                className="object-contain"
                unoptimized
                onError={() => handleImageError(selectedImage.id)}
              />
            </div>

            {/* Navigation */}
            {sortedImages.length > 1 && (
              <div className="flex justify-center gap-4 mt-4">
                <button
                  onClick={() =>
                    setSelectedIndex((i) =>
                      i === 0 ? sortedImages.length - 1 : i - 1
                    )
                  }
                  className="text-white hover:text-[#AAAAAA] px-4 py-2 bg-[#333333] border border-white"
                  style={{ fontFamily: "'ChicagoFLF', 'Geneva', 'Verdana', sans-serif" }}
                >
                  Previous
                </button>
                <span className="text-white self-center">
                  {selectedIndex + 1} / {sortedImages.length}
                </span>
                <button
                  onClick={() =>
                    setSelectedIndex((i) =>
                      i === sortedImages.length - 1 ? 0 : i + 1
                    )
                  }
                  className="text-white hover:text-[#AAAAAA] px-4 py-2 bg-[#333333] border border-white"
                  style={{ fontFamily: "'ChicagoFLF', 'Geneva', 'Verdana', sans-serif" }}
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
