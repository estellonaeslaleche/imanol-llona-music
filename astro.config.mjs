import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import react from "@astrojs/react";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  server: {
    host: true, // Esto permite que el servidor escuche en la red local
    port: 4321, // Puedes cambiar el puerto si prefieres uno diferente
  },
  integrations: [tailwind(), svelte(), react()],
  output: 'server',
  adapter: vercel({
    webAnalytics: { enabled: true }
  })
});