import { typeError } from "@lutherts/error-handling";

import {
  codeSupposedToBeString,
  absolutePathSupposedToBeString,
  absolutePathSupposedToBeAbsolute,
  absolutePathCouldntBeRead,
  jsTsJsxTsxCouldntBeParsed,
} from "./messages.js";
import {
  CODE_NOT_STRING,
  ABSOLUTEPATH_NOT_STRING,
  ABSOLUTEPATH_NOT_ABSOLUTE,
  ABSOLUTE_PATH_NOT_FOUND,
  SOURCE_CODE_FATAL_SYNTAX,
} from "./statuses.js";

/* error messages to error statuses */

export const errorMessages_errorStatuses = Object.freeze({
  [codeSupposedToBeString]: CODE_NOT_STRING,
  [absolutePathSupposedToBeString]: ABSOLUTEPATH_NOT_STRING,
  [absolutePathSupposedToBeAbsolute]: ABSOLUTEPATH_NOT_ABSOLUTE,
  [absolutePathCouldntBeRead]: ABSOLUTE_PATH_NOT_FOUND,
  [jsTsJsxTsxCouldntBeParsed]: SOURCE_CODE_FATAL_SYNTAX,
});

/* library errors */

export const GETSOURCECODEFROMCODE_ERROR_A = `${"GETSOURCECODEFROMCODE"}_ERROR_A`; // getSourceCodeFromCode.name.toUpperCase()
export const GETSOURCECODEFROMCODE_ERROR_B = "GETSOURCECODEFROMCODE_ERROR_B";

/** @public */
export const getSourceCodeFromCodeErrorA = Object.freeze({
  message: `ERROR. \`${"getSourceCodeFromCode"}\` error.`, // getSourceCodeFromCode.name
  status: GETSOURCECODEFROMCODE_ERROR_A, // getSourceCodeFromCode.name.toUpperCase()
  ...typeError,
});

export const GETSOURCECODEFROMPATH_ERROR_A = `${"GETSOURCECODEFROMPATH"}_ERROR_A`; // getSourceCodeFromPath.name.toUpperCase()
export const GETSOURCECODEFROMPATH_ERROR_B = "GETSOURCECODEFROMPATH_ERROR_B";

/** @public */
export const getSourceCodeFromPathErrorA = Object.freeze({
  message: `ERROR. \`${"getSourceCodeFromPath"}\` error.`, // getSourceCodeFromPath.name
  status: `${"GETSOURCECODEFROMPATH"}_ERROR_A`, // getSourceCodeFromPath.name.toUpperCase()
  ...typeError,
});
