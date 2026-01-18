import { defineBlock } from "cmssy-cli/config";

export default defineBlock({
  name: "Header Navigation",
  description:
    "Clean, responsive header with logo, navigation, and CTA buttons",
  category: "Layout",
  layoutSlot: "header",
  interactive: true,
  tags: ["header", "navigation", "menu", "navbar"],

  groups: {
    logo: { label: "Logo", icon: "Image" },
    navigation: { label: "Navigation", icon: "Menu" },
    primaryCta: { label: "Primary CTA", icon: "MousePointer" },
    secondaryCta: {
      label: "Secondary CTA",
      icon: "MousePointer",
      collapsed: true,
    },
    behavior: { label: "Behavior", icon: "Settings", collapsed: true },
    announcement: {
      label: "Announcement Bar",
      icon: "Megaphone",
      collapsed: true,
    },
  },

  schema: {
    logo: {
      type: "media",
      label: "Logo",
      placeholder: "Recommended: SVG or PNG with transparent background",
      group: "logo",
    },
    logoText: {
      type: "singleLine",
      label: "Logo Text",
      defaultValue: "Brand",
      placeholder: "Shown next to logo or as fallback",
      group: "logo",
    },
    logoSize: {
      type: "select",
      label: "Logo Size",
      defaultValue: "md",
      options: [
        { value: "sm", label: "Small" },
        { value: "md", label: "Medium" },
        { value: "lg", label: "Large" },
      ],
      group: "logo",
    },

    navigation: {
      type: "repeater",
      label: "Navigation Items",
      group: "navigation",
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
        openInNewTab: {
          type: "boolean",
          label: "Open in new tab",
          defaultValue: false,
        },
      },
    },

    showCta: {
      type: "boolean",
      label: "Show CTA Button",
      defaultValue: true,
      group: "primaryCta",
    },
    ctaLabel: {
      type: "singleLine",
      label: "CTA Label",
      defaultValue: "Get Started",
      group: "primaryCta",
      showWhen: { field: "showCta", equals: true },
    },
    ctaUrl: {
      type: "link",
      label: "CTA URL",
      defaultValue: "/signup",
      group: "primaryCta",
      showWhen: { field: "showCta", equals: true },
    },
    ctaStyle: {
      type: "select",
      label: "CTA Style",
      defaultValue: "primary",
      options: [
        { value: "primary", label: "Primary (Gradient)" },
        { value: "secondary", label: "Secondary (Dark)" },
        { value: "outline", label: "Outline" },
      ],
      group: "primaryCta",
      showWhen: { field: "showCta", equals: true },
    },

    showSecondaryCta: {
      type: "boolean",
      label: "Show Secondary CTA",
      defaultValue: false,
      group: "secondaryCta",
    },
    secondaryCtaLabel: {
      type: "singleLine",
      label: "Secondary CTA Label",
      defaultValue: "Login",
      group: "secondaryCta",
      showWhen: { field: "showSecondaryCta", equals: true },
    },
    secondaryCtaUrl: {
      type: "link",
      label: "Secondary CTA URL",
      defaultValue: "/login",
      group: "secondaryCta",
      showWhen: { field: "showSecondaryCta", equals: true },
    },
    secondaryCtaStyle: {
      type: "select",
      label: "Secondary CTA Style",
      defaultValue: "ghost",
      options: [
        { value: "ghost", label: "Ghost" },
        { value: "outline", label: "Outline" },
        { value: "link", label: "Link" },
      ],
      group: "secondaryCta",
      showWhen: { field: "showSecondaryCta", equals: true },
    },

    sticky: {
      type: "boolean",
      label: "Sticky Header",
      defaultValue: true,
      group: "behavior",
    },
    transparent: {
      type: "boolean",
      label: "Transparent Background",
      defaultValue: false,
      group: "behavior",
    },

    showAnnouncement: {
      type: "boolean",
      label: "Show Announcement Bar",
      defaultValue: false,
      group: "announcement",
    },
    announcementText: {
      type: "singleLine",
      label: "Announcement Text",
      placeholder: "New feature available!",
      group: "announcement",
      showWhen: { field: "showAnnouncement", equals: true },
    },
    announcementLink: {
      type: "link",
      label: "Announcement Link",
      group: "announcement",
      showWhen: { field: "showAnnouncement", equals: true },
    },
    announcementBg: {
      type: "color",
      label: "Announcement Background",
      defaultValue: "#7c3aed",
      group: "announcement",
      showWhen: { field: "showAnnouncement", equals: true },
    },
    announcementTextColor: {
      type: "color",
      label: "Announcement Text Color",
      defaultValue: "#ffffff",
      group: "announcement",
      showWhen: { field: "showAnnouncement", equals: true },
    },
    announcementDismissible: {
      type: "boolean",
      label: "Dismissible",
      defaultValue: true,
      group: "announcement",
      showWhen: { field: "showAnnouncement", equals: true },
    },
  },

  pricing: { licenseType: "free" },
});
