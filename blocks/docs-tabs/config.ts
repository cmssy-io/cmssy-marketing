import { defineBlock } from "@cmssy/cli/config";

export default defineBlock({
  name: "Docs Tabs",
  description: "Tabbed content for code variants and documentation sections",
  category: "documentation",
  tags: ["docs", "tabs", "code", "variants", "npm", "yarn"],

  schema: {
    tabs: {
      type: "repeater",
      label: "Tabs",
      group: "tabs",
      schema: {
        label: {
          type: "singleLine",
          label: "Tab Label",
          required: true,
        },
        icon: {
          type: "singleLine",
          label: "Icon Name",
          placeholder: "e.g., Terminal, Package",
          helpText: "Lucide icon name (optional)",
        },
        content: {
          type: "richText",
          label: "Tab Content",
          required: true,
        },
      },
    },

    defaultTab: {
      type: "numeric",
      label: "Default Tab Index",
      defaultValue: 0,
      group: "settings",
    },
    variant: {
      type: "select",
      label: "Tab Style",
      options: [
        { value: "underline", label: "Underline" },
        { value: "pills", label: "Pills" },
        { value: "bordered", label: "Bordered" },
      ],
      defaultValue: "underline",
      group: "settings",
    },
  },
});
