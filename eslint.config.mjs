import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "warn",
      indent: "off",
      quotes: "off",
      "padded-blocks": "off",
      "comma-dangle": "off",
      curly: "off",
      "object-curly-spacing": "off",
      "no-tabs": 0,
      semi: [2, "always"],
      "space-before-function-paren": [
        "error",
        {
          anonymous: "always",
          named: "never",
          asyncArrow: "always",
        },
      ],
      "no-trailing-spaces": [2, { skipBlankLines: true }],
      camelcase: "off",
      "no-console": "error",
    },
  },
];
