import { defineBlock } from "cmssy-cli/config";

export default defineBlock({
  name: "Hero Section",
  description: "Hero section block with heading and CTA button",
  category: "marketing",
  tags: ["hero", "landing", "cta"],

  schema: {
    badgeText: {
      type: "singleLine",
      label: "Badge Text",
      defaultValue: "AI-Powered Page Builder",
      placeholder: "Badge Text",
    },
    heading: {
      type: "singleLine",
      label: "Main Heading",
      defaultValue: "Build reusable UI blocks with any framework",
      required: true,
      placeholder: "Build websites",
    },
    headingHighlight: {
      type: "singleLine",
      label: "Heading Highlight",
      defaultValue: "without limits",
    },
    subheading: {
      type: "multiLine",
      label: "Subheading",
      placeholder: "The modern CMS that makes website creation effortless...",
    },
    primaryButtonText: {
      type: "singleLine",
      label: "Primary Button Text",
      defaultValue: "Start Building Free",
    },
    primaryButtonUrl: {
      type: "link",
      label: "Primary Button URL",
      defaultValue: "/signup",
    },
    secondaryButtonText: {
      type: "singleLine",
      label: "Secondary Button Text",
      defaultValue: "Watch Demo",
    },
    secondaryButtonUrl: {
      type: "link",
      label: "Secondary Button URL",
      defaultValue: "#demo",
    },
    socialProofCount: {
      type: "singleLine",
      label: "Social Proof Count",
      defaultValue: "2,000+",
    },
    socialProofText: {
      type: "singleLine",
      label: "Social Proof Text",
      defaultValue: "creators already building with cmssy",
    },
    media: {
      type: "media",
      label: "Media (Image or Video)",
      placeholder: "Upload an image or video for the hero section",
    },
    test: {
      type: "singleLine",
      label: "Test Field",
      placeholder: "This is a test field",
    },
  },
  pricing: { licenseType: "free" },
});
