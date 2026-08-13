import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import mdx from '@astrojs/mdx';

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: 'https://aruzdh.dev',
  integrations: [sitemap(), mdx()],
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Plus Jakarta Sans",
      cssVariable: "--font-plus-jakarta-sans",
      weights: ['200..800'],
      styles: ['normal', 'italic'],
    },
  ],

  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },

  adapter: cloudflare()
});
