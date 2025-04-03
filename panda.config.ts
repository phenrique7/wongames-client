import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [".storybook/*.{tsx}/", "./src/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        fonts: {
          poppins: { value: "var(--font-poppins), sans-serif" },
        },
        colors: {
          wg_pink: { value: "#F231A5" },
          wg_white: { value: "#FAFAFA" },
          wg_black: { value: "#0A0D27" },
          wg_orange: { value: "#F56161" },
          wg_green_mn: { value: "#3CD3C1" },
          wg_green_dk: { value: "#35BDAC" },
          charcoal_onyx: { value: "#212529" },
          shadow_gray: { value: "#616061" },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});
