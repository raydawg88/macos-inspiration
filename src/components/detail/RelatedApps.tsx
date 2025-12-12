import Link from 'next/link';
import type { AppWithImages } from '@/types';

interface RelatedAppsProps {
  apps: AppWithImages[];
}

export function RelatedApps({ apps }: RelatedAppsProps) {
  if (apps.length === 0) return null;

  return (
    <div className="mt-6">
      <h2
        className="text-lg mb-3 pb-2 border-b border-[#AAAAAA]"
        style={{ fontFamily: "'ChicagoFLF', 'Geneva', 'Verdana', sans-serif" }}
      >
        Related Apps
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {apps.map((app) => (
          <Link
            key={app.id}
            href={`/app/${app.slug}`}
            className="block bg-[#EEEEEE] border border-[#AAAAAA] p-2 hover:bg-[#DDDDDD] transition-colors"
          >
            <h3
              className="text-sm font-bold truncate"
              style={{ fontFamily: "'ChicagoFLF', 'Geneva', 'Verdana', sans-serif" }}
            >
              {app.name}
            </h3>
            <p
              className="text-xs text-[#666666] line-clamp-2 mt-1"
              style={{ fontFamily: "'Geneva', 'Verdana', sans-serif" }}
            >
              {app.short_description || app.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
