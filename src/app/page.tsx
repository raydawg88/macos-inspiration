import { Suspense } from 'react';
import { getApps, getFeaturedApps } from '@/lib/queries/apps';
import { MasonryGallery, CategoryFilter } from '@/components/gallery';
import { ClassicWindow } from '@/components/ui';
import type { AppCategory } from '@/types';

interface HomePageProps {
  searchParams: Promise<{ category?: string; search?: string }>;
}

export default async function HomePage({ searchParams }: HomePageProps) {
  const params = await searchParams;
  const category = params.category as AppCategory | undefined;
  const search = params.search;

  const apps = getApps({ category, search, limit: 50 });
  const featuredApps = !category && !search ? getFeaturedApps(3) : [];

  return (
    <div className="max-w-7xl mx-auto">
      {/* Hero Section */}
      <ClassicWindow title="Welcome to MacOSInspiration" className="mb-6">
        <div className="text-center py-4">
          <h1
            className="text-2xl mb-2"
            style={{ fontFamily: "'ChicagoFLF', 'Geneva', 'Verdana', sans-serif" }}
          >
            Beautiful macOS App UI
          </h1>
          <p
            className="text-sm text-[#666666]"
            style={{ fontFamily: "'Geneva', 'Verdana', sans-serif" }}
          >
            A curated gallery of the most beautifully designed macOS desktop
            applications. Find inspiration for your next project.
          </p>
        </div>
      </ClassicWindow>

      {/* Featured Apps */}
      {featuredApps.length > 0 && (
        <ClassicWindow title="Featured Apps" className="mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {featuredApps.map((app) => (
              <div
                key={app.id}
                className="bg-[#EEEEEE] border border-[#AAAAAA] p-2"
              >
                <h3
                  className="text-sm font-bold mb-1"
                  style={{ fontFamily: "'ChicagoFLF', 'Geneva', 'Verdana', sans-serif" }}
                >
                  {app.name}
                </h3>
                <p
                  className="text-xs text-[#666666] line-clamp-2"
                  style={{ fontFamily: "'Geneva', 'Verdana', sans-serif" }}
                >
                  {app.short_description || app.description}
                </p>
              </div>
            ))}
          </div>
        </ClassicWindow>
      )}

      {/* Category Filter */}
      <Suspense fallback={<div className="h-12 bg-[#DDDDDD] border border-black mb-4 animate-pulse" />}>
        <CategoryFilter activeCategory={category} />
      </Suspense>

      {/* Gallery */}
      <ClassicWindow
        title={category ? `${category.replace('-', ' ')} Apps` : 'All Apps'}
        showCloseBox={false}
      >
        <MasonryGallery apps={apps} />
      </ClassicWindow>
    </div>
  );
}
