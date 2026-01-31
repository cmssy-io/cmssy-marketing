import { defineBlock } from "cmssy-cli/config";

export default defineBlock({
  name: "Footer",
  description: "Footer section with links, branding, and social links",
  category: "Layout",
  layoutSlot: "footer",
  tags: ["footer", "navigation", "links"],

  schema: {
    logo: {
      type: "media",
      label: "Logo",
      group: "brand",
    },
    logoText: {
      type: "singleLine",
      label: "Logo Text",
      defaultValue: "cmssy",
      group: "brand",
    },
    tagline: {
      type: "multiLine",
      label: "Tagline",
      defaultValue:
        "The modern CMS that makes website creation effortless. Build beautiful websites with AI-powered tools.",
      group: "brand",
    },

    linkColumns: {
      type: "repeater",
      label: "Link Columns",
      group: "columns",
      schema: {
        title: {
          type: "singleLine",
          label: "Column Title",
          required: true,
        },
        links: {
          type: "repeater",
          label: "Links",
          schema: {
            name: {
              type: "singleLine",
              label: "Link Text",
              required: true,
            },
            href: {
              type: "link",
              label: "URL",
              required: true,
            },
          },
        },
      },
    },

    showSocial: {
      type: "boolean",
      label: "Show Social Links",
      defaultValue: true,
      group: "social",
    },
    twitterUrl: {
      type: "link",
      label: "Twitter/X URL",
      group: "social",
      showWhen: { field: "showSocial", equals: true },
    },
    githubUrl: {
      type: "link",
      label: "GitHub URL",
      group: "social",
      showWhen: { field: "showSocial", equals: true },
    },
    linkedinUrl: {
      type: "link",
      label: "LinkedIn URL",
      group: "social",
      showWhen: { field: "showSocial", equals: true },
    },

    copyrightText: {
      type: "singleLine",
      label: "Copyright Text",
      defaultValue: "cmssy. All rights reserved.",
      group: "legal",
    },
  },

  pricing: { licenseType: "free" },
});
