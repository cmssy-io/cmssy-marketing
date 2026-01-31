import { defineBlock } from "cmssy-cli/config";

export default defineBlock({
  name: "Docs Card Grid",
  description: "Grid of cards linking to documentation sections",
  category: "documentation",
  tags: ["docs", "cards", "grid", "navigation", "links"],

  schema: {
    heading: {
      type: "singleLine",
      label: "Section Heading",
      group: "header",
    },
    description: {
      type: "multiLine",
      label: "Section Description",
      group: "header",
    },

    columns: {
      type: "select",
      label: "Columns",
      options: [
        { value: "2", label: "2 Columns" },
        { value: "3", label: "3 Columns" },
        { value: "4", label: "4 Columns" },
      ],
      defaultValue: "3",
      group: "layout",
    },

    cards: {
      type: "repeater",
      label: "Cards",
      group: "cards",
      schema: {
        icon: {
          type: "singleLine",
          label: "Icon Name",
          placeholder: "e.g., Rocket, Code, Book",
          helpText: "Lucide icon name",
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
        url: {
          type: "link",
          label: "URL",
          required: true,
        },
      },
    },
  },

  pricing: { licenseType: "free" },
});
