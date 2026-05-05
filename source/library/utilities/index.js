import { successFalse, typeError, typeWarning } from "../constants/index.js";

/* makeSuccessFalse */

/**
 * Makes a `{success: false}` object with a single error in its errors array of `{type: error}` based on the message it is meant to display and the status it is meant to have.
 * @param message The human-readable message of the error.
 * @param status The static status text of the error.
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
 * Makes a `{success: false}` object with a single error in its errors array of `{type: warning}` based on the message it is meant to display and the status it is meant to have.
 * @param message The human-readable message of the error.
 * @param status The static status text of the error.
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
