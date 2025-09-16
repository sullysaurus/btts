// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://backtothestart.band',
  integrations: [tailwind()],
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },
});
