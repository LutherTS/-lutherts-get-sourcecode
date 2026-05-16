import { parser } from "typescript-eslint";

/* languageOptions */

const parserOptions = Object.freeze({
  ecmaFeatures: Object.freeze({
    jsx: true,
  }),
});

/**
 * $COMMENT#TSDOC#SRC#LIB#CONSTS#PARSER#PUBLIC#TYPESCRIPTANDJSXCOMPATIBLE
 * @public
 */
export const typeScriptAndJSXCompatible =
  /** @type {{parser: typeof parser, parserOptions: typeof parserOptions}} */ ({
    parser,
    parserOptions,
  }); // The type needs to be explicit because `CompatibleParser` from "typescript-eslint" is actually internal.
