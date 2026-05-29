// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { nitro } from "nitro/vite"; // ← add this

export default defineConfig({
  plugins: [
    tailwindcss(),
    nitro(), // ← add this
    tanstackStart(),
    tanstackRouter({
      plugin: {
        hmr: {
          style: "webpack",
        },
      },
    }),
    react(),
    tsconfigPaths({
      root: process.cwd(),
    }),
  ],
});
