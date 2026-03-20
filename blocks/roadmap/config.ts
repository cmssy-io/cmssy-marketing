import { defineBlock, field } from "@cmssy/cli/config";

export default defineBlock({
  name: "Roadmap",
  description: "Product roadmap with kanban-style columns showing progress",
  category: "marketing",
  tags: ["roadmap", "product", "kanban", "planning"],

  schema: {
    badge: field({
      type: "singleLine",
      label: "Badge Text",
      defaultValue: "Roadmap",
      group: "header",
    }),
    heading: field({
      type: "singleLine",
      label: "Heading",
      defaultValue: "Product",
      group: "header",
    }),
    headingHighlight: field({
      type: "singleLine",
      label: "Heading Highlight",
      defaultValue: "Roadmap",
      group: "header",
    }),
    description: field({
      type: "multiLine",
      label: "Description",
      defaultValue:
        "Transparency is one of our core values. Here's what we're working on and what's coming next.",
      group: "header",
    }),

    columns: field({
      type: "repeater",
      label: "Columns",
      group: "columns",
      schema: {
        title: field({
          type: "singleLine",
          label: "Column Title",
          required: true,
        }),
        status: field({
          type: "select",
          label: "Status Type",
          options: [
            { value: "completed", label: "Completed" },
            { value: "in_progress", label: "In Progress" },
            { value: "planned", label: "Planned" },
            { value: "considering", label: "Under Consideration" },
          ],
          defaultValue: "planned",
        }),
        items: field({
          type: "repeater",
          label: "Items",
          schema: {
            title: field({
              type: "singleLine",
              label: "Title",
              required: true,
            }),
            description: field({
              type: "singleLine",
              label: "Description",
            }),
            badge: field({
              type: "singleLine",
              label: "Badge (optional)",
            }),
          },
        }),
      },
    }),

    showCta: field({
      type: "boolean",
      label: "Show Feedback CTA",
      defaultValue: true,
      group: "cta",
    }),
    ctaTitle: field({
      type: "singleLine",
      label: "CTA Title",
      defaultValue: "Shape Our Roadmap",
      group: "cta",
      showWhen: { field: "showCta", equals: true },
    }),
    ctaDescription: field({
      type: "multiLine",
      label: "CTA Description",
      defaultValue:
        "Have a feature request or idea? We'd love to hear from you.",
      group: "cta",
      showWhen: { field: "showCta", equals: true },
    }),
    ctaButtonText: field({
      type: "singleLine",
      label: "CTA Button Text",
      defaultValue: "Submit Feedback",
      group: "cta",
      showWhen: { field: "showCta", equals: true },
    }),
    ctaButtonUrl: field({
      type: "link",
      label: "CTA Button URL",
      defaultValue: "/contact",
      group: "cta",
      showWhen: { field: "showCta", equals: true },
    }),
  },
});
