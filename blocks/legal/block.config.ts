import { defineBlock } from "cmssy-cli/config";

export default defineBlock({
  name: "Legal",
  description:
    "Legal page with accordion sections for privacy policy, terms of service, cookies",
  category: "marketing",
  tags: ["legal", "privacy", "terms", "cookies", "policy", "accordion"],

  // Mark as interactive to skip SSR (uses Radix Accordion with createContext)
  interactive: true,

  schema: {
    badge: {
      type: "singleLine",
      label: "Badge Text",
      defaultValue: "Privacy",
      group: "header",
    },
    heading: {
      type: "singleLine",
      label: "Heading",
      defaultValue: "Privacy",
      group: "header",
    },
    headingHighlight: {
      type: "singleLine",
      label: "Heading Highlight",
      defaultValue: "Policy",
      group: "header",
    },
    description: {
      type: "multiLine",
      label: "Description",
      defaultValue:
        "Learn how we collect, use, and protect your personal information.",
      group: "header",
    },

    showSummary: {
      type: "boolean",
      label: "Show Summary Box",
      defaultValue: true,
      group: "summary",
    },
    summaryTitle: {
      type: "singleLine",
      label: "Summary Title",
      defaultValue: "TL;DR",
      group: "summary",
      showWhen: { field: "showSummary", equals: true },
    },
    summaryContent: {
      type: "multiLine",
      label: "Summary Content",
      defaultValue:
        "We respect your privacy and only collect data necessary to provide our services. We never sell your data.",
      group: "summary",
      showWhen: { field: "showSummary", equals: true },
    },

    sections: {
      type: "repeater",
      label: "Accordion Sections",
      group: "sections",
      schema: {
        title: {
          type: "singleLine",
          label: "Section Title",
          required: true,
        },
        content: {
          type: "richText",
          label: "Section Content",
          required: true,
        },
      },
    },

    showFooterLinks: {
      type: "boolean",
      label: "Show Footer Links",
      defaultValue: true,
      group: "footer",
    },
    footerText: {
      type: "singleLine",
      label: "Footer Text",
      defaultValue: "This policy is part of our",
      group: "footer",
      showWhen: { field: "showFooterLinks", equals: true },
    },
    footerLinks: {
      type: "repeater",
      label: "Footer Links",
      group: "footer",
      showWhen: { field: "showFooterLinks", equals: true },
      schema: {
        text: {
          type: "singleLine",
          label: "Link Text",
          required: true,
        },
        url: {
          type: "link",
          label: "URL",
          required: true,
        },
      },
    },
    lastUpdated: {
      type: "singleLine",
      label: "Last Updated Date",
      defaultValue: "January 2025",
      group: "footer",
    },
  },

  pricing: { licenseType: "free" },
});
