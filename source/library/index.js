import fs from "fs";

import { Linter } from "eslint";
import { parser } from "typescript-eslint";

import { errorMessages_errorStatuses } from "../constants/errors/index.js";
import {
  absolutePathCouldntBeRead,
  jsTsJsxTsxCouldntBeParsed,
} from "../constants/errors/messages.js";

import { successTrue } from "./constants/index.js";

import { makeSuccessFalseTypeError } from "./utilities/index.js";

/**
 * @typedef {import("../typedefs/index.js").LanguageOptions} LanguageOptions
 * @typedef {import("../typedefs/index.js").Linter} Linter
 */

const typeScriptAndJSXCompatible = /** @type {const} */ ({
  parser,
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
});

/**
 *
 * @param {string} absolutePath
 * @param {Object} options
 * @param {LanguageOptions} [options.languageOptions]
 * @param {Linter} [options.linter]
 * @returns
 */
export const getSourceCode = (
  absolutePath,
  { languageOptions = typeScriptAndJSXCompatible, linter = new Linter() } = {},
) => {
  /** @type {string} */
  let code;

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
    ...successTrue,
    sourceCode,
  });
};
