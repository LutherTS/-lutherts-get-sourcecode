import { successFalse, typeError, typeWarning } from "../constants/index.js";

/* makeSuccessFalse */

/**
 *
 * @template {string} T
 * @template {string} U
 * @param {T} message
 * @param {U} status
 */
export const makeSuccessFalseTypeError = (message, status) =>
  /** @type {const} */ ({
    errors: [
      {
        message,
        status,
        ...typeError,
      },
    ],
    ...successFalse,
  });

/**
 *
 * @template {string} T
 * @template {string} U
 * @param {T} message
 * @param {U} status
 */
export const makeSuccessFalseTypeWarning = (message, status) =>
  /** @type {const} */ ({
    errors: [
      {
        message,
        status,
        ...typeWarning,
      },
    ],
    ...successFalse,
  }); // (Currently unused. The current rationale is that it is up to the consumer to decide whether to consider the errors as warning or not depending on its own use cases.)
