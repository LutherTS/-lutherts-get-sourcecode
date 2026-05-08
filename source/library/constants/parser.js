import { parser } from "typescript-eslint";

/* languageOptions */

/** $COMMENT#TSDOC#LIBRARY#CONSTS#PARSER#PUBLIC#TYPESCRIPTANDJSXCOMPATIBLE */
export const typeScriptAndJSXCompatible = /** @type {const} */ ({
  parser,
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
});
