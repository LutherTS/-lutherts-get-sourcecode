import {
  forComposedVariables,
  composedVariablesExclusives,
} from "../../comment-variables/index.js";

/* primary export names */

/** $COMMENT#FORCOMPOSEDVARIABLES#VARIABLES#GETSOURCECODE */
export const GET_SOURCECODE =
  forComposedVariables.variables.getSourceCode.value;

export const ABSOLUTE_PATH =
  composedVariablesExclusives.arguments.absolutePath.value;

/* secondary export names */

export const TYPESCRIPT_AND_JSX_COMPATIBLE =
  composedVariablesExclusives.variables.typeScriptAndJSXCompatible.value;
export const PARSER = composedVariablesExclusives.variables.parser.value;
export const PARSER_OPTIONS =
  composedVariablesExclusives.variables.parserOptions.value;
export const P_ECMA_FEATURES =
  composedVariablesExclusives.variables.pEcmaFeatures.value;
export const P_E_JSX = composedVariablesExclusives.variables.pEJsx.value;

export const NO_INLINE_CONFIG =
  composedVariablesExclusives.variables.noInlineConfig.value;

/* languages */

export const JAVASCRIPT = "JavaScript";
export const TYPESCRIPT = "TypeScript";
