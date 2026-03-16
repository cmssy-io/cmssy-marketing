import { defineBlock } from "@cmssy/cli/config";

export default defineBlock({
  name: "Blog Post Hero",
  description:
    "Full-width hero for blog posts with cover image, author, category, and reading time",
  category: "marketing",
  tags: ["blog", "post", "hero", "article", "cover"],

  schema: {
    coverImage: {
      type: "media",
      label: "Cover Image",
      helpText: "Recommended: 1200x630px for optimal social sharing",
    },
    title: {
      type: "singleLine",
      label: "Title",
      required: true,
      placeholder: "Your blog post title",
    },
    excerpt: {
      type: "multiLine",
      label: "Excerpt",
      placeholder: "A short summary of the post",
    },
    category: {
      type: "singleLine",
      label: "Category",
      placeholder: "e.g. Engineering, Design, Product",
    },
    author: {
      type: "singleLine",
      label: "Author",
      placeholder: "Author name",
    },
    authorAvatar: {
      type: "media",
      label: "Author Avatar",
    },
    date: {
      type: "date",
      label: "Publish Date",
    },
    readingTime: {
      type: "numeric",
      label: "Reading Time (minutes)",
      defaultValue: 5,
    },
    breadcrumbLabel: {
      type: "singleLine",
      label: "Breadcrumb Label",
      defaultValue: "Blog",
    },
    breadcrumbUrl: {
      type: "link",
      label: "Breadcrumb URL",
      defaultValue: "/blog",
    },
  },
});
