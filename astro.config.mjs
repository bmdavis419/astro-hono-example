import path from "node:path";
import url from "node:url";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/serverless";
import { defineConfig } from "astro/config";
import db from "@astrojs/db";
import tailwind from "@astrojs/tailwind";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
  integrations: [
    db(),
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
  ],
  vite: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  },
  output: "server",
  adapter: vercel(),
});
