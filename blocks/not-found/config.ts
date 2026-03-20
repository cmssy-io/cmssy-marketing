import { defineBlock } from "@cmssy/cli/config";

export default defineBlock({
  name: "404 Not Found",
  description:
    "Custom 404 error page with animated effects and navigation links",
  category: "marketing",
  tags: ["404", "error", "not-found", "marketing"],

  schema: {
    heading: {
      type: "singleLine",
      label: "Heading",
      defaultValue: "404",
      placeholder: "e.g., 404, Oops!, Lost?",
    },
    title: {
      type: "singleLine",
      label: "Title",
      defaultValue: "Page not found",
    },
    description: {
      type: "multiLine",
      label: "Description",
      defaultValue:
        "The page you're looking for doesn't exist or has been moved. Let's get you back on track.",
    },
    primaryButtonText: {
      type: "singleLine",
      label: "Primary Button Text",
      defaultValue: "Back to Home",
    },
    primaryButtonUrl: {
      type: "link",
      label: "Primary Button URL",
      defaultValue: "/",
    },
    secondaryButtonText: {
      type: "singleLine",
      label: "Secondary Button Text",
      defaultValue: "Contact Support",
    },
    secondaryButtonUrl: {
      type: "link",
      label: "Secondary Button URL",
      defaultValue: "/contact",
    },
  },
});
