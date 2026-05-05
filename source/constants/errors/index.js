import {
  absolutePathIsSupposedToBeAString,
  absolutePathCouldntBeRead,
  jsTsJsxTsxCouldntBeParsed,
} from "./messages.js";
import {
  ABSOLUTE_PATH_NOT_STRING,
  ABSOLUTE_PATH_NOT_FOUND,
  SOURCE_CODE_FATAL_SYNTAX,
} from "./statuses.js";

/* error messages to error statuses */

export const errorMessages_errorStatuses = /** @type {const} */ ({
  [absolutePathIsSupposedToBeAString]: ABSOLUTE_PATH_NOT_STRING,
  [absolutePathCouldntBeRead]: ABSOLUTE_PATH_NOT_FOUND,
  [jsTsJsxTsxCouldntBeParsed]: SOURCE_CODE_FATAL_SYNTAX,
});
