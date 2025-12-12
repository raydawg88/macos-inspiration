import { Metadata } from 'next';
import Link from 'next/link';
import { ClassicWindow, ClassicButton } from '@/components/ui';
import { SubmissionForm } from '@/components/submit';

export const metadata: Metadata = {
  title: 'Submit Your App - MacOSInspiration',
  description:
    'Submit your beautifully designed macOS app to be featured in the MacOSInspiration gallery.',
};

export default function SubmitPage() {
  return (
    <div className="max-w-2xl mx-auto">
      {/* Back Button */}
      <div className="mb-4">
        <Link href="/">
          <ClassicButton size="sm">← Back to Gallery</ClassicButton>
        </Link>
      </div>

      <ClassicWindow title="Submit Your App">
        <div className="mb-4">
          <h1
            className="text-xl mb-2"
            style={{ fontFamily: "'ChicagoFLF', 'Geneva', 'Verdana', sans-serif" }}
          >
            Share Your Creation
          </h1>
          <p
            className="text-sm text-[#666666]"
            style={{ fontFamily: "'Geneva', 'Verdana', sans-serif" }}
          >
            Do you have a macOS app with beautiful UI? Submit it here and we may
            feature it in our gallery!
          </p>
        </div>

        <div className="border-t border-[#AAAAAA] my-4" />

        <SubmissionForm />
      </ClassicWindow>
    </div>
  );
}
