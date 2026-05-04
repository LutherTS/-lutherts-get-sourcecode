import assert from "node:assert";

import { errorMessages_errorStatuses } from "../../constants/errors/index.js";

/**
 * @typedef {import("../../typedefs/index.js").ErrorMessages_ErrorStatuses__Key} ErrorMessages_ErrorStatuses__Key
 * @typedef {import("../../typedefs/index.js").GetSourceCodeReturnType} GetSourceCodeReturnType
 */

/* assert */

/**
 *
 * @template {ErrorMessages_ErrorStatuses__Key} T
 * @param {GetSourceCodeReturnType} getSourceCodeResults
 * @param {T} expectedMessage
 * @returns
 */
export const assertFailure = (getSourceCodeResults, expectedMessage) => {
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
 * @param {GetSourceCodeReturnType} getSourceCodeResults
 * @returns
 */
export const assertSuccess = (getSourceCodeResults) => {
  assert.strictEqual(getSourceCodeResults.success, true);
  assert.ok(getSourceCodeResults.sourceCode.ast);
  assert.strictEqual(
    typeof getSourceCodeResults.sourceCode.getAllComments,
    "function",
  );
};
