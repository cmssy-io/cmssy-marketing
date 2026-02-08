import { defineBlock } from "@cmssy/cli/config";

export default defineBlock({
  name: "Features",
  description: "",
  category: "marketing",
  tags: ["marketing", "features"],

  schema: {
    heading: {
      type: "singleLine",
      label: "Heading",
      required: true,
      defaultValue: "Heading",
    },
    headingHighlight: {
      type: "singleLine",
      label: "Heading Highlight",
      defaultValue: "Highlight",
    },
    description: {
      type: "multiLine",
      label: "Description",
      placeholder: "Enter description",
      defaultValue: "Description",
    },
    features: {
      type: "repeater",
      label: "Features",
      schema: {
        title: {
          type: "singleLine",
          label: "Title",
          required: true,
          defaultValue: "Feature Title",
        },
        description: {
          type: "multiLine",
          label: "Description",
          defaultValue: "Feature description goes here.",
          required: true,
        },
        color: {
          type: "color",
          label: "Color",
        },
        hoverColor: {
          type: "color",
          label: "Hover Color",
        },
        icon: {
          type: "select",
          label: "Icon",
          options: [
            { label: "Zap", value: "ZapIcon" },
            { label: "Sparkles", value: "SparklesIcon" },
            { label: "Globe Alt", value: "GlobeAltIcon" },
            { label: "Layers", value: "LayersIcon" },
            { label: "Paint Brush", value: "PaintBrushIcon" },
            { label: "Lightning Bolt", value: "LightningBoltIcon" },
            { label: "Cloud", value: "CloudIcon" },
            { label: "Lock Closed", value: "LockClosedIcon" },
            { label: "Cog", value: "CogIcon" },
            { label: "Chart Bar", value: "ChartBarIcon" },
            { label: "Device Mobile", value: "DeviceMobileIcon" },
            { label: "Users", value: "UsersIcon" },
            { label: "Shield Check", value: "ShieldCheckIcon" },
            { label: "Blocks", value: "BlocksIcon" },
          ],
        },
      },
    },
  },
});
