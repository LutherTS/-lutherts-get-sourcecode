/**
 * $COMMENT#GET_SOURCECODE#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#GETSOURCECODE
 *
 * @param absolutePath - $COMMENT#GET_SOURCECODE#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#ABSOLUTEPATH
 * @returns $COMMENT#GET_SOURCECODE#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#GETSOURCECODE
 *
 * @public
 */
export declare const getSourceCode: <T extends string>(absolutePath: T) => {
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
    readonly success: false;
    readonly errors: readonly [{
        readonly type: "error";
        readonly message: "`absolutePath` is supposed to be a string.";
        readonly status: "ABSOLUTEPATH_NOT_STRING";
    }];
} | {
    readonly success: true;
    readonly sourceCode: import("eslint").SourceCode;
};
