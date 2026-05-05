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
 * $COMMENT#TSDOC#CORE#DEFS#PUBLIC#GETSOURCECODE
 * @param absolutePath $COMMENT#TSDOC#CORE#PARAMS#PUBLIC#ABSOLUTEPATH
 * @returns $COMMENT#TSDOC#CORE#RETURNS#PUBLIC#GETSOURCECODE
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

// ... and utilities used across my projects for error handling.

export {
  makeSuccessFalseTypeError,
  makeSuccessFalseTypeWarning,
} from "./utilities/index.js";

// Additionally, it showcases how to access a library's comment variables as keys and values.
// For the JS version (typed with literals):
// - `import { commentVariablesResolvedConfigData as getSourceCodeCommentVariablesDataJS } from "get-sourcecode";`
// For the JSON version (typed with strings):
// - `import getSourceCodeCommentVariablesDataJSON from "get-sourcecode/comments.config.json" with { type: "json" };`

export { resolvedConfigData as commentVariablesResolvedConfigData } from "../../comments.config.mjs";
