// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import preact from '@astrojs/preact';
import sitemap from '@astrojs/sitemap';

import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  site: 'https://soulmatelabs.github.io/soulsight-site/',
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [preact(), sitemap()],

  adapter: node({
    mode: 'standalone'
  })
});