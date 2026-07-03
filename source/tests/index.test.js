import { describe } from "node:test";

import {
  getSourceCodeFromCode,
  getSourceCodeFromPath,
  typeScriptAndJSXCompatible,
  noInlineConfig,
  // } from "../../source/library/index.js"; // dev
} from "../../tsdown/library/index.mjs"; // prod

import {
  GET_SOURCECODE_FROM_CODE,
  GET_SOURCECODE_FROM_PATH,
} from "./constants/index.js";

import { initialSuite } from "./suites/initial/index.js";
import { inputValidationsSuite } from "./suites/input-validations/index.js";
import { inputOperationsSuite } from "./suites/input-operations/index.js";
import { languageOptionsSuite } from "./suites/language-options/index.js";
import { linterOptionsSuite } from "./suites/linter-options/index.js";

describe(`${GET_SOURCECODE_FROM_CODE} & ${GET_SOURCECODE_FROM_PATH}`, () => {
  // initial tests
  initialSuite(getSourceCodeFromCode, getSourceCodeFromPath);

  // input validations tests
  inputValidationsSuite(getSourceCodeFromCode, getSourceCodeFromPath);

  // input operations tests
  inputOperationsSuite(getSourceCodeFromCode, getSourceCodeFromPath);
});

languageOptionsSuite(typeScriptAndJSXCompatible);
linterOptionsSuite(noInlineConfig);
