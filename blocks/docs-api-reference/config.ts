import { defineBlock } from "@cmssy/cli/config";

export default defineBlock({
  name: "Docs API Reference",
  description:
    "API endpoint documentation with method badge, parameters, and code examples",
  category: "documentation",
  tags: ["docs", "api", "reference", "endpoint", "graphql", "rest"],
  schema: {
    title: {
      type: "singleLine",
      label: "Title",
      placeholder: "getPages",
      group: "header",
    },
    description: {
      type: "richText",
      label: "Description",
      group: "header",
    },
    method: {
      type: "select",
      label: "Method",
      required: true,
      options: [
        { value: "query", label: "Query" },
        { value: "mutation", label: "Mutation" },
        { value: "subscription", label: "Subscription" },
        { value: "GET", label: "GET" },
        { value: "POST", label: "POST" },
        { value: "PUT", label: "PUT" },
        { value: "DELETE", label: "DELETE" },
      ],
      defaultValue: "query",
      group: "header",
    },
    endpoint: {
      type: "singleLine",
      label: "Endpoint / Operation Name",
      placeholder: "/api/graphql or getPages",
      group: "header",
    },
    auth: {
      type: "select",
      label: "Authentication",
      options: [
        { value: "required", label: "Required" },
        { value: "optional", label: "Optional" },
        { value: "none", label: "None" },
      ],
      defaultValue: "required",
      group: "header",
    },
    parameters: {
      type: "repeater",
      label: "Parameters",
      group: "parameters",
      schema: {
        name: {
          type: "singleLine",
          label: "Name",
          required: true,
        },
        type: {
          type: "singleLine",
          label: "Type",
          required: true,
        },
        required: {
          type: "boolean",
          label: "Required",
          defaultValue: false,
        },
        description: {
          type: "singleLine",
          label: "Description",
        },
      },
    },
    requestExample: {
      type: "multiLine",
      label: "Request Example",
      placeholder: "query GetPages {\n  pages {\n    id\n    title\n  }\n}",
      group: "examples",
    },
    requestLanguage: {
      type: "select",
      label: "Request Language",
      options: [
        { value: "graphql", label: "GraphQL" },
        { value: "bash", label: "cURL" },
        { value: "typescript", label: "TypeScript" },
        { value: "javascript", label: "JavaScript" },
        { value: "json", label: "JSON" },
      ],
      defaultValue: "graphql",
      group: "examples",
    },
    responseExample: {
      type: "multiLine",
      label: "Response Example",
      placeholder: '{\n  "data": {\n    "pages": []\n  }\n}',
      group: "examples",
    },
    responseLanguage: {
      type: "select",
      label: "Response Language",
      options: [
        { value: "json", label: "JSON" },
        { value: "typescript", label: "TypeScript" },
        { value: "javascript", label: "JavaScript" },
      ],
      defaultValue: "json",
      group: "examples",
    },
  },
});
