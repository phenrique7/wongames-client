import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx,astro}"],

  // Files to exclude
  exclude: [],

  globalVars: {
    "--font-poppins": "Poppins",
  },

  globalFontface: {
    Poppins: [
      {
        src: 'url("/fonts/poppins-v22-latin-regular.woff2") format("woff2"); ',
        fontWeight: 400,
        fontStyle: "normal",
        fontDisplay: "swap",
      },{
        src: 'url("/fonts/poppins-v22-latin-500.woff2") format("woff2");',
        fontWeight: 500,
        fontStyle: "normal",
        fontDisplay: "swap",
      },
      {
        src: 'url("/fonts/poppins-v22-latin-600.woff2") format("woff2");',
        fontWeight: 600,
        fontStyle: "normal",
        fontDisplay: "swap",
      },
      {
        src: 'url("/fonts/poppins-v22-latin-700.woff2") format("woff2");',
        fontWeight: 700,
        fontStyle: "normal",
        fontDisplay: "swap",
      },
    ],
  },

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
