import { defineBlock, field } from "@cmssy/cli/config";

export default defineBlock({
  name: "Blog Post Hero",
  description:
    "Full-width hero for blog posts with cover image, author, category, and reading time",
  category: "marketing",
  tags: ["blog", "post", "hero", "article", "cover"],

  schema: {
    coverImage: field({
      type: "media",
      label: "Cover Image",
      helpText: "Recommended: 1200x630px for optimal social sharing",
    }),
    title: field({
      type: "singleLine",
      label: "Title",
      required: true,
      placeholder: "Your blog post title",
    }),
    excerpt: field({
      type: "multiLine",
      label: "Excerpt",
      placeholder: "A short summary of the post",
    }),
    category: field({
      type: "singleLine",
      label: "Category",
      placeholder: "e.g. Engineering, Design, Product",
    }),
    author: field({
      type: "singleLine",
      label: "Author",
      placeholder: "Author name",
    }),
    authorAvatar: field({
      type: "media",
      label: "Author Avatar",
    }),
    date: field({
      type: "date",
      label: "Publish Date",
    }),
    readingTime: field({
      type: "numeric",
      label: "Reading Time (minutes)",
      defaultValue: 5,
    }),
    breadcrumbLabel: field({
      type: "singleLine",
      label: "Breadcrumb Label",
      defaultValue: "Blog",
    }),
    breadcrumbUrl: field({
      type: "link",
      label: "Breadcrumb URL",
      defaultValue: "/blog",
    }),
  },
});
