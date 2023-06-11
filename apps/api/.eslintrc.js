module.exports = {
  root: true,
  extends: ["custom/nest"],
  parserOptions: {
    project: "tsconfig.json",
    tsconfigRootDir: __dirname,
    sourceType: "module",
  },
  ignorePatterns: [".eslintrc.js"],
};
