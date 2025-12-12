import Link from 'next/link';
import { ClassicWindow, ClassicButton } from '@/components/ui';

export default function NotFound() {
  return (
    <div className="max-w-md mx-auto mt-20">
      <ClassicWindow title="Error">
        <div className="text-center py-4">
          {/* Sad Mac Icon */}
          <svg
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="currentColor"
            className="mx-auto mb-4"
          >
            <rect x="16" y="8" width="32" height="48" fill="#DDDDDD" stroke="black" strokeWidth="2" />
            <rect x="20" y="12" width="24" height="20" fill="white" stroke="black" strokeWidth="1" />
            <circle cx="26" cy="20" r="2" fill="black" />
            <circle cx="38" cy="20" r="2" fill="black" />
            <path d="M26 26 Q32 22 38 26" stroke="black" strokeWidth="2" fill="none" />
            <rect x="24" y="36" width="16" height="4" fill="black" />
          </svg>

          <h1
            className="text-lg mb-2"
            style={{ fontFamily: "'ChicagoFLF', 'Geneva', 'Verdana', sans-serif" }}
          >
            Page Not Found
          </h1>

          <p
            className="text-sm text-[#666666] mb-4"
            style={{ fontFamily: "'Geneva', 'Verdana', sans-serif" }}
          >
            The requested page could not be found.
            <br />
            It may have been moved or deleted.
          </p>

          <Link href="/">
            <ClassicButton variant="primary">Return to Gallery</ClassicButton>
          </Link>
        </div>
      </ClassicWindow>
    </div>
  );
}
