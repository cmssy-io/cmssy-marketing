import { defineBlock } from "@cmssy/cli/config";

export default defineBlock({
  name: "Docs Terminal",
  description: "Terminal/CLI visualization with commands and output",
  category: "documentation",
  tags: ["docs", "terminal", "cli", "command", "shell", "bash"],

  schema: {
    title: {
      type: "singleLine",
      label: "Window Title",
      placeholder: "e.g., Terminal",
      group: "header",
    },

    commands: {
      type: "repeater",
      label: "Commands",
      group: "commands",
      schema: {
        prompt: {
          type: "singleLine",
          label: "Prompt",
          defaultValue: "$",
        },
        command: {
          type: "singleLine",
          label: "Command",
          required: true,
        },
        output: {
          type: "multiLine",
          label: "Output",
        },
      },
    },

    theme: {
      type: "select",
      label: "Theme",
      options: [
        { value: "dark", label: "Dark" },
        { value: "macos", label: "macOS" },
        { value: "minimal", label: "Minimal" },
      ],
      defaultValue: "macos",
      group: "style",
    },
    showCopyAll: {
      type: "boolean",
      label: "Show Copy All Button",
      defaultValue: true,
      group: "style",
    },
  },
});
