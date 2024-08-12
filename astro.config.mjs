import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sanity from "@sanity/astro";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://herlego.house/',
  integrations: [tailwind(), sanity({
    projectId: "awebz0v4",
    dataset: "production",
    useCdn: false,
    studioBasePath: "/studio"
  }), react()]
});