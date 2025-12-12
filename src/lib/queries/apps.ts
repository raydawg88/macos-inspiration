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

// Get a single daily featured app that rotates based on the current date
export function getDailyFeaturedApp(): AppWithImages | null {
  const featuredApps = apps.filter((app) => app.featured);
  if (featuredApps.length === 0) return null;

  // Use the day of the year to rotate through featured apps
  const now = new Date();
  const startOfYear = new Date(now.getFullYear(), 0, 0);
  const diff = now.getTime() - startOfYear.getTime();
  const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24));

  const index = dayOfYear % featuredApps.length;
  return featuredApps[index];
}

export function getTotalAppsCount(options: { category?: AppCategory; search?: string } = {}): number {
  const { category, search } = options;

  let filtered = [...apps];

  if (category) {
    filtered = filtered.filter((app) => app.category === category);
  }

  if (search) {
    const searchLower = search.toLowerCase();
    filtered = filtered.filter(
      (app) =>
        app.name.toLowerCase().includes(searchLower) ||
        app.description.toLowerCase().includes(searchLower)
    );
  }

  return filtered.length;
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
