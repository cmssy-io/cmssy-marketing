import { defineBlock } from "@cmssy/cli/config";

export default defineBlock({
  name: "Image",
  description: "Simple image with alt text and optional caption",
  category: "content",
  tags: ["image", "photo", "screenshot", "media"],

  schema: {
    src: {
      type: "media",
      label: "Image",
      required: true,
    },
    alt: {
      type: "singleLine",
      label: "Alt Text",
      helperText: "Describe the image for accessibility",
    },
    caption: {
      type: "singleLine",
      label: "Caption",
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
      defaultValue: "full",
    },
    rounded: {
      type: "boolean",
      label: "Rounded Corners",
      defaultValue: true,
    },
  },
});
