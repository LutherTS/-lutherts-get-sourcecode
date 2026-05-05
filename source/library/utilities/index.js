import { successFalse, typeError, typeWarning } from "../constants/index.js";

/* makeSuccessFalse */

/**
 * $COMMENT#JSDOC#DEFS#MAKESUCCESSFALSETYPEERROR
 * @param message $COMMENT#JSDOC#PARAMS#MESSAGE
 * @param status $COMMENT#JSDOC#PARAMS#STATUS
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
 * $COMMENT#JSDOC#DEFS#MAKESUCCESSFALSETYPEWARNING
 * @param message $COMMENT#JSDOC#PARAMS#MESSAGE
 * @param status $COMMENT#JSDOC#PARAMS#STATUS
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
