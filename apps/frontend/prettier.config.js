const defaultConfig = require("../../prettier.config.js");

/** @type {import("prettier").Config} */
module.exports = {
  ...defaultConfig,
  plugins: ["prettier-plugin-tailwindcss"],
};
