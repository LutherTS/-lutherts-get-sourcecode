import fs from "fs";

import { Linter } from "eslint";

import { errorMessages_errorStatuses } from "../../constants/errors/index.js";
import {
  absolutePathSupposedToBeString,
  absolutePathCouldntBeRead,
  jsTsJsxTsxCouldntBeParsed,
} from "../../constants/errors/messages.js";

import { successTrue } from "../constants/index.js";
import { typeScriptAndJSXCompatible } from "../constants/parser.js";

import { makeSuccessFalseTypeError } from "./index.js";

/**
 * $COMMENT#TSDOC#SRC#LIB#DEFS#PUBLIC#GETSOURCECODE
 *
 * @param absolutePath - $COMMENT#TSDOC#SRC#LIB#PARAMS#PUBLIC#ABSOLUTEPATH
 * @returns $COMMENT#TSDOC#SRC#LIB#RETURNS#PUBLIC#GETSOURCECODE
 *
 * @public
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
