import { defineBlock } from "@cmssy/cli/config";

export default defineBlock({
  name: "Docs Callout",
  description: "Callout boxes for documentation (info, warning, tip, danger)",
  category: "documentation",
  tags: ["docs", "callout", "info", "warning", "tip", "alert"],

  schema: {
    type: {
      type: "select",
      label: "Type",
      required: true,
      options: [
        { value: "info", label: "Info (Blue)" },
        { value: "tip", label: "Tip (Green)" },
        { value: "warning", label: "Warning (Yellow)" },
        { value: "danger", label: "Danger (Red)" },
        { value: "note", label: "Note (Gray)" },
      ],
      defaultValue: "info",
    },
    title: {
      type: "singleLine",
      label: "Title",
      placeholder: "Optional title",
    },
    content: {
      type: "richText",
      label: "Content",
      required: true,
    },
  },
});
