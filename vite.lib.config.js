import { defineConfig } from "vite";
import path from "path";
import dts from "vite-plugin-dts";

export default defineConfig({
  publicDir: false,
  build: {
    emptyOutDir: true,
    minify: false,
    sourcemap: true,
    lib: {
      entry: {
        main: path.resolve(__dirname, "src/main.ts"),
        global: path.resolve(__dirname, "src/global.ts"),
        modal: path.resolve(__dirname, "src/components/modal.ts"),
        offcanvas: path.resolve(__dirname, "src/components/offcanvas.ts"),
      },
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      output: [
        {
          format: "es",
          dir: "lib/esm",
          entryFileNames: (chunkInfo) =>
            chunkInfo.facadeModuleId?.includes("components")
              ? "components/[name].js"
              : "[name].js",
          chunkFileNames: "chunks/[name].js",
        },
        {
          format: "cjs",
          dir: "lib/cjs",
          entryFileNames: (chunkInfo) =>
            chunkInfo.facadeModuleId?.includes("components")
              ? "components/[name].js"
              : "[name].js",
          chunkFileNames: "chunks/[name].js",
        },
      ],
    },
  },
  plugins: [
    dts({
      outDir: ["lib/cjs", "lib/esm"],
      include: ["src"],
    }),
  ],
});
