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
    });
