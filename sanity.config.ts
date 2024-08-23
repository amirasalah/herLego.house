// ./sanity.config.ts
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { blogType } from "./sanity/schemaTypes/blog";

export default defineConfig({
    projectId: "awebz0v4",
    dataset: "production",
    plugins: [structureTool()],
    schema: {
        types: [blogType]
    }
});