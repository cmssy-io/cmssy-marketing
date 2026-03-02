import { defineBlock } from "@cmssy/cli/config";

export default defineBlock({
  name: "Docs Image",
  description: "Image with caption, zoom lightbox, and size options",
  category: "documentation",
  tags: ["docs", "image", "screenshot", "figure", "caption"],

  schema: {
    src: {
      type: "media",
      label: "Image",
      required: true,
      group: "image",
    },
    alt: {
      type: "singleLine",
      label: "Alt Text",
      required: true,
      group: "image",
    },
    caption: {
      type: "singleLine",
      label: "Caption",
      group: "image",
    },

    width: {
      type: "select",
      label: "Width",
      options: [
        { value: "small", label: "Small (480px)" },
        { value: "medium", label: "Medium (640px)" },
        { value: "large", label: "Large (800px)" },
        { value: "full", label: "Full Width" },
      ],
      defaultValue: "large",
      group: "style",
    },
    border: {
      type: "boolean",
      label: "Show Border",
      defaultValue: true,
      group: "style",
    },
    rounded: {
      type: "boolean",
      label: "Rounded Corners",
      defaultValue: true,
      group: "style",
    },
    shadow: {
      type: "boolean",
      label: "Shadow",
      defaultValue: true,
      group: "style",
    },
    zoomable: {
      type: "boolean",
      label: "Click to Zoom",
      defaultValue: true,
      group: "style",
    },
  },
});
