export function getSourceCode(absolutePath: string): {
    readonly success: false;
    readonly errors: readonly [{
        readonly type: "error";
        readonly message: "`absolutePath` is supposed to be a string.";
        readonly status: "ABSOLUTE_PATH_NOT_STRING";
    }];
} | {
    readonly success: false;
    readonly errors: readonly [{
        readonly type: "error";
        readonly message: "Absolute file path could not be read.";
        readonly status: "ABSOLUTE_PATH_NOT_FOUND";
    }];
} | {
    readonly success: false;
    readonly errors: readonly [{
        readonly type: "error";
        readonly message: "JS/TS/JSX/TSX source code could not be parsed.";
        readonly status: "SOURCE_CODE_FATAL_SYNTAX";
    }];
} | {
    readonly success: true;
    readonly sourceCode: import("eslint").SourceCode;
};
export { successFalse, successTrue, typeError, typeWarning } from "./constants/index.js";
export { makeSuccessFalseTypeError, makeSuccessFalseTypeWarning } from "./utilities/index.js";
