import { successFalse, typeError, typeWarning } from "../constants/index.js";

/* makeSuccessFalse */

/**
 * $COMMENT#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#MAKESUCCESSFALSETYPEERROR
 *
 * @param message - $COMMENT#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#MESSAGE
 * @param status - $COMMENT#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#STATUS
 * @returns $COMMENT#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#MAKESUCCESSFALSETYPEERROR
 *
 * @public
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
 * $COMMENT#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#MAKESUCCESSFALSETYPEWARNING
 *
 * @param message - $COMMENT#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#MESSAGE
 * @param status - $COMMENT#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#STATUS
 * @returns $COMMENT#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#MAKESUCCESSFALSETYPEWARNING
 *
 * @public
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
