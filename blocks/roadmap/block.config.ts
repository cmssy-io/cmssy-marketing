import { defineBlock } from "@cmssy/cli/config";

export default defineBlock({
  name: "Roadmap",
  description: "Product roadmap with kanban-style columns showing progress",
  category: "marketing",
  tags: ["roadmap", "product", "kanban", "planning"],

  schema: {
    badge: {
      type: "singleLine",
      label: "Badge Text",
      defaultValue: "Roadmap",
      group: "header",
    },
    heading: {
      type: "singleLine",
      label: "Heading",
      defaultValue: "Product",
      group: "header",
    },
    headingHighlight: {
      type: "singleLine",
      label: "Heading Highlight",
      defaultValue: "Roadmap",
      group: "header",
    },
    description: {
      type: "multiLine",
      label: "Description",
      defaultValue:
        "Transparency is one of our core values. Here's what we're working on and what's coming next.",
      group: "header",
    },

    columns: {
      type: "repeater",
      label: "Columns",
      group: "columns",
      schema: {
        title: {
          type: "singleLine",
          label: "Column Title",
          required: true,
        },
        status: {
          type: "select",
          label: "Status Type",
          options: [
            { value: "completed", label: "Completed" },
            { value: "in_progress", label: "In Progress" },
            { value: "planned", label: "Planned" },
            { value: "considering", label: "Under Consideration" },
          ],
          defaultValue: "planned",
        },
        items: {
          type: "repeater",
          label: "Items",
          schema: {
            title: {
              type: "singleLine",
              label: "Title",
              required: true,
            },
            description: {
              type: "singleLine",
              label: "Description",
            },
            badge: {
              type: "singleLine",
              label: "Badge (optional)",
            },
          },
        },
      },
    },

    showCta: {
      type: "boolean",
      label: "Show Feedback CTA",
      defaultValue: true,
      group: "cta",
    },
    ctaTitle: {
      type: "singleLine",
      label: "CTA Title",
      defaultValue: "Shape Our Roadmap",
      group: "cta",
      showWhen: { field: "showCta", equals: true },
    },
    ctaDescription: {
      type: "multiLine",
      label: "CTA Description",
      defaultValue:
        "Have a feature request or idea? We'd love to hear from you.",
      group: "cta",
      showWhen: { field: "showCta", equals: true },
    },
    ctaButtonText: {
      type: "singleLine",
      label: "CTA Button Text",
      defaultValue: "Submit Feedback",
      group: "cta",
      showWhen: { field: "showCta", equals: true },
    },
    ctaButtonUrl: {
      type: "link",
      label: "CTA Button URL",
      defaultValue: "/contact",
      group: "cta",
      showWhen: { field: "showCta", equals: true },
    },
  },
});
