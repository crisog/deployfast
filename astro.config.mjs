// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import node from '@astrojs/node';

import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

import react from '@astrojs/react';

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
  experimental: {
    fonts: [{
      name: "JetBrains Mono",
      cssVariable: "--font-jetbrains-mono",
      provider: fontProviders.fontsource(),
      weights: [400, 500, 600, 700],
      styles: ["normal"],
      subsets: ["latin"],
      fallbacks: ["monospace"],
    }]
  },
  adapter: node({
    mode: 'standalone'
  }),

  integrations: [mdx(), sitemap(), react()]
});