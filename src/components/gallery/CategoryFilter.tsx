'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { ClassicButton } from '@/components/ui';
import { CATEGORIES, type AppCategory } from '@/types';

interface CategoryFilterProps {
  activeCategory?: AppCategory;
}

export function CategoryFilter({ activeCategory }: CategoryFilterProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleCategoryClick = (category: AppCategory | null) => {
    const params = new URLSearchParams(searchParams.toString());

    if (category) {
      params.set('category', category);
    } else {
      params.delete('category');
    }

    router.push(`/?${params.toString()}`);
  };

  return (
    <div
      className="bg-[#DDDDDD] border border-black p-2 mb-4"
      style={{
        boxShadow: `
          inset 1px 1px 0 #FFFFFF,
          inset -1px -1px 0 #888888
        `,
      }}
    >
      <div className="flex flex-wrap gap-1">
        <ClassicButton
          size="sm"
          variant={!activeCategory ? 'primary' : 'default'}
          onClick={() => handleCategoryClick(null)}
        >
          All
        </ClassicButton>

        {Object.entries(CATEGORIES).map(([key, { label }]) => (
          <ClassicButton
            key={key}
            size="sm"
            variant={activeCategory === key ? 'primary' : 'default'}
            onClick={() => handleCategoryClick(key as AppCategory)}
          >
            {label}
          </ClassicButton>
        ))}
      </div>
    </div>
  );
}
