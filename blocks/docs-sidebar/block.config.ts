import { defineBlock } from "cmssy-cli/config";

export default defineBlock({
  name: "Docs Sidebar",
  description: "Documentation sidebar navigation with categories and nested pages",
  category: "documentation",
  tags: ["docs", "navigation", "sidebar", "documentation"],

  interactive: true,
  layoutSlot: "header",

  schema: {
    logo: {
      type: "media",
      label: "Logo",
      group: "branding",
    },
    logoText: {
      type: "singleLine",
      label: "Logo Text",
      defaultValue: "Docs",
      group: "branding",
    },
    logoUrl: {
      type: "link",
      label: "Logo Link",
      defaultValue: "/",
      group: "branding",
    },

    sections: {
      type: "repeater",
      label: "Navigation Sections",
      group: "navigation",
      schema: {
        title: {
          type: "singleLine",
          label: "Section Title",
          required: true,
        },
        items: {
          type: "repeater",
          label: "Pages",
          schema: {
            label: {
              type: "singleLine",
              label: "Page Label",
              required: true,
            },
            url: {
              type: "link",
              label: "Page URL",
              required: true,
            },
            isNew: {
              type: "boolean",
              label: "Show 'New' Badge",
              defaultValue: false,
            },
          },
        },
      },
    },

    showSearch: {
      type: "boolean",
      label: "Show Search",
      defaultValue: true,
      group: "features",
    },
    searchPlaceholder: {
      type: "singleLine",
      label: "Search Placeholder",
      defaultValue: "Search docs...",
      group: "features",
      showWhen: { field: "showSearch", equals: true },
    },

    showVersionSelector: {
      type: "boolean",
      label: "Show Version Selector",
      defaultValue: false,
      group: "features",
    },
    currentVersion: {
      type: "singleLine",
      label: "Current Version",
      defaultValue: "v1.0",
      group: "features",
      showWhen: { field: "showVersionSelector", equals: true },
    },

    githubUrl: {
      type: "link",
      label: "GitHub URL",
      group: "links",
    },
    discordUrl: {
      type: "link",
      label: "Discord URL",
      group: "links",
    },
  },

  pricing: { licenseType: "free" },
});
