import { defineBlock } from "cmssy-cli/config";

export default defineBlock({
  name: "Faq",
  description: "",
  category: "marketing",
  tags: ["marketing", "faq"],

  // Mark as interactive to skip SSR (uses Radix Accordion with createContext)
  interactive: true,

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
    faqs: {
      type: "repeater",
      label: "FAQs",
      schema: {
        question: {
          type: "singleLine",
          label: "Question",
          required: true,
          defaultValue: "What is your refund policy?",
        },
        answer: {
          type: "multiLine",
          label: "Answer",
          required: true,
          defaultValue:
            "We offer a 30-day money-back guarantee. If you're not satisfied with our product, simply contact our support team within 30 days of purchase for a full refund.",
        },
      },
    },
  },

  pricing: { licenseType: "free" },
});
