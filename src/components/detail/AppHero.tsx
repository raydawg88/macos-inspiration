import Link from 'next/link';
import { ClassicButton } from '@/components/ui';
import { CATEGORIES, type AppWithImages } from '@/types';

interface AppHeroProps {
  app: AppWithImages;
}

export function AppHero({ app }: AppHeroProps) {
  const categoryLabel = CATEGORIES[app.category]?.label || app.category;

  return (
    <div className="flex flex-col md:flex-row gap-4 items-start mb-4">
      {/* App Icon Placeholder */}
      <div
        className="w-16 h-16 bg-[#EEEEEE] border border-black flex-shrink-0 flex items-center justify-center"
        style={{
          boxShadow: 'inset 1px 1px 0 #888888, inset -1px -1px 0 #FFFFFF',
        }}
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="#666666"
        >
          <rect x="4" y="2" width="24" height="28" rx="2" fill="#CCCCCC" stroke="#666666" strokeWidth="1" />
          <rect x="8" y="6" width="16" height="12" fill="white" stroke="#666666" strokeWidth="1" />
          <rect x="8" y="22" width="16" height="4" fill="#666666" />
        </svg>
      </div>

      {/* App Info */}
      <div className="flex-1">
        <h1
          className="text-xl mb-1"
          style={{ fontFamily: "'ChicagoFLF', 'Geneva', 'Verdana', sans-serif" }}
        >
          {app.name}
        </h1>

        {app.developer_name && (
          <p
            className="text-sm text-[#666666] mb-2"
            style={{ fontFamily: "'Geneva', 'Verdana', sans-serif" }}
          >
            by {app.developer_name}
          </p>
        )}

        <div className="flex flex-wrap gap-2 mb-3">
          <Link
            href={`/?category=${app.category}`}
            className="inline-block px-2 py-0.5 bg-[#EEEEEE] border border-[#AAAAAA] text-xs hover:bg-[#DDDDDD]"
            style={{ fontFamily: "'Geneva', 'Verdana', sans-serif" }}
          >
            {categoryLabel}
          </Link>

          {app.featured && (
            <span className="inline-block px-2 py-0.5 bg-[#0066CC] text-white border border-[#004499] text-xs">
              Featured
            </span>
          )}
        </div>

        <div className="flex flex-wrap gap-2">
          {app.website_url && (
            <a href={app.website_url} target="_blank" rel="noopener noreferrer">
              <ClassicButton>Visit Website</ClassicButton>
            </a>
          )}

          {app.app_store_url && (
            <a href={app.app_store_url} target="_blank" rel="noopener noreferrer">
              <ClassicButton variant="primary">App Store</ClassicButton>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
