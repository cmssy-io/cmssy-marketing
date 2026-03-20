import { defineBlock, field } from "@cmssy/cli/config";

export default defineBlock({
  name: "Hero Section",
  description: "Hero section block with heading and CTA button",
  category: "marketing",
  tags: ["hero", "landing", "cta"],

  schema: {
    badgeText: field({
      type: "singleLine",
      label: "Badge Text",
      defaultValue: "AI-Powered Page Builder",
      placeholder: "Badge Text",
    }),
    heading: field({
      type: "singleLine",
      label: "Main Heading",
      defaultValue: "Build reusable UI blocks with any framework",
      required: true,
      placeholder: "Build websites",
    }),
    headingHighlight: field({
      type: "singleLine",
      label: "Heading Highlight",
      defaultValue: "without limits",
    }),
    subheading: field({
      type: "multiLine",
      label: "Subheading",
      placeholder: "The modern CMS that makes website creation effortless...",
    }),
    primaryButtonText: field({
      type: "singleLine",
      label: "Primary Button Text",
      defaultValue: "Start Building Free",
    }),
    primaryButtonUrl: field({
      type: "link",
      label: "Primary Button URL",
      defaultValue: "/signup",
    }),
    secondaryButtonText: field({
      type: "singleLine",
      label: "Secondary Button Text",
      defaultValue: "Watch Demo",
    }),
    secondaryButtonUrl: field({
      type: "link",
      label: "Secondary Button URL",
      defaultValue: "#demo",
    }),
    socialProofPrefix: field({
      type: "singleLine",
      label: "Social Proof Prefix",
      defaultValue: "Join",
    }),
    socialProofCount: field({
      type: "singleLine",
      label: "Social Proof Count",
      defaultValue: "2,000+",
    }),
    socialProofText: field({
      type: "singleLine",
      label: "Social Proof Text",
      defaultValue: "creators already building with cmssy",
    }),
    media: field({
      type: "media",
      label: "Media (Image or Video)",
      placeholder: "Upload an image or video for the hero section",
    }),
    mediaPlaceholderHeading: field({
      type: "singleLine",
      label: "Media Placeholder Heading",
      defaultValue: "Page Builder Preview",
    }),
    mediaPlaceholderText: field({
      type: "singleLine",
      label: "Media Placeholder Text",
      defaultValue: "Drag & drop interface with real-time preview",
    }),
    test: field({
      type: "singleLine",
      label: "Test Field",
      placeholder: "This is a test field",
    }),
  },
});
