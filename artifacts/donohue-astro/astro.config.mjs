import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import alpinejs from '@astrojs/alpinejs';

export default defineConfig({
  site: 'https://donahuedesign.com',
  base: process.env.ASTRO_BASE ?? '/',
  devToolbar: { enabled: false },
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap(),
    alpinejs(),
  ],
  vite: {
    server: {
      allowedHosts: true,
    },
  },
});
