import { defineBlock, field } from "@cmssy/cli/config";

export default defineBlock({
  name: "Docs Steps",
  description: "Step-by-step guide with numbered steps and vertical timeline",
  category: "documentation",
  tags: ["docs", "steps", "guide", "tutorial", "stepper"],

  schema: {
    heading: field({
      type: "singleLine",
      label: "Heading",
      group: "header",
    }),
    description: field({
      type: "multiLine",
      label: "Description",
      group: "header",
    }),

    steps: field({
      type: "repeater",
      label: "Steps",
      group: "steps",
      schema: {
        title: field({
          type: "singleLine",
          label: "Step Title",
          required: true,
        }),
        content: field({
          type: "richText",
          label: "Step Content",
        }),
      },
    }),

    showNumbers: field({
      type: "boolean",
      label: "Show Step Numbers",
      defaultValue: true,
      group: "style",
    }),
    connectorStyle: field({
      type: "select",
      label: "Connector Style",
      options: [
        { value: "line", label: "Solid Line" },
        { value: "dashed", label: "Dashed" },
        { value: "dots", label: "Dots" },
      ],
      defaultValue: "line",
      group: "style",
    }),
  },
});
