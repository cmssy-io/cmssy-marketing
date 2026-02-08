import { defineBlock } from "@cmssy/cli/config";

export default defineBlock({
  name: "Call to Action",
  description: "CTA section with gradient background and buttons",
  category: "marketing",
  tags: ["marketing", "cta"],

  schema: {
    badgeText: {
      type: "singleLine",
      label: "Badge Text",
      defaultValue: "Start building today",
      placeholder: "Enter badge text",
    },
    heading: {
      type: "singleLine",
      label: "Heading",
      required: true,
      defaultValue: "Ready to create something",
    },
    headingLine2: {
      type: "singleLine",
      label: "Heading Line 2",
      defaultValue: "amazing?",
    },
    description: {
      type: "multiLine",
      label: "Description",
      placeholder: "Enter description",
      defaultValue:
        "Join thousands of creators who trust cmssy to build their online presence. Start free, no credit card required.",
    },
    primaryButtonText: {
      type: "singleLine",
      label: "Primary Button Text",
      defaultValue: "Get Started Free",
    },
    primaryButtonUrl: {
      type: "link",
      label: "Primary Button URL",
      defaultValue: "/signup",
    },
    secondaryButtonText: {
      type: "singleLine",
      label: "Secondary Button Text",
      defaultValue: "Talk to Sales",
    },
    secondaryButtonUrl: {
      type: "link",
      label: "Secondary Button URL",
      defaultValue: "/contact",
    },
  },
});
