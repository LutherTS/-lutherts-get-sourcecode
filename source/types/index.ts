import {
  getSourceCodeFromCode,
  getSourceCodeFromPath,
  typeScriptAndJSXCompatible,
  noInlineConfig,
} from "../library/index.js";

import { errorMessages_errorStatuses } from "../constants/errors/index.js";

export type GetSourceCodeFromCode = typeof getSourceCodeFromCode;

export type GetSourceCodeFromCodeReturnType = ReturnType<GetSourceCodeFromCode>;

export type GetSourceCodeFromPath = typeof getSourceCodeFromPath;

export type GetSourceCodeFromPathReturnType = ReturnType<GetSourceCodeFromPath>;

export type ErrorMessages_ErrorStatuses__Key =
  keyof typeof errorMessages_errorStatuses;

export type TypeScriptAndJSXCompatible = typeof typeScriptAndJSXCompatible;

export type NoInlineConfig = typeof noInlineConfig;
