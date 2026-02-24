import { defineBlock } from "@cmssy/cli/config";

export default defineBlock({
  name: "Changelog",
  description: "Changelog timeline with version history and release notes",
  category: "marketing",
  tags: ["changelog", "updates", "versions", "timeline", "releases"],

  schema: {
    badge: {
      type: "singleLine",
      label: "Badge Text",
      defaultValue: "Changelog",
      group: "header",
    },
    heading: {
      type: "singleLine",
      label: "Heading",
      defaultValue: "What's",
      group: "header",
    },
    headingHighlight: {
      type: "singleLine",
      label: "Heading Highlight",
      defaultValue: "New",
      group: "header",
    },
    description: {
      type: "multiLine",
      label: "Description",
      defaultValue:
        "Stay up to date with the latest features, improvements, and fixes.",
      group: "header",
    },

    entries: {
      type: "repeater",
      label: "Changelog Entries",
      group: "entries",
      schema: {
        version: {
          type: "singleLine",
          label: "Version",
          required: true,
        },
        date: {
          type: "singleLine",
          label: "Date",
          required: true,
        },
        title: {
          type: "singleLine",
          label: "Title",
          required: true,
        },
        type: {
          type: "select",
          label: "Type",
          options: [
            { value: "feature", label: "New Feature" },
            { value: "improvement", label: "Improvement" },
            { value: "bugfix", label: "Bug Fix" },
          ],
          defaultValue: "feature",
        },
        changes: {
          type: "repeater",
          label: "Changes",
          schema: {
            text: {
              type: "singleLine",
              label: "Change Description",
              required: true,
            },
          },
        },
      },
    },

    showSubscribe: {
      type: "boolean",
      label: "Show Subscribe CTA",
      defaultValue: true,
      group: "subscribe",
    },
    subscribeText: {
      type: "singleLine",
      label: "Subscribe Text",
      defaultValue: "Subscribe to get notified about new releases",
      group: "subscribe",
      showWhen: { field: "showSubscribe", equals: true },
    },
    subscribeButtonText: {
      type: "singleLine",
      label: "Subscribe Button Text",
      defaultValue: "Subscribe",
      group: "subscribe",
      showWhen: { field: "showSubscribe", equals: true },
    },
    subscribeButtonUrl: {
      type: "link",
      label: "Subscribe Button URL",
      defaultValue: "/blog",
      group: "subscribe",
      showWhen: { field: "showSubscribe", equals: true },
    },
  },
});
