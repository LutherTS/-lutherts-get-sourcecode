import { parser } from "typescript-eslint";

/* languageOptions */

/** `languageOptions` object for instances of the `ESLint` and `Linter` classes enabling the linting of TypeScript and JSX (React) files. */
export const typeScriptAndJSXCompatible = /** @type {const} */ ({
  parser,
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
});
