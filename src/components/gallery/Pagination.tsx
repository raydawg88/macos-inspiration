'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { ClassicButton } from '@/components/ui';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  baseUrl?: string;
}

export function Pagination({ currentPage, totalPages, baseUrl = '/' }: PaginationProps) {
  const searchParams = useSearchParams();

  if (totalPages <= 1) return null;

  const createPageUrl = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    if (page === 1) {
      params.delete('page');
    } else {
      params.set('page', page.toString());
    }
    const queryString = params.toString();
    return queryString ? `${baseUrl}?${queryString}` : baseUrl;
  };

  // Generate page numbers to show
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const showPages = 5; // Number of page buttons to show

    if (totalPages <= showPages + 2) {
      // Show all pages if there aren't many
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always show first page
      pages.push(1);

      // Calculate start and end of middle pages
      let start = Math.max(2, currentPage - 1);
      let end = Math.min(totalPages - 1, currentPage + 1);

      // Adjust if we're near the start
      if (currentPage <= 3) {
        end = 4;
      }

      // Adjust if we're near the end
      if (currentPage >= totalPages - 2) {
        start = totalPages - 3;
      }

      // Add ellipsis if needed
      if (start > 2) {
        pages.push('...');
      }

      // Add middle pages
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      // Add ellipsis if needed
      if (end < totalPages - 1) {
        pages.push('...');
      }

      // Always show last page
      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <div className="flex items-center justify-center gap-1 mt-6 flex-wrap">
      {/* Previous button */}
      {currentPage > 1 ? (
        <Link href={createPageUrl(currentPage - 1)}>
          <ClassicButton size="sm">← Prev</ClassicButton>
        </Link>
      ) : (
        <ClassicButton size="sm" disabled>
          ← Prev
        </ClassicButton>
      )}

      {/* Page numbers */}
      {getPageNumbers().map((page, index) => {
        if (page === '...') {
          return (
            <span
              key={`ellipsis-${index}`}
              className="px-2 text-[#666666]"
              style={{ fontFamily: "'Geneva', 'Verdana', sans-serif" }}
            >
              ...
            </span>
          );
        }

        const pageNum = page as number;
        const isCurrentPage = pageNum === currentPage;

        return (
          <Link key={pageNum} href={createPageUrl(pageNum)}>
            <ClassicButton
              size="sm"
              variant={isCurrentPage ? 'primary' : 'default'}
            >
              {pageNum}
            </ClassicButton>
          </Link>
        );
      })}

      {/* Next button */}
      {currentPage < totalPages ? (
        <Link href={createPageUrl(currentPage + 1)}>
          <ClassicButton size="sm">Next →</ClassicButton>
        </Link>
      ) : (
        <ClassicButton size="sm" disabled>
          Next →
        </ClassicButton>
      )}
    </div>
  );
}
