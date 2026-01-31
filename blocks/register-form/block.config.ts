import { defineBlock } from "cmssy-cli/config";

export default defineBlock({
  name: "Register Form",
  description: "Customer registration form for account creation",
  category: "marketing",
  tags: ["register", "signup", "auth", "form", "customer"],

  schema: {
    // Header section
    heading: {
      type: "singleLine",
      label: "Heading",
      defaultValue: "Create an account",
    },
    description: {
      type: "multiLine",
      label: "Description",
      defaultValue: "Sign up to get started with your account.",
    },

    // Form settings
    showNameFields: {
      type: "boolean",
      label: "Show Name Fields",
      defaultValue: true,
      group: "Form Settings",
    },
    firstNamePlaceholder: {
      type: "singleLine",
      label: "First Name Placeholder",
      defaultValue: "First name",
      group: "Form Settings",
    },
    lastNamePlaceholder: {
      type: "singleLine",
      label: "Last Name Placeholder",
      defaultValue: "Last name",
      group: "Form Settings",
    },
    emailPlaceholder: {
      type: "singleLine",
      label: "Email Placeholder",
      defaultValue: "you@example.com",
      group: "Form Settings",
    },
    passwordPlaceholder: {
      type: "singleLine",
      label: "Password Placeholder",
      defaultValue: "Create a password",
      group: "Form Settings",
    },
    confirmPasswordPlaceholder: {
      type: "singleLine",
      label: "Confirm Password Placeholder",
      defaultValue: "Confirm your password",
      group: "Form Settings",
    },
    submitButtonText: {
      type: "singleLine",
      label: "Submit Button Text",
      defaultValue: "Create account",
      group: "Form Settings",
    },
    minPasswordLength: {
      type: "numeric",
      label: "Minimum Password Length",
      defaultValue: 8,
      group: "Form Settings",
    },

    // Terms & Privacy
    showTerms: {
      type: "boolean",
      label: "Show Terms Checkbox",
      defaultValue: true,
      group: "Terms",
    },
    termsText: {
      type: "singleLine",
      label: "Terms Text",
      defaultValue: "I agree to the Terms of Service and Privacy Policy",
      group: "Terms",
    },
    termsUrl: {
      type: "link",
      label: "Terms URL",
      defaultValue: "/terms",
      group: "Terms",
    },
    privacyUrl: {
      type: "link",
      label: "Privacy Policy URL",
      defaultValue: "/privacy",
      group: "Terms",
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
      defaultValue: "Already have an account? Sign in",
      group: "Links",
    },
    loginUrl: {
      type: "link",
      label: "Login URL",
      defaultValue: "/login",
      group: "Links",
    },

    // Redirect
    redirectAfterRegister: {
      type: "link",
      label: "Redirect After Register",
      defaultValue: "/verify-email-pending",
      group: "Redirect",
    },

    // Messages
    successMessage: {
      type: "multiLine",
      label: "Success Message",
      defaultValue: "Account created! Please check your email to verify your account.",
      group: "Messages",
    },
    errorMessage: {
      type: "multiLine",
      label: "Default Error Message",
      defaultValue: "Something went wrong. Please try again.",
      group: "Messages",
    },
    passwordMismatchMessage: {
      type: "singleLine",
      label: "Password Mismatch Message",
      defaultValue: "Passwords do not match.",
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

  pricing: { licenseType: "free" },
});
