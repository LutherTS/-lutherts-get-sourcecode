import assert from "node:assert";

import { errorMessages_errorStatuses } from "../../constants/errors/index.js";

/**
 * @typedef {import("../../typedefs/index.js").GetSourceCodeReturnType} GetSourceCodeReturnType
 *
 * @typedef {import("../../typedefs/index.js").ErrorMessages_ErrorStatuses__Key} ErrorMessages_ErrorStatuses__Key
 */

/* assert */

/**
 * $COMMENT#TSDOC#SRC#TESTS#DEFS#UTILS#ASSERTFAILUREWITHMESSAGE
 *
 * @param getSourceCodeResults - $COMMENT#TSDOC#SRC#TESTS#PARAMS#UTILS#GETSOURCECODERESULTS
 * @param expectedMessage - $COMMENT#TSDOC#SRC#TESTS#PARAMS#UTILS#EXPECTEDMESSAGE
 * @returns $COMMENT#TSDOC#SRC#TESTS#RETURNS#UTILS#ASSERTFAILUREWITHMESSAGE
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
 * $COMMENT#TSDOC#SRC#TESTS#DEFS#UTILS#ASSERTSUCCESS
 *
 * @param getSourceCodeResults - $COMMENT#TSDOC#SRC#TESTS#PARAMS#UTILS#GETSOURCECODERESULTS
 * @returns $COMMENT#TSDOC#SRC#TESTS#RETURNS#UTILS#ASSERTFAILUREWITHMESSAGE
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
