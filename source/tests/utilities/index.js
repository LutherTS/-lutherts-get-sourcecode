import assert from "node:assert";

import { errorMessages_errorStatuses } from "../../constants/errors/index.js";

/**
 * @typedef {import("../../typedefs/index.js").ErrorMessages_ErrorStatuses__Key} ErrorMessages_ErrorStatuses__Key
 * @typedef {import("../../typedefs/index.js").GetSourceCodeReturnType} GetSourceCodeReturnType
 */

/* assert */

/**
 * Asserts that `getSourceCode` fails when it should.
 *
 * @param getSourceCodeResults - The results of the `getSourceCode` instance called in the test, whose success or failure is evaluated via its `success` key's boolean value.
 * @param expectedMessage - The expected message of the error that should be encountered during failure, from which the status can be inferred.
 * @returns Void.
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
 * Asserts that `getSourceCode` succeeds when it should.
 *
 * @param getSourceCodeResults - The results of the `getSourceCode` instance called in the test, whose success or failure is evaluated via its `success` key's boolean value.
 * @returns Void.
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
