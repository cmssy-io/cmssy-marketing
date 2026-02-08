import { defineBlock } from "@cmssy/cli/config";

export default defineBlock({
  name: "Login Form",
  description: "Customer login form with email and password authentication",
  category: "marketing",
  tags: ["login", "auth", "form", "customer"],

  schema: {
    // Header section
    heading: {
      type: "singleLine",
      label: "Heading",
      defaultValue: "Welcome back",
    },
    description: {
      type: "multiLine",
      label: "Description",
      defaultValue: "Sign in to your account to continue.",
    },

    // Form settings
    emailPlaceholder: {
      type: "singleLine",
      label: "Email Placeholder",
      defaultValue: "you@example.com",
      group: "Form Settings",
    },
    passwordPlaceholder: {
      type: "singleLine",
      label: "Password Placeholder",
      defaultValue: "Enter your password",
      group: "Form Settings",
    },
    submitButtonText: {
      type: "singleLine",
      label: "Submit Button Text",
      defaultValue: "Sign in",
      group: "Form Settings",
    },
    showRememberMe: {
      type: "boolean",
      label: "Show Remember Me",
      defaultValue: true,
      group: "Form Settings",
    },
    rememberMeLabel: {
      type: "singleLine",
      label: "Remember Me Label",
      defaultValue: "Remember me",
      group: "Form Settings",
    },

    // Links
    showForgotPassword: {
      type: "boolean",
      label: "Show Forgot Password Link",
      defaultValue: true,
      group: "Links",
    },
    forgotPasswordText: {
      type: "singleLine",
      label: "Forgot Password Text",
      defaultValue: "Forgot your password?",
      group: "Links",
    },
    forgotPasswordUrl: {
      type: "link",
      label: "Forgot Password URL",
      defaultValue: "/forgot-password",
      group: "Links",
    },
    showRegisterLink: {
      type: "boolean",
      label: "Show Register Link",
      defaultValue: true,
      group: "Links",
    },
    registerLinkText: {
      type: "singleLine",
      label: "Register Link Text",
      defaultValue: "Don't have an account? Sign up",
      group: "Links",
    },
    registerUrl: {
      type: "link",
      label: "Register URL",
      defaultValue: "/register",
      group: "Links",
    },

    // Redirect
    redirectAfterLogin: {
      type: "link",
      label: "Redirect After Login",
      defaultValue: "/",
      group: "Redirect",
    },

    // Messages
    successMessage: {
      type: "multiLine",
      label: "Success Message",
      defaultValue: "Login successful! Redirecting...",
      group: "Messages",
    },
    errorMessage: {
      type: "multiLine",
      label: "Default Error Message",
      defaultValue: "Invalid email or password. Please try again.",
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
