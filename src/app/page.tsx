import { Suspense } from 'react';
import { getApps, getDailyFeaturedApp, getTotalAppsCount } from '@/lib/queries/apps';
import { MasonryGallery, CategoryFilter, FeaturedHero, Pagination } from '@/components/gallery';
import { ClassicWindow } from '@/components/ui';
import type { AppCategory } from '@/types';

const APPS_PER_PAGE = 24;

interface HomePageProps {
  searchParams: Promise<{ category?: string; search?: string; page?: string }>;
}

export default async function HomePage({ searchParams }: HomePageProps) {
  const params = await searchParams;
  const category = params.category as AppCategory | undefined;
  const search = params.search;
  const page = parseInt(params.page || '1', 10);
  const offset = (page - 1) * APPS_PER_PAGE;

  const apps = getApps({ category, search, limit: APPS_PER_PAGE, offset });
  const totalApps = getTotalAppsCount({ category, search });
  const totalPages = Math.ceil(totalApps / APPS_PER_PAGE);
  const dailyFeatured = !category && !search && page === 1 ? getDailyFeaturedApp() : null;

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
            A curated gallery of {totalApps}+ beautifully designed macOS desktop
            applications. Find inspiration for your next project.
          </p>
        </div>
      </ClassicWindow>

      {/* Featured App of the Day */}
      {dailyFeatured && <FeaturedHero app={dailyFeatured} />}

      {/* Category Filter */}
      <Suspense fallback={<div className="h-12 bg-[#DDDDDD] border border-black mb-4 animate-pulse" />}>
        <CategoryFilter activeCategory={category} />
      </Suspense>

      {/* Gallery */}
      <ClassicWindow
        title={
          category
            ? `${category.replace('-', ' ')} Apps (${totalApps})`
            : search
              ? `Search: "${search}" (${totalApps} results)`
              : `All Apps (${totalApps})`
        }
        showCloseBox={false}
      >
        {apps.length > 0 ? (
          <>
            <MasonryGallery apps={apps} />
            <Suspense fallback={null}>
              <Pagination currentPage={page} totalPages={totalPages} />
            </Suspense>
          </>
        ) : (
          <div className="text-center py-8">
            <p
              className="text-[#666666]"
              style={{ fontFamily: "'Geneva', 'Verdana', sans-serif" }}
            >
              No apps found. Try a different search or category.
            </p>
          </div>
        )}
      </ClassicWindow>
    </div>
  );
}
