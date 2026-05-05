import { successFalse, typeError, typeWarning } from "../constants/index.js";

/* makeSuccessFalse */

/**
 * $COMMENT#JSDOC#DEFS#PUBLIC#MAKESUCCESSFALSETYPEERROR
 * @param message $COMMENT#JSDOC#PARAMS#PUBLIC#MESSAGE
 * @param status $COMMENT#JSDOC#PARAMS#PUBLIC#STATUS
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
 * $COMMENT#JSDOC#DEFS#PUBLIC#MAKESUCCESSFALSETYPEWARNING
 * @param message $COMMENT#JSDOC#PARAMS#PUBLIC#MESSAGE
 * @param status $COMMENT#JSDOC#PARAMS#PUBLIC#STATUS
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
