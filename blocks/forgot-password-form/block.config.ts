import { defineBlock } from "@cmssy/cli/config";

export default defineBlock({
  name: "Forgot Password Form",
  description: "Password reset request form for customers",
  category: "marketing",
  tags: ["password", "reset", "auth", "form", "customer"],

  schema: {
    // Header section
    heading: {
      type: "singleLine",
      label: "Heading",
      defaultValue: "Forgot your password?",
    },
    description: {
      type: "multiLine",
      label: "Description",
      defaultValue: "Enter your email address and we'll send you a link to reset your password.",
    },

    // Form settings
    emailPlaceholder: {
      type: "singleLine",
      label: "Email Placeholder",
      defaultValue: "you@example.com",
      group: "Form Settings",
    },
    submitButtonText: {
      type: "singleLine",
      label: "Submit Button Text",
      defaultValue: "Send reset link",
      group: "Form Settings",
    },

    // Links
    showLoginLink: {
      type: "boolean",
      label: "Show Login Link",
      defaultValue: true,
      group: "Links",
    },
    loginLinkText: {
      type: "singleLine",
      label: "Login Link Text",
      defaultValue: "Back to login",
      group: "Links",
    },
    loginUrl: {
      type: "link",
      label: "Login URL",
      defaultValue: "/login",
      group: "Links",
    },

    // Messages
    successMessage: {
      type: "multiLine",
      label: "Success Message",
      defaultValue: "If an account exists with this email, you will receive a password reset link shortly.",
      group: "Messages",
    },
    errorMessage: {
      type: "multiLine",
      label: "Default Error Message",
      defaultValue: "Something went wrong. Please try again.",
      group: "Messages",
    },

    // Styling
    variant: {
      type: "select",
      label: "Variant",
      options: [
        { value: "default", label: "Default" },
        { value: "card", label: "Card with background" },
      ],
      defaultValue: "default",
      group: "Styling",
    },
  },
});
