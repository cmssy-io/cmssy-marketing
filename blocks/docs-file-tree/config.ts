import { defineBlock } from "@cmssy/cli/config";

export default defineBlock({
  name: "Docs File Tree",
  description: "File and folder tree visualization with icons and highlights",
  category: "documentation",
  tags: ["docs", "file", "tree", "folder", "structure", "project"],
  schema: {
    title: {
      type: "singleLine",
      label: "Title",
      placeholder: "Project Structure",
      group: "content",
    },
    tree: {
      type: "multiLine",
      label: "Tree",
      required: true,
      placeholder:
        "src/\n├── index.ts\n├── components/\n│   └── App.tsx\n└── styles/\n    └── main.css",
      helpText: "Paste a plaintext tree using ├── └── │ characters",
      group: "content",
    },
    highlights: {
      type: "singleLine",
      label: "Highlighted Files",
      placeholder: "src/index.ts,config.ts",
      helpText: "Comma-separated file names to highlight",
      group: "content",
    },
    showIcons: {
      type: "boolean",
      label: "Show File Icons",
      defaultValue: true,
      group: "style",
    },
  },
});
