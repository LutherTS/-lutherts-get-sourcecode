import {
  absolutePathCouldntBeRead,
  jsTsJsxTsxCouldntBeParsed,
} from "./messages.js";
import {
  ABSOLUTE_PATH_NOT_FOUND,
  SOURCE_CODE_FATAL_SYNTAX,
} from "./statuses.js";

export const errorMessages_errorStatuses = /** @type {const} */ ({
  [absolutePathCouldntBeRead]: ABSOLUTE_PATH_NOT_FOUND,
  [jsTsJsxTsxCouldntBeParsed]: SOURCE_CODE_FATAL_SYNTAX,
});
