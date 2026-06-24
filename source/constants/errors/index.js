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
