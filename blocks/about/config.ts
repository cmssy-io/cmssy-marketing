import { defineBlock, field } from "@cmssy/cli/config";

export default defineBlock({
  name: "About",
  description: "About section with mission, values, and tech stack",
  category: "marketing",
  tags: ["about", "company"],

  schema: {
    // Header
    badgeText: field({
      type: "singleLine",
      label: "Badge Text",
      defaultValue: "About",
    }),
    heading: field({
      type: "singleLine",
      label: "Heading",
      required: true,
      defaultValue: "Building the Future of",
    }),
    headingHighlight: field({
      type: "singleLine",
      label: "Heading Highlight",
      defaultValue: "CMS",
    }),
    subtitle: field({
      type: "multiLine",
      label: "Subtitle",
      defaultValue:
        "We're on a mission to make professional website creation accessible to everyone, powered by AI and modern technology.",
    }),

    // Mission
    missionHeading: field({
      type: "singleLine",
      label: "Mission Heading",
      defaultValue: "Our Mission",
      group: "Mission",
    }),
    missionText: field({
      type: "multiLine",
      label: "Mission Text",
      defaultValue:
        "We believe that creating beautiful, professional websites shouldn't require a team of developers or expensive agencies. Cmssy empowers creators, businesses, and developers to build stunning websites with AI-powered tools, intuitive drag-and-drop editing, and enterprise-grade performance.",
      group: "Mission",
    }),

    // Values
    valuesHeading: field({
      type: "singleLine",
      label: "Values Heading",
      defaultValue: "Our Values",
      group: "Values",
    }),
    values: field({
      type: "repeater",
      label: "Values",
      group: "Values",
      schema: {
        icon: field({
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
        }),
        title: field({
          type: "singleLine",
          label: "Title",
          required: true,
        }),
        description: field({
          type: "multiLine",
          label: "Description",
        }),
      },
    }),

    // Tech Stack
    techStackHeading: field({
      type: "singleLine",
      label: "Tech Stack Heading",
      defaultValue: "Built With Modern Tech",
      group: "Tech Stack",
    }),
    showTechStack: field({
      type: "boolean",
      label: "Show Tech Stack",
      defaultValue: true,
      group: "Tech Stack",
    }),
    techStack: field({
      type: "repeater",
      label: "Technologies",
      group: "Tech Stack",
      schema: {
        name: field({
          type: "singleLine",
          label: "Name",
          required: true,
        }),
        category: field({
          type: "singleLine",
          label: "Category",
        }),
      },
    }),
  },
});
