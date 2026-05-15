export type ErrorMessages_ErrorStatuses__Key = keyof typeof errorMessages_errorStatuses;
export type GetSourceCodeReturnType = ReturnType<typeof getSourceCode>;
export type Parser = typeof parser;
import { errorMessages_errorStatuses } from "../constants/errors/index.js";
import { getSourceCode } from "../library/index.js";
import { parser } from "typescript-eslint";
