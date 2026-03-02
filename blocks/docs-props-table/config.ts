import { defineBlock } from "@cmssy/cli/config";

export default defineBlock({
  name: "Docs Props Table",
  description:
    "Properties/configuration table for documenting APIs and components",
  category: "documentation",
  tags: ["docs", "props", "table", "api", "properties", "types"],

  schema: {
    title: {
      type: "singleLine",
      label: "Title",
      placeholder: "e.g., PlatformContext",
      group: "header",
    },
    description: {
      type: "multiLine",
      label: "Description",
      group: "header",
    },

    props: {
      type: "repeater",
      label: "Properties",
      group: "props",
      schema: {
        name: {
          type: "singleLine",
          label: "Name",
          required: true,
        },
        type: {
          type: "singleLine",
          label: "Type",
          required: true,
        },
        required: {
          type: "boolean",
          label: "Required",
          defaultValue: false,
        },
        defaultValue: {
          type: "singleLine",
          label: "Default Value",
        },
        description: {
          type: "singleLine",
          label: "Description",
        },
      },
    },

    showDefaults: {
      type: "boolean",
      label: "Show Default Values Column",
      defaultValue: true,
      group: "settings",
    },
    showRequired: {
      type: "boolean",
      label: "Show Required Badge",
      defaultValue: true,
      group: "settings",
    },
  },
});
