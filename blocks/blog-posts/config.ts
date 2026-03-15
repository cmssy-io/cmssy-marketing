import { defineBlock } from "@cmssy/cli/config";

export default defineBlock({
  name: "Blog Posts",
  description:
    "Dynamic blog post listing with search, filters, infinite scroll - powered by parent page children",
  category: "blog",
  tags: ["blog", "posts", "articles", "grid", "listing", "collection"],

  schema: {
    badge: {
      type: "singleLine",
      label: "Badge",
      defaultValue: "Latest Posts",
      group: "header",
    },
    heading: {
      type: "singleLine",
      label: "Heading",
      defaultValue: "From the Blog",
      group: "header",
    },
    description: {
      type: "multiLine",
      label: "Description",
      group: "header",
    },

    // Collection source
    parentPage: {
      type: "pageSelector",
      label: "Parent Page",
      multiple: true,
      group: "source",
    },
    postsPerPage: {
      type: "select",
      label: "Posts per page",
      defaultValue: "9",
      options: [
        { label: "3", value: "3" },
        { label: "6", value: "6" },
        { label: "9", value: "9" },
        { label: "12", value: "12" },
      ],
      group: "source",
    },

    // UI
    showSearch: {
      type: "boolean",
      label: "Show Search",
      defaultValue: true,
      group: "settings",
    },
    layout: {
      type: "select",
      label: "Layout",
      defaultValue: "grid",
      options: [
        { label: "Grid", value: "grid" },
        { label: "List", value: "list" },
      ],
      group: "settings",
    },
    columns: {
      type: "select",
      label: "Columns",
      defaultValue: "3",
      options: [
        { label: "2 columns", value: "2" },
        { label: "3 columns", value: "3" },
      ],
      group: "settings",
      showWhen: { field: "layout", equals: "grid" },
    },

    // Translatable texts
    searchPlaceholder: {
      type: "singleLine",
      label: "Search Placeholder",
      defaultValue: "Search posts...",
      group: "texts",
    },
    loadingText: {
      type: "singleLine",
      label: "Loading Text",
      defaultValue: "Loading...",
      group: "texts",
    },
    noResultsText: {
      type: "singleLine",
      label: "No Results Text",
      defaultValue: "No posts found",
      group: "texts",
    },
  },
});
