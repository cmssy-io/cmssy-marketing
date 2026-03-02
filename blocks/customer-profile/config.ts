import { defineBlock } from "@cmssy/cli/config";

export default defineBlock({
  name: "Customer Profile",
  description: "Profile editing form for logged-in customers",
  category: "marketing",
  tags: ["profile", "account", "auth", "form", "customer"],

  schema: {
    // Header section
    heading: {
      type: "singleLine",
      label: "Heading",
      defaultValue: "Your Profile",
    },
    description: {
      type: "multiLine",
      label: "Description",
      defaultValue: "Manage your account information.",
    },

    // Form settings
    firstNameLabel: {
      type: "singleLine",
      label: "First Name Label",
      defaultValue: "First name",
      group: "Form Settings",
    },
    lastNameLabel: {
      type: "singleLine",
      label: "Last Name Label",
      defaultValue: "Last name",
      group: "Form Settings",
    },
    displayNameLabel: {
      type: "singleLine",
      label: "Display Name Label",
      defaultValue: "Display name",
      group: "Form Settings",
    },
    displayNameHelpText: {
      type: "singleLine",
      label: "Display Name Help Text",
      defaultValue: "This is how your name will appear publicly",
      group: "Form Settings",
    },
    phoneLabel: {
      type: "singleLine",
      label: "Phone Label",
      defaultValue: "Phone number",
      group: "Form Settings",
    },
    showAvatarUpload: {
      type: "boolean",
      label: "Show Avatar Upload",
      defaultValue: true,
      group: "Form Settings",
    },
    showPhoneField: {
      type: "boolean",
      label: "Show Phone Field",
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
    displayNamePlaceholder: {
      type: "singleLine",
      label: "Display Name Placeholder",
      defaultValue: "Display name (public)",
      group: "Form Settings",
    },
    phonePlaceholder: {
      type: "singleLine",
      label: "Phone Placeholder",
      defaultValue: "+1 (555) 123-4567",
      group: "Form Settings",
    },
    saveButtonText: {
      type: "singleLine",
      label: "Save Button Text",
      defaultValue: "Save changes",
      group: "Form Settings",
    },
    submitLoadingText: {
      type: "singleLine",
      label: "Submit Loading Text",
      defaultValue: "Saving...",
      group: "Form Settings",
    },

    // Logout
    showLogoutButton: {
      type: "boolean",
      label: "Show Logout Button",
      defaultValue: true,
      group: "Actions",
    },
    logoutButtonText: {
      type: "singleLine",
      label: "Logout Button Text",
      defaultValue: "Sign out",
      group: "Actions",
    },
    logoutRedirectUrl: {
      type: "link",
      label: "Logout Redirect URL",
      defaultValue: "/",
      group: "Actions",
    },

    // Messages
    successMessage: {
      type: "singleLine",
      label: "Success Message",
      defaultValue: "Profile updated successfully!",
      group: "Messages",
    },
    errorMessage: {
      type: "singleLine",
      label: "Default Error Message",
      defaultValue: "Failed to update profile. Please try again.",
      group: "Messages",
    },
    notLoggedInMessage: {
      type: "singleLine",
      label: "Not Logged In Message",
      defaultValue: "Please log in to view your profile.",
      group: "Messages",
    },
    loginUrl: {
      type: "link",
      label: "Login URL",
      defaultValue: "/login",
      group: "Messages",
    },
    loginButtonText: {
      type: "singleLine",
      label: "Login Button Text",
      defaultValue: "Sign in",
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
