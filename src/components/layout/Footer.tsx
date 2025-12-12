import Link from 'next/link';

export function Footer() {
  return (
    <footer
      className="border-t border-black py-4 px-4 mt-auto"
      style={{
        background: 'linear-gradient(180deg, #DDDDDD 0%, #CCCCCC 100%)',
        fontFamily: "'Geneva', 'Verdana', sans-serif",
        fontSize: '11px',
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-4">
          <Link href="/" className="hover:underline">
            Gallery
          </Link>
          <Link href="/submit" className="hover:underline">
            Submit Your App
          </Link>
          <Link href="/about" className="hover:underline">
            About
          </Link>
        </div>

        <div className="text-gray-600">
          Made with nostalgia for Classic Mac OS
        </div>
      </div>
    </footer>
  );
}
