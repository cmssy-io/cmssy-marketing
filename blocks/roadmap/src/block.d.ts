// Auto-generated from block.config.ts
// DO NOT EDIT - This file is automatically regenerated

export interface BlockContent {
  badge?: string;
  heading?: string;
  headingHighlight?: string;
  description?: string;
  columns?: Array<{
    title: string;
    status?: "completed" | "in_progress" | "planned" | "considering";
    items?: Array<{
      title: string;
      description?: string;
      badge?: string;
    }>;
  }>;
  showCta?: boolean;
  ctaTitle?: string;
  ctaDescription?: string;
  ctaButtonText?: string;
  ctaButtonUrl?: string;
}
