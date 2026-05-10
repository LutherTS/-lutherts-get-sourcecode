import fs from "fs";

import { Linter } from "eslint";

import { errorMessages_errorStatuses } from "../constants/errors/index.js";
import {
  absolutePathIsSupposedToBeAString,
  absolutePathCouldntBeRead,
  jsTsJsxTsxCouldntBeParsed,
} from "../constants/errors/messages.js";

import { successTrue } from "./constants/index.js";
import { typeScriptAndJSXCompatible } from "./constants/parser.js";

import { makeSuccessFalseTypeError } from "./utilities/index.js";

/* Primary export */

/**
 * Gets the ESLint-generated `SourceCode` object of a file from its absolute path.
 *
 * @param absolutePath - The absolute path of the file at hand.
 * @returns The ESLint-generated `SourceCode` object of a file, from which the AST (`sourceCode.ast`) and all comments (`sourceCode.getAllComments()`) can be extracted, inside a `{success: true}` object at its `sourceCode` key. In case of an error, a `{success: false}` object is returned instead.
 */
export const getSourceCode = (/** @type {string} */ absolutePath) => {
  if (typeof absolutePath !== "string")
    return makeSuccessFalseTypeError(
      absolutePathIsSupposedToBeAString,
      errorMessages_errorStatuses[absolutePathIsSupposedToBeAString],
    );

  const linter = new Linter();
  const languageOptions = typeScriptAndJSXCompatible;

  let code = /** @type {string | undefined} */ (undefined);

  try {
    code = fs.readFileSync(absolutePath, "utf8");
  } catch {
    return makeSuccessFalseTypeError(
      absolutePathCouldntBeRead,
      errorMessages_errorStatuses[absolutePathCouldntBeRead],
    );
  }

  linter.verify(code, { languageOptions });
  const sourceCode = linter.getSourceCode();

  if (!sourceCode)
    return makeSuccessFalseTypeError(
      jsTsJsxTsxCouldntBeParsed,
      errorMessages_errorStatuses[jsTsJsxTsxCouldntBeParsed],
    );

  return /** @type {const} */ ({
    sourceCode,
    ...successTrue,
  });
};

/* Secondary exports */

// This library also exports the basic constants ...

export {
  successFalse,
  successTrue,
  typeError,
  typeWarning,
} from "./constants/index.js";
export { typeScriptAndJSXCompatible } from "./constants/parser.js";

export {
  ABSOLUTE_PATH_NOT_STRING,
  ABSOLUTE_PATH_NOT_FOUND,
  SOURCE_CODE_FATAL_SYNTAX,
} from "../constants/errors/statuses.js";

// ... and utilities used across my projects (and from this specific projet when it comes to statuses) for error handling.

export {
  makeSuccessFalseTypeError,
  makeSuccessFalseTypeWarning,
} from "./utilities/index.js";

// Additionally, it showcases how to access a library's comment variables as keys and values.
// For the JS version (typed with literals):
// - `import { commentVariablesData as getSourceCodeCommentVariablesData } from "get-sourcecode";`
// For the JSON version (typed with strings):
// - `import getSourceCodeCommentVariablesData from "get-sourcecode/comments.config.json" with { type: "json" };` // from "get-sourcecode/comments.public.json"

export { resolvedConfigData as commentVariablesData } from "../../comments.config.mjs"; // from "../../comments.public.mjs"
