import { successFalse, typeError, typeWarning } from "../constants/index.js";

/* makeSuccessFalse */

/**
 *
 * @param message
 * @param status
 */
export const makeSuccessFalseTypeError =
  /** @template {string} T, @template {string} U */ (
    /** @type {T} */ message,
    /** @type {U} */ status,
  ) =>
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
 * @param message
 * @param status
 */
export const makeSuccessFalseTypeWarning =
  /** @template {string} T, @template {string} U */ (
    /** @type {T} */ message,
    /** @type {U} */ status,
  ) =>
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
