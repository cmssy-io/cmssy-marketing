// Auto-generated from block.config.ts
// DO NOT EDIT - This file is automatically regenerated

export interface BlockContent {
  badge?: string;
  heading?: string;
  headingHighlight?: string;
  description?: string;
  entries?: Array<{
    version: string;
    date: string;
    title: string;
    type?: "feature" | "improvement" | "bugfix";
    changes?: Array<{
      text: string;
    }>;
  }>;
  showSubscribe?: boolean;
  subscribeText?: string;
  subscribeButtonText?: string;
  subscribeButtonUrl?: string;
}
