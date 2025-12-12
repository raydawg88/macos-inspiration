import { apps } from '@/data/apps';
import type { AppWithImages, AppCategory } from '@/types';

interface GetAppsOptions {
  category?: AppCategory;
  search?: string;
  limit?: number;
  offset?: number;
  featured?: boolean;
}

export function getApps(options: GetAppsOptions = {}): AppWithImages[] {
  const { category, search, limit = 50, offset = 0, featured } = options;

  let filtered = [...apps];

  // Filter by category
  if (category) {
    filtered = filtered.filter((app) => app.category === category);
  }

  // Filter by featured
  if (featured !== undefined) {
    filtered = filtered.filter((app) => app.featured === featured);
  }

  // Filter by search
  if (search) {
    const searchLower = search.toLowerCase();
    filtered = filtered.filter(
      (app) =>
        app.name.toLowerCase().includes(searchLower) ||
        app.description.toLowerCase().includes(searchLower)
    );
  }

  // Sort by created_at descending
  filtered.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());

  // Paginate
  return filtered.slice(offset, offset + limit);
}

export function getFeaturedApps(limit = 3): AppWithImages[] {
  return getApps({ featured: true, limit });
}

export function getAppBySlug(slug: string): AppWithImages | null {
  return apps.find((app) => app.slug === slug) || null;
}

export function getRelatedApps(
  category: AppCategory,
  excludeId: string,
  limit = 4
): AppWithImages[] {
  return apps
    .filter((app) => app.category === category && app.id !== excludeId)
    .slice(0, limit);
}

export function getCategories(): { category: AppCategory; count: number }[] {
  const counts: Record<string, number> = {};

  apps.forEach((app) => {
    counts[app.category] = (counts[app.category] || 0) + 1;
  });

  return Object.entries(counts).map(([category, count]) => ({
    category: category as AppCategory,
    count,
  }));
}

export function getAllApps(): AppWithImages[] {
  return apps;
}
