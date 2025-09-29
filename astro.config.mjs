// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import node from '@astrojs/node';

import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://deployfa.st',
  vite: {
    plugins: [tailwindcss()]
  },
  output: 'server',
  server: {
    host: '0.0.0.0'
},

  adapter: node({
    mode: 'standalone'
  }),

  integrations: [mdx(), sitemap()]
});