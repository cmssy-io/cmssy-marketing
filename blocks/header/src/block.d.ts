// Auto-generated from block.config.ts
// DO NOT EDIT - This file is automatically regenerated

export interface BlockContent {
  logo?: { url: string; alt?: string; width?: number; height?: number };
  logoText?: string;
  logoSize?: "sm" | "md" | "lg";
  navigation?: Array<{
    label: string;
    url: string;
    openInNewTab?: boolean;
  }>;
  showCta?: boolean;
  ctaLabel?: string;
  ctaUrl?: string;
  ctaStyle?: "primary" | "secondary" | "outline";
  showSecondaryCta?: boolean;
  secondaryCtaLabel?: string;
  secondaryCtaUrl?: string;
  secondaryCtaStyle?: "ghost" | "outline" | "link";
  sticky?: boolean;
  transparent?: boolean;
  showAnnouncement?: boolean;
  announcementText?: string;
  announcementLink?: string;
  announcementBg?: string;
  announcementTextColor?: string;
  announcementDismissible?: boolean;
}
