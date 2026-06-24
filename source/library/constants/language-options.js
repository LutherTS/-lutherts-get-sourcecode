import { parser } from "typescript-eslint";

/* languageOptions */

/**
 * $COMMENT#TSDOC#SRC#LIB#CONSTS#PARSER#PUBLIC#TYPESCRIPTANDJSXCOMPATIBLE
 * @public
 */
export const typeScriptAndJSXCompatible = /** @type {const} */ ({
  parser: /** @type {typeof parser} */ (parser), // The type needs to be explicit because `CompatibleParser` from "typescript-eslint" is actually internal.
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
});
