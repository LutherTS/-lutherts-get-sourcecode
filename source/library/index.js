/* primary export */

export { getSourceCode } from "./utilities/get-sourcecode.js";

/* secondary exports */

// This library also exports the basic constants (along with its parser) ...

export {
  successFalse,
  successTrue,
  typeError,
  typeWarning,
} from "./constants/index.js";
export { typeScriptAndJSXCompatible } from "./constants/parser.js";

// ... and utilities used across my projects for error handling.

export {
  makeSuccessFalseTypeError,
  makeSuccessFalseTypeWarning,
} from "./utilities/index.js";

// Additionally, it showcases how to access a library's comment variables as keys and values.
// For the JS version (typed with literals):
// - `import { commentVariablesData as getSourceCodeCommentVariablesData } from "get-sourcecode";`
// For the JSON version (typed with strings):
// - `import getSourceCodeCommentVariablesData from "get-sourcecode/comments.config.public.json" with { type: "json" };`

export { commentVariablesData } from "../comment-variables/public.js";
// export { resolvedConfigData as commentVariablesData } from "../../comments.config.public.mjs";
