import { defineBlock, field } from "@cmssy/cli/config";

export default defineBlock({
  name: "Footer",
  description: "Footer section with links, branding, and social links",
  category: "Layout",
  layoutPosition: "footer",
  tags: ["footer", "navigation", "links"],

  schema: {
    logo: field({
      type: "media",
      label: "Logo",
      group: "brand",
    }),
    logoText: field({
      type: "singleLine",
      label: "Logo Text",
      defaultValue: "cmssy",
      group: "brand",
    }),
    tagline: field({
      type: "multiLine",
      label: "Tagline",
      defaultValue:
        "The modern CMS that makes website creation effortless. Build beautiful websites with AI-powered tools.",
      group: "brand",
    }),

    linkColumns: field({
      type: "repeater",
      label: "Link Columns",
      group: "columns",
      schema: {
        title: field({
          type: "singleLine",
          label: "Column Title",
          required: true,
        }),
        links: field({
          type: "repeater",
          label: "Links",
          schema: {
            name: field({
              type: "singleLine",
              label: "Link Text",
              required: true,
            }),
            href: field({
              type: "link",
              label: "URL",
              required: true,
            }),
          },
        }),
      },
    }),

    showSocial: field({
      type: "boolean",
      label: "Show Social Links",
      defaultValue: true,
      group: "social",
    }),
    twitterUrl: field({
      type: "link",
      label: "Twitter/X URL",
      group: "social",
      showWhen: { field: "showSocial", equals: true },
    }),
    githubUrl: field({
      type: "link",
      label: "GitHub URL",
      group: "social",
      showWhen: { field: "showSocial", equals: true },
    }),
    linkedinUrl: field({
      type: "link",
      label: "LinkedIn URL",
      group: "social",
      showWhen: { field: "showSocial", equals: true },
    }),

    copyrightText: field({
      type: "singleLine",
      label: "Copyright Text",
      defaultValue: "cmssy. All rights reserved.",
      group: "legal",
    }),
    showLanguageSwitcher: field({
      type: "boolean",
      label: "Show Language Switcher",
      defaultValue: false,
      group: "legal",
    }),
  },
});
