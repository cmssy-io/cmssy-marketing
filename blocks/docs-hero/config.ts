import { defineBlock } from "@cmssy/cli/config";

export default defineBlock({
  name: "Docs Hero",
  description: "Documentation landing page hero with search and quick links",
  category: "documentation",
  tags: ["docs", "hero", "landing", "documentation", "search"],

  schema: {
    badge: {
      type: "singleLine",
      label: "Badge Text",
      placeholder: "e.g., Documentation",
      group: "header",
    },
    heading: {
      type: "singleLine",
      label: "Heading",
      required: true,
      defaultValue: "Documentation",
      group: "header",
    },
    description: {
      type: "multiLine",
      label: "Description",
      group: "header",
    },

    variant: {
      type: "select",
      label: "Variant",
      options: [
        { value: "default", label: "Default" },
        { value: "gradient", label: "Gradient" },
        { value: "minimal", label: "Minimal" },
      ],
      defaultValue: "default",
      group: "style",
    },

    showSearch: {
      type: "boolean",
      label: "Show Search Bar",
      defaultValue: true,
      group: "search",
    },
    searchPlaceholder: {
      type: "singleLine",
      label: "Search Placeholder",
      defaultValue: "Search documentation...",
      group: "search",
      showWhen: { field: "showSearch", equals: true },
    },

    quickLinks: {
      type: "repeater",
      label: "Quick Links",
      group: "links",
      schema: {
        icon: {
          type: "singleLine",
          label: "Icon Name",
          placeholder: "e.g., Rocket, Book, Code",
          helpText: "Lucide icon name",
        },
        title: {
          type: "singleLine",
          label: "Title",
          required: true,
        },
        description: {
          type: "singleLine",
          label: "Description",
        },
        url: {
          type: "link",
          label: "URL",
          required: true,
        },
      },
    },
  },
});
