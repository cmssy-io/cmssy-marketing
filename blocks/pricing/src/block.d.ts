// Auto-generated from block.config.ts
// DO NOT EDIT - This file is automatically regenerated

export interface BlockContent {
  heading: string;
  headingHighlight?: string;
  description?: string;
  trialNotice?: string;
  plans?: Array<{
    name: string;
    description?: string;
    price: string;
    popular?: boolean;
    period?: string;
    features?: Array<{
      feature: string;
    }>;
    cta: string;
    href: string;
  }>;
}
