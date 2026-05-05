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

/**
 * $COMMENT#JSDOC#DEFS#GETSOURCECODE
 * @param absolutePath $COMMENT#JSDOC#PARAMS#ABSOLUTEPATH
 * @returns $COMMENT#JSDOC#RETURNS#GETSOURCECODE
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

export {
  successFalse,
  successTrue,
  typeError,
  typeWarning,
} from "./constants/index.js";

export {
  makeSuccessFalseTypeError,
  makeSuccessFalseTypeWarning,
} from "./utilities/index.js";
