import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://aruzdh.dev',
  integrations: [sitemap()],
  adapter: cloudflare(),
});