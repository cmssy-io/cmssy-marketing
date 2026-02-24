import { defineBlock } from "@cmssy/cli/config";

export default defineBlock({
  name: "About",
  description: "About section with mission, values, and tech stack",
  category: "marketing",
  tags: ["about", "company"],

  schema: {
    // Header
    badgeText: {
      type: "singleLine",
      label: "Badge Text",
      defaultValue: "About",
    },
    heading: {
      type: "singleLine",
      label: "Heading",
      required: true,
      defaultValue: "Building the Future of",
    },
    headingHighlight: {
      type: "singleLine",
      label: "Heading Highlight",
      defaultValue: "CMS",
    },
    subtitle: {
      type: "multiLine",
      label: "Subtitle",
      defaultValue:
        "We're on a mission to make professional website creation accessible to everyone, powered by AI and modern technology.",
    },

    // Mission
    missionText: {
      type: "multiLine",
      label: "Mission Text",
      defaultValue:
        "We believe that creating beautiful, professional websites shouldn't require a team of developers or expensive agencies. Cmssy empowers creators, businesses, and developers to build stunning websites with AI-powered tools, intuitive drag-and-drop editing, and enterprise-grade performance.",
      group: "Mission",
    },

    // Values
    values: {
      type: "repeater",
      label: "Values",
      group: "Values",
      schema: {
        icon: {
          type: "select",
          label: "Icon",
          options: [
            { label: "Sparkles", value: "sparkles" },
            { label: "Heart", value: "heart" },
            { label: "Users", value: "users" },
            { label: "Zap", value: "zap" },
            { label: "Globe", value: "globe" },
            { label: "Code", value: "code" },
            { label: "Shield", value: "shield" },
            { label: "Rocket", value: "rocket" },
          ],
          defaultValue: "sparkles",
        },
        title: {
          type: "singleLine",
          label: "Title",
          required: true,
        },
        description: {
          type: "multiLine",
          label: "Description",
        },
      },
    },

    // Tech Stack
    showTechStack: {
      type: "boolean",
      label: "Show Tech Stack",
      defaultValue: true,
      group: "Tech Stack",
    },
    techStack: {
      type: "repeater",
      label: "Technologies",
      group: "Tech Stack",
      schema: {
        name: {
          type: "singleLine",
          label: "Name",
          required: true,
        },
        category: {
          type: "singleLine",
          label: "Category",
        },
      },
    },
  },
});
