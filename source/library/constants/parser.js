import { parser } from "typescript-eslint";

/* languageOptions */

export const typeScriptAndJSXCompatible = /** @type {const} */ ({
  parser,
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
});
