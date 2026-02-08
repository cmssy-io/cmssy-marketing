import { defineBlock } from "@cmssy/cli/config";

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
    infoCards: {
      type: "repeater",
      label: "Info Cards",
      group: "Info Cards",
      schema: {
        icon: {
          type: "select",
          label: "Icon",
          options: [
            { label: "Mail", value: "mail" },
            { label: "Clock", value: "clock" },
            { label: "Map Pin", value: "map-pin" },
            { label: "Phone", value: "phone" },
            { label: "Chat", value: "chat" },
            { label: "Globe", value: "globe" },
          ],
        },
        title: {
          type: "singleLine",
          label: "Title",
        },
        description: {
          type: "multiLine",
          label: "Description",
        },
      },
      defaultValue: [
        {
          title: "Email Us",
          description:
            "Drop us a line anytime. We typically respond within 24 hours.",
        },
        {
          title: "Response Time",
          description:
            "We aim to respond to all inquiries within 24-48 hours during business days.",
        },
        {
          title: "Location",
          description: "We're a remote-first team working across Europe.",
        },
      ],
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
    emailConfigurationId: {
      type: "emailConfiguration",
      label: "Email Configuration",
      group: "Form Settings",
      helpText: "Select which email configuration to use for notifications",
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

    // Auto-response settings
    enableAutoResponse: {
      type: "boolean",
      label: "Enable Auto-Response",
      defaultValue: false,
      group: "Auto-Response",
    },
    autoResponseTemplateId: {
      type: "singleLine",
      label: "Auto-Response Template ID",
      helpText: "Enter the ID of a published email template for automatic responses",
      group: "Auto-Response",
      showWhen: { field: "enableAutoResponse", equals: true },
    },
  },
});
