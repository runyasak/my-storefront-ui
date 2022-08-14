import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { join } from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      {
        find: /~(.+)/,
        replacement: join(process.cwd(), "node_modules/$1"),
      },
      {
        find: /@\//,
        replacement: join(process.cwd(), "./src") + "/",
      },
    ],
  },
});
