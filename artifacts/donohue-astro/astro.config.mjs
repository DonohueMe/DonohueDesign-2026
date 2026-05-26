import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://donahuedesign.com',
  base: process.env.ASTRO_BASE ?? '/',
  devToolbar: { enabled: false },
  integrations: [
    tailwind({ applyBaseStyles: false }),
  ],
  vite: {
    server: {
      allowedHosts: true,
    },
  },
});
