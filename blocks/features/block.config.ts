import { defineBlock } from "cmssy-cli/config";

export default defineBlock({
  name: "Features",
  description: "",
  category: "marketing",
  tags: ["marketing", "features"],

  schema: {
    heading: {
      type: "singleLine",
      label: "Heading",
      required: true,
      defaultValue: "Heading",
    },
    description: {
      type: "multiLine",
      label: "Description",
      placeholder: "Enter description",
      defaultValue: "Description",
    },
  },

  pricing: { licenseType: "free" },
});
