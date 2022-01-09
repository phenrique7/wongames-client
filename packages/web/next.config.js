const { withGlobalCss } = require('next-global-css');

const withConfig = withGlobalCss();

/** @type {import('next').NextConfig} */
module.exports = withConfig({
  /* Next.js config options here */
  reactStrictMode: true,
});
