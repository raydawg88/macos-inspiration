import type { Metadata } from 'next';
import { MenuBar } from '@/components/layout/MenuBar';
import { Footer } from '@/components/layout/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'MacOSInspiration - Beautiful macOS App UI Gallery',
  description:
    'Discover beautifully designed macOS desktop applications. A curated gallery of inspiring Mac app interfaces.',
  keywords: [
    'macOS apps',
    'Mac app design',
    'UI inspiration',
    'macOS UI',
    'Mac app gallery',
    'desktop app design',
    'Apple design',
  ],
  openGraph: {
    title: 'MacOSInspiration',
    description: 'Beautiful macOS App UI Gallery',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MacOSInspiration',
    description: 'Beautiful macOS App UI Gallery',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        {/* Classic Mac Desktop Pattern Background */}
        <div
          className="fixed inset-0 -z-10"
          style={{
            backgroundColor: '#CCCCCC',
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='4' height='4' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='0' y='0' width='2' height='2' fill='%23BBBBBB'/%3E%3Crect x='2' y='2' width='2' height='2' fill='%23BBBBBB'/%3E%3C/svg%3E")`,
            backgroundSize: '4px 4px',
          }}
        />

        {/* Menu Bar */}
        <MenuBar />

        {/* Main Content */}
        <main className="flex-1 p-4">{children}</main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
