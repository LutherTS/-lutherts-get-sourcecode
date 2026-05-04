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
    ...successFalse,
    errors: [
      {
        ...typeError,
        message,
        status,
      },
    ],
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
    ...successFalse,
    errors: [
      {
        ...typeWarning,
        message,
        status,
      },
    ],
  }); // (Currently unused. The current rationale is that it is up to the consumer to decide whether to consider the errors as warning or not depending on its own use cases.)
