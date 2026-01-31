import { defineTemplate } from "cmssy-cli/config";

export default defineTemplate({
  name: "Marketing Site",
  description:
    "Complete marketing website template with 17 pre-built pages including homepage, about, features, pricing, contact, and more.",
  category: "website",
  tags: [
    "marketing",
    "saas",
    "landing",
    "business",
    "startup",
    "complete",
    "multi-page",
  ],

  pages: [
    {
      name: "Home",
      slug: "home",
      blocks: [
        { type: "hero", content: {} },
        { type: "features", content: {} },
        { type: "cta", content: {} },
      ],
    },
    {
      name: "About",
      slug: "about",
      blocks: [
        { type: "about", content: {} },
      ],
    },
    {
      name: "Pricing",
      slug: "pricing",
      blocks: [
        { type: "pricing", content: {} },
        { type: "faq", content: {} },
      ],
    },
    {
      name: "Contact",
      slug: "contact",
      blocks: [
        { type: "contact", content: {} },
      ],
    },
  ],

  layoutSlots: [
    { slot: "header", type: "header", content: {} },
    { slot: "footer", type: "footer", content: {} },
  ],

  schema: {
    siteName: {
      type: "singleLine",
      label: "Site Name",
      placeholder: "Your Company Name",
      defaultValue: "My Company",
    },
    siteDescription: {
      type: "multiLine",
      label: "Site Description",
      placeholder: "A brief description of your site",
      defaultValue: "Build something amazing with our platform",
    },
  },

  pricing: { licenseType: "free" },
});
