import { defineBlock } from "cmssy-cli/config";

export default defineBlock({
  name: "Contact",
  description: "Contact section with form and info cards",
  category: "marketing",
  tags: ["contact", "form"],

  schema: {
    // Header section
    badgeText: {
      type: "singleLine",
      label: "Badge Text",
      defaultValue: "Contact Us",
    },
    heading: {
      type: "singleLine",
      label: "Heading",
      required: true,
      defaultValue: "Let's",
    },
    headingHighlight: {
      type: "singleLine",
      label: "Heading Highlight",
      defaultValue: "talk",
    },
    description: {
      type: "multiLine",
      label: "Description",
      defaultValue:
        "Have a question, feedback, or just want to say hello? We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.",
    },

    // Info cards
    emailTitle: {
      type: "singleLine",
      label: "Email Card Title",
      defaultValue: "Email Us",
      group: "Info Cards",
    },
    emailDescription: {
      type: "multiLine",
      label: "Email Card Description",
      defaultValue:
        "Drop us a line anytime. We typically respond within 24 hours.",
      group: "Info Cards",
    },
    responseTitle: {
      type: "singleLine",
      label: "Response Time Title",
      defaultValue: "Response Time",
      group: "Info Cards",
    },
    responseDescription: {
      type: "multiLine",
      label: "Response Time Description",
      defaultValue:
        "We aim to respond to all inquiries within 24-48 hours during business days.",
      group: "Info Cards",
    },
    locationTitle: {
      type: "singleLine",
      label: "Location Title",
      defaultValue: "Location",
      group: "Info Cards",
    },
    locationDescription: {
      type: "multiLine",
      label: "Location Description",
      defaultValue: "We're a remote-first team working across Europe.",
      group: "Info Cards",
    },

    // Quote
    showQuote: {
      type: "boolean",
      label: "Show Quote",
      defaultValue: true,
      group: "Quote",
    },
    quoteText: {
      type: "multiLine",
      label: "Quote Text",
      defaultValue:
        "Building the future of content management, one pixel at a time.",
      group: "Quote",
    },
    quoteAuthor: {
      type: "singleLine",
      label: "Quote Author",
      defaultValue: "The Cmssy Team",
      group: "Quote",
    },

    // Form settings
    formActionUrl: {
      type: "link",
      label: "Form Action URL",
      placeholder: "https://formspree.io/f/xxxxx",
      group: "Form Settings",
    },
    submitButtonText: {
      type: "singleLine",
      label: "Submit Button Text",
      defaultValue: "Send Message",
      group: "Form Settings",
    },
    successMessage: {
      type: "multiLine",
      label: "Success Message",
      defaultValue:
        "Thank you for reaching out! We'll get back to you as soon as possible.",
      group: "Form Settings",
    },
  },

  pricing: { licenseType: "free" },
});
