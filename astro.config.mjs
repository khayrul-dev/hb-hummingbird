// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  srcDir: "./apps",
  integrations: [
    starlight({
      title: "Hummingbird",
      components: {
        MarkdownContent: "./apps/src/components/MarkdownContent.astro",
      },
      social: {
        github: "https://github.com/withastro/starlight",
      },
      head: [
        // {
        //   tag: "script",
        //   attrs: {
        //     src: "./apps/src/js/offcanvas.ts",
        //     type: "module",
        //     defer: true,
        //   },
        // },
      ],
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Example Guide", slug: "guides/example" },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
      customCss: ["./apps/tailwind.css"],
    }),
    tailwind({ applyBaseStyles: false }),
  ],
});
