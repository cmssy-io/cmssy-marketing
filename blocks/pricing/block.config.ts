import { defineBlock } from "@cmssy/cli/config";

export default defineBlock({
  name: "Pricing",
  description: "",
  category: "marketing",
  tags: ["marketing", "pricing"],

  schema: {
    heading: {
      type: "singleLine",
      label: "Heading",
      required: true,
      defaultValue: "Heading",
    },
    headingHighlight: {
      type: "singleLine",
      label: "Heading Highlight",
      defaultValue: "Highlight",
    },
    description: {
      type: "multiLine",
      label: "Description",
      placeholder: "Enter description",
      defaultValue: "Description",
    },
    trialNotice: {
      type: "singleLine",
      label: "Trial Notice",
      defaultValue:
        "14-day free trial on all paid plans. No credit card required.",
    },
    plans: {
      maxItems: 3,
      type: "repeater",
      label: "Plans",
      schema: {
        name: {
          type: "singleLine",
          label: "Plan Name",
          required: true,
          defaultValue: "Basic",
        },
        description: {
          type: "multiLine",
          label: "Plan Description",
          defaultValue: "Description of the plan.",
        },
        price: {
          type: "singleLine",
          label: "Price",
          required: true,
          defaultValue: "$0/mo",
        },
        popular: {
          type: "boolean",
          label: "Is Popular?",
          defaultValue: false,
        },
        period: {
          type: "singleLine",
          label: "Billing Period",
          defaultValue: "billed annually",
        },
        features: {
          type: "repeater",
          label: "Features",
          schema: {
            feature: {
              type: "singleLine",
              label: "Feature",
              required: true,
              defaultValue: "Feature",
            },
          },
        },
        cta: {
          type: "singleLine",
          label: "Call to Action",
          required: true,
          defaultValue: "Get Started",
        },
        href: {
          type: "link",
          label: "Link",
          required: true,
          defaultValue: "#",
        },
      },
    },
  },
});
