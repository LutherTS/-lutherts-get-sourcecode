import { successFalse, typeError, typeWarning } from "../constants/index.js";

/* makeSuccessFalse */

/**
 * $COMMENT#TSDOC#LIBRARY#DEFS#PUBLIC#MAKESUCCESSFALSETYPEERROR
 *
 * @param message - $COMMENT#TSDOC#LIBRARY#PARAMS#PUBLIC#MESSAGE
 * @param status - $COMMENT#TSDOC#LIBRARY#PARAMS#PUBLIC#STATUS
 * @returns $COMMENT#TSDOC#LIBRARY#RETURNS#PUBLIC#MAKESUCCESSFALSETYPEERROR
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
 * $COMMENT#TSDOC#LIBRARY#DEFS#PUBLIC#MAKESUCCESSFALSETYPEWARNING
 *
 * @param message - $COMMENT#TSDOC#LIBRARY#PARAMS#PUBLIC#MESSAGE
 * @param status - $COMMENT#TSDOC#LIBRARY#PARAMS#PUBLIC#STATUS
 * @returns $COMMENT#TSDOC#LIBRARY#RETURNS#PUBLIC#MAKESUCCESSFALSETYPEWARNING
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
