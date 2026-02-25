// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import preact from '@astrojs/preact';
import sitemap from '@astrojs/sitemap';

// import node from '@astrojs/node'; // Uncomment this to activate the on-site demo

// https://astro.build/config
export default defineConfig({
  site: 'https://soulmatelabs.github.io/soulsight-site/',
  output: 'static', // Remove this once the dynamic on-site demo is live
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [preact(), sitemap()],

  /* Uncomment this to activate the on-site demo
  adapter: node({
    mode: 'standalone'
  })
  */
});