import assert from "node:assert";

import { errorMessages_errorStatuses } from "../../constants/errors/index.js";

/**
 * @typedef {import("../../typedefs/index.js").ErrorMessages_ErrorStatuses__Key} ErrorMessages_ErrorStatuses__Key
 * @typedef {import("../../typedefs/index.js").GetSourceCodeReturnType} GetSourceCodeReturnType
 */

/* assert */

/**
 * $COMMENT#TSDOC#TESTS#DEFS#ASSERTFAILUREWITHMESSAGE
 * @param getSourceCodeResults - $COMMENT#TSDOC#TESTS#PARAMS#GETSOURCECODERESULTS
 * @param expectedMessage - $COMMENT#TSDOC#TESTS#PARAMS#EXPECTEDMESSAGE
 * @returns
 */
export const assertFailureWithMessage =
  /** @template {ErrorMessages_ErrorStatuses__Key} T */ (
    /** @type {GetSourceCodeReturnType} */ getSourceCodeResults,
    /** @type {T} */ expectedMessage,
  ) => {
    assert.strictEqual(getSourceCodeResults.success, false);
    assert.strictEqual(
      getSourceCodeResults.errors.some(
        (e) =>
          e.message === expectedMessage &&
          e.status === errorMessages_errorStatuses[expectedMessage],
      ),
      true,
    );
  };

/**
 * $COMMENT#TSDOC#TESTS#DEFS#ASSERTSUCCESS
 * @param getSourceCodeResults - $COMMENT#TSDOC#TESTS#PARAMS#GETSOURCECODERESULTS
 * @returns
 */
export const assertSuccess = (
  /** @type {GetSourceCodeReturnType} */ getSourceCodeResults,
) => {
  assert.strictEqual(getSourceCodeResults.success, true);
  assert.ok(getSourceCodeResults.sourceCode.ast);
  assert.strictEqual(
    typeof getSourceCodeResults.sourceCode.getAllComments,
    "function",
  );
};
