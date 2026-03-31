import { defineBlock, field } from "@cmssy/cli/config";

export default defineBlock({
  name: "Contact",
  description: "Contact section with form and info cards",
  category: "marketing",
  tags: ["contact", "form"],

  schema: {
    // Header section
    badgeText: field({
      type: "singleLine",
      label: "Badge Text",
      defaultValue: "Contact Us",
    }),
    heading: field({
      type: "singleLine",
      label: "Heading",
      defaultValue: "Let's",
    }),
    headingHighlight: field({
      type: "singleLine",
      label: "Heading Highlight",
      defaultValue: "talk",
    }),
    description: field({
      type: "multiLine",
      label: "Description",
      defaultValue:
        "Have a question, feedback, or just want to say hello? We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.",
    }),

    // Info cards
    infoCards: field({
      type: "repeater",
      label: "Info Cards",
      group: "Info Cards",
      schema: {
        icon: field({
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
        }),
        title: field({
          type: "singleLine",
          label: "Title",
        }),
        description: field({
          type: "multiLine",
          label: "Description",
        }),
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
    }),

    // Quote
    showQuote: field({
      type: "boolean",
      label: "Show Quote",
      defaultValue: true,
      group: "Quote",
    }),
    quoteText: field({
      type: "multiLine",
      label: "Quote Text",
      defaultValue:
        "Building the future of content management, one pixel at a time.",
      group: "Quote",
    }),
    quoteAuthor: field({
      type: "singleLine",
      label: "Quote Author",
      defaultValue: "The Cmssy Team",
      group: "Quote",
    }),

    // Form settings
    nameLabel: field({
      type: "singleLine",
      label: "Name Label",
      defaultValue: "Name",
      group: "Form Settings",
    }),
    emailLabel: field({
      type: "singleLine",
      label: "Email Label",
      defaultValue: "Email",
      group: "Form Settings",
    }),
    messageLabel: field({
      type: "singleLine",
      label: "Message Label",
      defaultValue: "Message",
      group: "Form Settings",
    }),
    formId: field({
      type: "form",
      label: "Form",
      group: "Form Settings",
      helpText:
        "Select which form definition to use for submissions and notifications",
    }),
    submitButtonText: field({
      type: "singleLine",
      label: "Submit Button Text",
      defaultValue: "Send Message",
      group: "Form Settings",
    }),
    submitLoadingText: field({
      type: "singleLine",
      label: "Submit Loading Text",
      defaultValue: "Sending...",
      group: "Form Settings",
    }),
    successHeading: field({
      type: "singleLine",
      label: "Success Heading",
      defaultValue: "Message Sent!",
      group: "Form Settings",
    }),
    errorMessage: field({
      type: "singleLine",
      label: "Error Message",
      defaultValue: "Something went wrong. Please try again.",
      group: "Form Settings",
    }),
    successMessage: field({
      type: "multiLine",
      label: "Success Message",
      defaultValue:
        "Thank you for reaching out! We'll get back to you as soon as possible.",
      group: "Form Settings",
    }),
  },
});
