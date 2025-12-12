// App categories
export type AppCategory =
  | 'productivity'
  | 'developer-tools'
  | 'design'
  | 'utilities'
  | 'media'
  | 'communication'
  | 'finance'
  | 'education'
  | 'lifestyle'
  | 'games'
  | 'other';

// Submission status
export type SubmissionStatus = 'pending' | 'approved' | 'rejected';

// App image
export interface AppImage {
  id: string;
  app_id: string;
  storage_path: string;
  alt_text: string | null;
  is_primary: boolean;
  sort_order: number;
  created_at: string;
}

// App with images
export interface App {
  id: string;
  name: string;
  slug: string;
  description: string;
  short_description: string | null;
  website_url: string | null;
  app_store_url: string | null;
  developer_name: string | null;
  category: AppCategory;
  featured: boolean;
  created_at: string;
}

export interface AppWithImages extends App {
  images: AppImage[];
}

// Submission
export interface Submission {
  id: string;
  submitter_name: string;
  submitter_email: string;
  app_name: string;
  app_url: string;
  description: string;
  status: SubmissionStatus;
  created_at: string;
}

// Submission image
export interface SubmissionImage {
  id: string;
  submission_id: string;
  storage_path: string;
  created_at: string;
}

// Category display info
export const CATEGORIES: Record<AppCategory, { label: string; icon?: string }> = {
  'productivity': { label: 'Productivity' },
  'developer-tools': { label: 'Developer Tools' },
  'design': { label: 'Design' },
  'utilities': { label: 'Utilities' },
  'media': { label: 'Media' },
  'communication': { label: 'Communication' },
  'finance': { label: 'Finance' },
  'education': { label: 'Education' },
  'lifestyle': { label: 'Lifestyle' },
  'games': { label: 'Games' },
  'other': { label: 'Other' },
};
