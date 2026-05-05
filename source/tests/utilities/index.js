import assert from "node:assert";

import { errorMessages_errorStatuses } from "../../constants/errors/index.js";

/**
 * @typedef {import("../../typedefs/index.js").ErrorMessages_ErrorStatuses__Key} ErrorMessages_ErrorStatuses__Key
 * @typedef {import("../../typedefs/index.js").GetSourceCodeReturnType} GetSourceCodeReturnType
 */

/* assert */

/**
 *
 * @param getSourceCodeResults
 * @param expectedMessage
 * @returns
 */
export const assertFailure =
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
 *
 * @param getSourceCodeResults
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
