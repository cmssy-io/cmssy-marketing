// Auto-generated from config.ts
// DO NOT EDIT - This file is automatically regenerated

export interface BlockContent {
  title?: string;
  description?: string;
  method: "query" | "mutation" | "subscription" | "GET" | "POST" | "PUT" | "DELETE";
  endpoint?: string;
  auth?: "required" | "optional" | "none";
  parameters?: Array<{
    name: string;
    type: string;
    required?: boolean;
    description?: string;
  }>;
  requestExample?: string;
  requestLanguage?: "graphql" | "bash" | "typescript" | "javascript" | "json";
  responseExample?: string;
  responseLanguage?: "json" | "typescript" | "javascript";
}
