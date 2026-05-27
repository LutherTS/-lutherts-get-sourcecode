import { describe } from "node:test";

// import { getSourceCode } from "../../source/library/index.js"; // dev
import { getSourceCode } from "../../tsdown/index.mjs"; // prod

import { GET_SOURCECODE } from "./constants/index.js";

import { initialSuite } from "./suites/initial/index.js";
import { inputValidationsSuite } from "./suites/input-validations/index.js";
import { inputOperationsSuite } from "./suites/input-operations/index.js";

describe(GET_SOURCECODE, () => {
  // initial tests
  initialSuite(getSourceCode);

  // input validations tests
  inputValidationsSuite(getSourceCode);

  // input operations tests
  inputOperationsSuite(getSourceCode);
});
