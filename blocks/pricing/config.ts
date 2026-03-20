import { defineBlock, field } from "@cmssy/cli/config";

export default defineBlock({
  name: "Pricing",
  description: "",
  category: "marketing",
  tags: ["marketing", "pricing"],

  schema: {
    heading: field({
      type: "singleLine",
      label: "Heading",
      required: true,
      defaultValue: "Heading",
    }),
    headingHighlight: field({
      type: "singleLine",
      label: "Heading Highlight",
      defaultValue: "Highlight",
    }),
    description: field({
      type: "multiLine",
      label: "Description",
      placeholder: "Enter description",
      defaultValue: "Description",
    }),
    trialNotice: field({
      type: "singleLine",
      label: "Trial Notice",
      defaultValue:
        "14-day free trial on all paid plans. No credit card required.",
    }),
    popularBadgeText: field({
      type: "singleLine",
      label: "Popular Badge Text",
      defaultValue: "MOST POPULAR",
    }),
    plans: field({
      maxItems: 3,
      type: "repeater",
      label: "Plans",
      schema: {
        name: field({
          type: "singleLine",
          label: "Plan Name",
          required: true,
          defaultValue: "Basic",
        }),
        description: field({
          type: "multiLine",
          label: "Plan Description",
          defaultValue: "Description of the plan.",
        }),
        price: field({
          type: "singleLine",
          label: "Price",
          required: true,
          defaultValue: "$0/mo",
        }),
        popular: field({
          type: "boolean",
          label: "Is Popular?",
          defaultValue: false,
        }),
        period: field({
          type: "singleLine",
          label: "Billing Period",
          defaultValue: "billed annually",
        }),
        features: field({
          type: "repeater",
          label: "Features",
          schema: {
            feature: field({
              type: "singleLine",
              label: "Feature",
              required: true,
              defaultValue: "Feature",
            }),
          },
        }),
        cta: field({
          type: "singleLine",
          label: "Call to Action",
          required: true,
          defaultValue: "Get Started",
        }),
        href: field({
          type: "link",
          label: "Link",
          required: true,
          defaultValue: "#",
        }),
      },
    }),
  },
});
