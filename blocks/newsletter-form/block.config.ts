import { defineBlock } from "cmssy-cli/config";

export default defineBlock({
  name: "Newsletter Form",
  description: "Simple newsletter signup form for email marketing",
  category: "marketing",
  tags: ["newsletter", "form", "email", "marketing"],

  schema: {
    // Header section
    heading: {
      type: "singleLine",
      label: "Heading",
      defaultValue: "Stay in the loop",
    },
    description: {
      type: "multiLine",
      label: "Description",
      defaultValue:
        "Get the latest updates, tips, and exclusive content delivered straight to your inbox.",
    },

    // Form settings
    showNameField: {
      type: "boolean",
      label: "Show Name Field",
      defaultValue: false,
      group: "Form Settings",
    },
    namePlaceholder: {
      type: "singleLine",
      label: "Name Placeholder",
      defaultValue: "Your name",
      group: "Form Settings",
    },
    emailPlaceholder: {
      type: "singleLine",
      label: "Email Placeholder",
      defaultValue: "you@example.com",
      group: "Form Settings",
    },
    submitButtonText: {
      type: "singleLine",
      label: "Submit Button Text",
      defaultValue: "Subscribe",
      group: "Form Settings",
    },

    // Tags for segmentation
    tags: {
      type: "repeater",
      label: "Subscriber Tags",
      group: "Marketing",
      schema: {
        tag: {
          type: "singleLine",
          label: "Tag",
          placeholder: "e.g., newsletter, blog-updates",
        },
      },
    },

    // Messages
    successMessage: {
      type: "multiLine",
      label: "Success Message",
      defaultValue:
        "Thanks for subscribing! Check your inbox for a confirmation email.",
      group: "Messages",
    },
    errorMessage: {
      type: "multiLine",
      label: "Error Message",
      defaultValue: "Something went wrong. Please try again.",
      group: "Messages",
    },

    // Styling
    variant: {
      type: "select",
      label: "Variant",
      options: [
        { value: "inline", label: "Inline (horizontal)" },
        { value: "stacked", label: "Stacked (vertical)" },
        { value: "card", label: "Card with background" },
      ],
      defaultValue: "inline",
      group: "Styling",
    },
    showPrivacyNote: {
      type: "boolean",
      label: "Show Privacy Note",
      defaultValue: true,
      group: "Styling",
    },
    privacyNote: {
      type: "singleLine",
      label: "Privacy Note Text",
      defaultValue: "We respect your privacy. Unsubscribe at any time.",
      group: "Styling",
    },
  },

  pricing: { licenseType: "free" },
});
