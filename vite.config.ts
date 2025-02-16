import path from "path";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/postcss";
import dts from "vite-plugin-dts";

export default defineConfig({
  publicDir: false,
  build: {
    emptyOutDir: true,
    sourcemap: true,
    outDir: "dist",
    minify: "terser",
    lib: {
      entry: path.resolve(__dirname, "src/main.ts"),
      name: "Hummingbird",
      fileName: "hummingbird",
    },
    rollupOptions: {
      output: [
        {
          format: "es",
          entryFileNames: "hummingbird.js",
        },
        {
          format: "umd",
          entryFileNames: "hummingbird.min.js",
          name: "Hummingbird",
        },
      ],
    },
  },
  plugins: [
    dts({
      insertTypesEntry: true,
      include: [path.resolve(__dirname, "src/*")],
    }),
  ],
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
});
