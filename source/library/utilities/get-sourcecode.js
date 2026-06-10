import fs from "fs";

import {
  successTrue,
  makeSuccessFalseTypeError,
} from "@lutherts/error-handling";

import { Linter } from "eslint";

import { errorMessages_errorStatuses } from "../../constants/errors/index.js";
import {
  absolutePathSupposedToBeString,
  absolutePathCouldntBeRead,
  jsTsJsxTsxCouldntBeParsed,
} from "../../constants/errors/messages.js";

import { typeScriptAndJSXCompatible } from "../constants/parser.js";

/* getSourceCode */

/**
 * $COMMENT#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#GETSOURCECODE
 *
 * @param absolutePath - $COMMENT#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#ABSOLUTEPATH
 * @returns $COMMENT#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#GETSOURCECODE
 *
 * @public
 */
export const getSourceCode = /** @template {string} T */ (
  /** @type {T} */ absolutePath,
) => {
  // input validations

  if (typeof absolutePath !== "string")
    return makeSuccessFalseTypeError(
      absolutePathSupposedToBeString,
      errorMessages_errorStatuses[absolutePathSupposedToBeString],
    );

  // input operations

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
