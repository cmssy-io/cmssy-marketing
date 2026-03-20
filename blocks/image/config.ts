import { defineBlock, field } from "@cmssy/cli/config";

export default defineBlock({
  name: "Image",
  description: "Simple image with alt text and optional caption",
  category: "content",
  tags: ["image", "photo", "screenshot", "media"],

  schema: {
    src: field({
      type: "media",
      label: "Image",
      required: true,
    }),
    alt: field({
      type: "singleLine",
      label: "Alt Text",
      helperText: "Describe the image for accessibility",
    }),
    caption: field({
      type: "singleLine",
      label: "Caption",
    }),
    width: field({
      type: "select",
      label: "Width",
      options: [
        { value: "small", label: "Small (480px)" },
        { value: "medium", label: "Medium (640px)" },
        { value: "large", label: "Large (800px)" },
        { value: "full", label: "Full Width" },
      ],
      defaultValue: "full",
    }),
    rounded: field({
      type: "boolean",
      label: "Rounded Corners",
      defaultValue: true,
    }),
  },
});
