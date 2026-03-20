import { defineBlock, field } from "@cmssy/cli/config";

export default defineBlock({
  name: "Docs Props Table",
  description:
    "Properties/configuration table for documenting APIs and components",
  category: "documentation",
  tags: ["docs", "props", "table", "api", "properties", "types"],

  schema: {
    title: field({
      type: "singleLine",
      label: "Title",
      placeholder: "e.g., PlatformContext",
      group: "header",
    }),
    description: field({
      type: "multiLine",
      label: "Description",
      group: "header",
    }),

    props: field({
      type: "repeater",
      label: "Properties",
      group: "props",
      schema: {
        name: field({
          type: "singleLine",
          label: "Name",
          required: true,
        }),
        type: field({
          type: "singleLine",
          label: "Type",
          required: true,
        }),
        required: field({
          type: "boolean",
          label: "Required",
          defaultValue: false,
        }),
        defaultValue: field({
          type: "singleLine",
          label: "Default Value",
        }),
        description: field({
          type: "singleLine",
          label: "Description",
        }),
      },
    }),

    showDefaults: field({
      type: "boolean",
      label: "Show Default Values Column",
      defaultValue: true,
      group: "settings",
    }),
    showRequired: field({
      type: "boolean",
      label: "Show Required Badge",
      defaultValue: true,
      group: "settings",
    }),
  },
});
