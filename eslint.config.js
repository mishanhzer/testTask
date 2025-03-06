import pluginJs from "@eslint/js";

export default [
  pluginJs.configs.recommended,
  {
    extends: ["some-other-config-you-use", "prettier"],
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "warn",
    },
  },
];
