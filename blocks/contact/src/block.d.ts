// Auto-generated from config.ts
// DO NOT EDIT - This file is automatically regenerated

export interface BlockContent {
  badgeText?: string;
  heading?: string;
  headingHighlight?: string;
  description?: string;
  infoCards?: Array<{
    icon?: "mail" | "clock" | "map-pin" | "phone" | "chat" | "globe";
    title?: string;
    description?: string;
  }>;
  showQuote?: boolean;
  quoteText?: string;
  quoteAuthor?: string;
  nameLabel?: string;
  emailLabel?: string;
  messageLabel?: string;
  /** Select which form definition to use for submissions and notifications */
  formId?: string;
  submitButtonText?: string;
  submitLoadingText?: string;
  successHeading?: string;
  errorMessage?: string;
  successMessage?: string;
}
