import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import { getAppBySlug, getRelatedApps, getAllApps } from '@/lib/queries/apps';
import { ClassicWindow, ClassicButton } from '@/components/ui';
import { ImageGallery, AppHero, RelatedApps } from '@/components/detail';

interface AppPageProps {
  params: Promise<{ slug: string }>;
}

// Generate static paths for all apps
export function generateStaticParams() {
  const apps = getAllApps();
  return apps.map((app) => ({ slug: app.slug }));
}

export async function generateMetadata({ params }: AppPageProps): Promise<Metadata> {
  const { slug } = await params;
  const app = getAppBySlug(slug);

  if (!app) {
    return {
      title: 'App Not Found - MacOSInspiration',
    };
  }

  return {
    title: `${app.name} - MacOSInspiration`,
    description: app.short_description || app.description.slice(0, 160),
    openGraph: {
      title: app.name,
      description: app.short_description || app.description.slice(0, 160),
      type: 'website',
    },
  };
}

export default async function AppPage({ params }: AppPageProps) {
  const { slug } = await params;
  const app = getAppBySlug(slug);

  if (!app) {
    notFound();
  }

  const relatedApps = getRelatedApps(app.category, app.id, 4);

  return (
    <div className="max-w-4xl mx-auto">
      {/* Back Button */}
      <div className="mb-4">
        <Link href="/">
          <ClassicButton size="sm">← Back to Gallery</ClassicButton>
        </Link>
      </div>

      <ClassicWindow title={app.name}>
        {/* Hero Section */}
        <AppHero app={app} />

        {/* Divider */}
        <div className="border-t border-[#AAAAAA] my-4" />

        {/* Image Gallery */}
        <ImageGallery images={app.images || []} appName={app.name} />

        {/* Divider */}
        <div className="border-t border-[#AAAAAA] my-4" />

        {/* Description */}
        <div>
          <h2
            className="text-lg mb-2"
            style={{ fontFamily: "'ChicagoFLF', 'Geneva', 'Verdana', sans-serif" }}
          >
            About
          </h2>
          <p
            className="text-sm whitespace-pre-wrap"
            style={{ fontFamily: "'Geneva', 'Verdana', sans-serif" }}
          >
            {app.description}
          </p>
        </div>

        {/* Related Apps */}
        <RelatedApps apps={relatedApps} />
      </ClassicWindow>
    </div>
  );
}
