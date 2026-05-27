import { describe, it } from "node:test";

import { absolutePathSupposedToBeString } from "../../../constants/errors/messages.js";

import { GET_SOURCECODE, ABSOLUTE_PATH } from "../../constants/index.js";

import { assertFailureWithMessage } from "../../utilities/index.js";

/**
 * @typedef {import("../../../typedefs/index.js").GetSourceCode} GetSourceCode
 */

export const inputValidationsSuite = (
  /** @type {GetSourceCode} */ getSourceCode,
) => {
  describe(`${GET_SOURCECODE} - input validations`, () => {
    it(`should error if \`${ABSOLUTE_PATH}\` is not a string`, () => {
      const getSourceCodeResults = getSourceCode(2);
      assertFailureWithMessage(
        getSourceCodeResults,
        absolutePathSupposedToBeString,
      );
    });
  });
};
