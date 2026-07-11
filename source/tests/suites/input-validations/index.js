import { describe, it } from "node:test";

import {
  codeSupposedToBeString,
  absolutePathSupposedToBeString,
  absolutePathSupposedToBeAbsolute,
} from "../../../constants/errors/messages.js";

import {
  GET_SOURCECODE_FROM_CODE,
  GET_SOURCECODE_FROM_PATH,
  CODE,
  ABSOLUTE_PATH,
} from "../../constants/index.js";

import { assertFailureWithMessage } from "../../utilities/index.js";

/**
 * @typedef {import("../../../types/index.ts").GetSourceCodeFromCode} GetSourceCodeFromCode
 * @typedef {import("../../../types/index.ts").GetSourceCodeFromPath} GetSourceCodeFromPath
 */

/* inputValidationsSuite */

export const inputValidationsSuite = (
  /** @type {GetSourceCodeFromCode} */ getSourceCodeFromCode,
  /** @type {GetSourceCodeFromPath} */ getSourceCodeFromPath,
) => {
  describe(`${GET_SOURCECODE_FROM_CODE} - input validations`, () => {
    it(`should error if \`${CODE}\` is not a string`, () => {
      const getSourceCodeFromCodeResults = getSourceCodeFromCode(2);
      assertFailureWithMessage(
        getSourceCodeFromCodeResults,
        codeSupposedToBeString,
      );
    });
  });

  describe(`${GET_SOURCECODE_FROM_PATH} - input validations`, () => {
    it(`should error if \`${ABSOLUTE_PATH}\` is not a string`, () => {
      const getSourceCodeFromPathResults = getSourceCodeFromPath(2);
      assertFailureWithMessage(
        getSourceCodeFromPathResults,
        absolutePathSupposedToBeString,
      );
    });

    it(`should error if \`${ABSOLUTE_PATH}\` is not absolute`, () => {
      const getSourceCodeFromPathResults =
        getSourceCodeFromPath("does-not-exist.js");
      assertFailureWithMessage(
        getSourceCodeFromPathResults,
        absolutePathSupposedToBeAbsolute,
      );
    });
  });
};
