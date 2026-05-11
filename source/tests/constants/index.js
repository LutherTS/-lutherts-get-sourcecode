import {
  forComposedVariables,
  composedVariablesExclusives,
} from "../../comment-variables/index.js";

/* primary export names */

/** $COMMENT#FORCOMPOSEDVARIABLES#VARIABLES#GETSOURCECODE */
export const GET_SOURCECODE =
  forComposedVariables.variables.getSourceCode.value;

/** $COMMENT#COMPOSEDVARIABLESEXCLUSIVES#ARGUMENTS#ABSOLUTEPATH */
export const ABSOLUTE_PATH =
  composedVariablesExclusives.arguments.absolutePath.value;

/* languages */

export const JAVASCRIPT = "JavaScript";
export const TYPESCRIPT = "TypeScript";

/* Notes
$COMMENT#FORCOMPOSEDVARIABLES#VARIABLES#GETSOURCECODE and GET_SOURCECODE are controlled by a single source of truth in `comments.config.js`, literally-typed across comments and variables. (Comment Variables.)
*/
