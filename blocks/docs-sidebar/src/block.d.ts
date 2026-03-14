// Auto-generated from config.ts
// DO NOT EDIT - This file is automatically regenerated

export type PageEntry = string | { slug: string; displayName?: Record<string, string> };

export interface BlockContent {
  logo?: string;
  logoText?: string;
  logoUrl?: string;
  sections?: Array<{
    title: string;
    pages?: Array<PageEntry>;
  }>;
  showSearch?: boolean;
  searchPlaceholder?: string;
  showVersionSelector?: boolean;
  currentVersion?: string;
  githubUrl?: string;
  slackUrl?: string;
  showLanguageSwitcher?: boolean;
}
