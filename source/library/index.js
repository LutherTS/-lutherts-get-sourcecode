import fs from "fs";

import { Linter } from "eslint";

import { errorMessages_errorStatuses } from "../constants/errors/index.js";
import {
  absolutePathSupposedToBeString,
  absolutePathCouldntBeRead,
  jsTsJsxTsxCouldntBeParsed,
} from "../constants/errors/messages.js";

import { successTrue } from "./constants/index.js";
import { typeScriptAndJSXCompatible } from "./constants/parser.js";

import { makeSuccessFalseTypeError } from "./utilities/index.js";

/* primary export */

/**
 * $COMMENT#TSDOC#SRC#LIB#DEFS#PUBLIC#GETSOURCECODE
 *
 * @param absolutePath - $COMMENT#TSDOC#SRC#LIB#PARAMS#PUBLIC#ABSOLUTEPATH
 * @returns $COMMENT#TSDOC#SRC#LIB#RETURNS#PUBLIC#GETSOURCECODE
 */
export const getSourceCode = /** @template {string} T */ (
  /** @type {T} */ absolutePath,
) => {
  if (typeof absolutePath !== "string")
    return makeSuccessFalseTypeError(
      absolutePathSupposedToBeString,
      errorMessages_errorStatuses[absolutePathSupposedToBeString],
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

/* secondary exports */

// This library also exports the basic constants (along with its parser) ...

export {
  successFalse,
  successTrue,
  typeError,
  typeWarning,
} from "./constants/index.js";
export { typeScriptAndJSXCompatible } from "./constants/parser.js";

// ... and utilities used across my projects for error handling.

export {
  makeSuccessFalseTypeError,
  makeSuccessFalseTypeWarning,
} from "./utilities/index.js";

// Additionally, it showcases how to access a library's comment variables as keys and values.
// For the JS version (typed with literals):
// - `import { commentVariablesData as getSourceCodeCommentVariablesData } from "get-sourcecode";`
// For the JSON version (typed with strings):
// - `import getSourceCodeCommentVariablesData from "get-sourcecode/comments.config.public.json" with { type: "json" };`

export { commentVariablesData } from "../comment-variables/public.js";
// export { resolvedConfigData as commentVariablesData } from "../../comments.config.public.mjs";
