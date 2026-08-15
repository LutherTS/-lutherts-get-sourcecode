import { makeErrorTypeError } from "@lutherts/error-handling";

import {
  GETSOURCECODEFROMCODE_ERROR_B,
  GETSOURCECODEFROMPATH_ERROR_B,
} from "../../constants/errors";

/* library errors */

/** @public */
export const makeGetSourceCodeFromCodeErrorB = (/** @type {string} */ code) => {
  const message = /** @type {const} */ (`\`code\`: \n${code}`);
  const status = GETSOURCECODEFROMCODE_ERROR_B;

  return makeErrorTypeError(message, status);
};

/** @public */
export const makeGetSourceCodeFromPathErrorB = (
  /** @type {string} */ absolutePath,
) => {
  const message = /** @type {const} */ (`\`absolutePath\`: \n${absolutePath}`);
  const status = GETSOURCECODEFROMPATH_ERROR_B;

  return makeErrorTypeError(message, status);
};
