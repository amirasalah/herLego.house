import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel/serverless';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://herlego.house/',
  integrations: [mdx(), sitemap(), tailwind()],
  output: "server",
  adapter: vercel({
    runtime: "node",
    webAnalytics: {
      enabled: true,
    },
  })
}); 