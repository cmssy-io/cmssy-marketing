import { defineBlock } from "cmssy-cli/config";

export default defineBlock({
  name: "Docs Article",
  description: "Documentation article with rich text content, table of contents, and navigation",
  category: "documentation",
  tags: ["docs", "article", "content", "documentation", "richtext"],

  interactive: true,

  schema: {
    title: {
      type: "singleLine",
      label: "Title",
      required: true,
      group: "header",
    },
    description: {
      type: "multiLine",
      label: "Description",
      group: "header",
    },
    lastUpdated: {
      type: "date",
      label: "Last Updated",
      group: "header",
    },

    content: {
      type: "richText",
      label: "Content",
      required: true,
      group: "content",
    },

    showToc: {
      type: "boolean",
      label: "Show Table of Contents",
      defaultValue: true,
      group: "features",
    },
    tocTitle: {
      type: "singleLine",
      label: "TOC Title",
      defaultValue: "On this page",
      group: "features",
      showWhen: { field: "showToc", equals: true },
    },

    showPrevNext: {
      type: "boolean",
      label: "Show Prev/Next Navigation",
      defaultValue: true,
      group: "navigation",
    },
    prevPage: {
      type: "repeater",
      label: "Previous Page",
      maxItems: 1,
      group: "navigation",
      showWhen: { field: "showPrevNext", equals: true },
      schema: {
        label: {
          type: "singleLine",
          label: "Label",
          required: true,
        },
        url: {
          type: "link",
          label: "URL",
          required: true,
        },
      },
    },
    nextPage: {
      type: "repeater",
      label: "Next Page",
      maxItems: 1,
      group: "navigation",
      showWhen: { field: "showPrevNext", equals: true },
      schema: {
        label: {
          type: "singleLine",
          label: "Label",
          required: true,
        },
        url: {
          type: "link",
          label: "URL",
          required: true,
        },
      },
    },

    showEditLink: {
      type: "boolean",
      label: "Show 'Edit on GitHub' Link",
      defaultValue: true,
      group: "footer",
    },
    editUrl: {
      type: "link",
      label: "Edit URL",
      group: "footer",
      showWhen: { field: "showEditLink", equals: true },
    },
  },

  pricing: { licenseType: "free" },
});
