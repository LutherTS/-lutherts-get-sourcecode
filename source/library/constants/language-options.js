import { parser } from "typescript-eslint";

/* languageOptions */

/**
 * $COMMENT#TSDOC#SRC#LIB#CONSTS#PARSER#PUBLIC#TYPESCRIPTANDJSXCOMPATIBLE
 * @public
 */
export const typeScriptAndJSXCompatible = /** @type {const} */ ({
  // parser: /** @type {typeof parser} */ (parser), // The type needs to be explicit because `CompatibleParser` from "typescript-eslint" is actually internal.
  parser: /** @type {unknown} */ (parser), // You know what? Just like with vscode, let's just simplify this to unknown.
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
});
