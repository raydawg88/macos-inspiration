import { Metadata } from 'next';
import Link from 'next/link';
import { ClassicWindow, ClassicButton } from '@/components/ui';

export const metadata: Metadata = {
  title: 'About - MacOSInspiration',
  description:
    'About MacOSInspiration - A curated gallery of beautifully designed macOS desktop applications.',
};

export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto">
      {/* Back Button */}
      <div className="mb-4">
        <Link href="/">
          <ClassicButton size="sm">← Back to Gallery</ClassicButton>
        </Link>
      </div>

      <ClassicWindow title="About MacOSInspiration">
        <div className="space-y-6">
          {/* Happy Mac */}
          <div className="text-center">
            <svg
              width="48"
              height="48"
              viewBox="0 0 64 64"
              fill="currentColor"
              className="mx-auto mb-4"
            >
              <rect x="16" y="8" width="32" height="48" fill="#DDDDDD" stroke="black" strokeWidth="2" />
              <rect x="20" y="12" width="24" height="20" fill="white" stroke="black" strokeWidth="1" />
              <circle cx="26" cy="20" r="2" fill="black" />
              <circle cx="38" cy="20" r="2" fill="black" />
              <path d="M26 26 Q32 30 38 26" stroke="black" strokeWidth="2" fill="none" />
              <rect x="24" y="36" width="16" height="4" fill="black" />
            </svg>
          </div>

          <div>
            <h1
              className="text-xl mb-2"
              style={{ fontFamily: "'ChicagoFLF', 'Geneva', 'Verdana', sans-serif" }}
            >
              What is MacOSInspiration?
            </h1>
            <p
              className="text-sm text-[#333333]"
              style={{ fontFamily: "'Geneva', 'Verdana', sans-serif" }}
            >
              MacOSInspiration is a curated gallery showcasing beautifully designed
              macOS desktop applications. While there are many galleries for web and
              mobile app UI, there wasn&apos;t a dedicated space for the Mac desktop app
              ecosystem. We created this to fill that gap.
            </p>
          </div>

          <div className="border-t border-[#AAAAAA]" />

          <div>
            <h2
              className="text-lg mb-2"
              style={{ fontFamily: "'ChicagoFLF', 'Geneva', 'Verdana', sans-serif" }}
            >
              Why Classic Mac OS Design?
            </h2>
            <p
              className="text-sm text-[#333333]"
              style={{ fontFamily: "'Geneva', 'Verdana', sans-serif" }}
            >
              The classic Mac OS (System 7 through Mac OS 9) represents a golden era
              of thoughtful, human-centered interface design. Susan Kare&apos;s iconic
              work at Apple during this period influenced a generation of designers.
              This site pays homage to that legacy while celebrating modern macOS
              app design.
            </p>
          </div>

          <div className="border-t border-[#AAAAAA]" />

          <div>
            <h2
              className="text-lg mb-2"
              style={{ fontFamily: "'ChicagoFLF', 'Geneva', 'Verdana', sans-serif" }}
            >
              Submit Your App
            </h2>
            <p
              className="text-sm text-[#333333] mb-3"
              style={{ fontFamily: "'Geneva', 'Verdana', sans-serif" }}
            >
              Have a macOS app with beautiful UI? We&apos;d love to see it! Submissions
              are reviewed manually, and we look for apps with thoughtful, polished
              interfaces that stand out.
            </p>
            <Link href="/submit">
              <ClassicButton variant="primary">Submit Your App</ClassicButton>
            </Link>
          </div>

          <div className="border-t border-[#AAAAAA]" />

          <div
            className="text-xs text-[#666666] text-center"
            style={{ fontFamily: "'Geneva', 'Verdana', sans-serif" }}
          >
            Made with nostalgia for the classic Mac.
            <br />
            Chicago font by Robin Casady (public domain).
          </div>
        </div>
      </ClassicWindow>
    </div>
  );
}
