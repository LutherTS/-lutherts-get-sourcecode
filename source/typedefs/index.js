import {
  getSourceCodeFromCode,
  getSourceCodeFromPath,
  typeScriptAndJSXCompatible,
  noInlineConfig,
} from "../library/index.js";

import { errorMessages_errorStatuses } from "../constants/errors/index.js";

/**
 * @typedef {typeof getSourceCodeFromCode} GetSourceCodeFromCode
 */
/**
 * @typedef {typeof getSourceCodeFromPath} GetSourceCodeFromPath
 */

/**
 * @typedef {ReturnType<GetSourceCodeFromCode>} GetSourceCodeFromCodeReturnType
 */
/**
 * @typedef {ReturnType<GetSourceCodeFromPath>} GetSourceCodeFromPathReturnType
 */
/**
 * @typedef {keyof typeof errorMessages_errorStatuses} ErrorMessages_ErrorStatuses__Key
 */

/**
 * @typedef {typeof typeScriptAndJSXCompatible} TypeScriptAndJSXCompatible
 */
/**
 * @typedef {typeof noInlineConfig} NoInlineConfig
 */
