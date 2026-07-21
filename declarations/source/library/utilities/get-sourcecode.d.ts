/**
 * $COMMENT#_LUTHERTS_GET_SOURCECODE#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#GETSOURCECODEFROMCODE
 *
 * @param code - $COMMENT#_LUTHERTS_GET_SOURCECODE#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#CODE
 * @returns $COMMENT#_LUTHERTS_GET_SOURCECODE#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#GETSOURCECODEFROMCODE
 *
 * @public $COMMENT#_LUTHERTS_GET_SOURCECODE#PUBLIC#GETSOURCECODEFROMCODE
 */
export declare const getSourceCodeFromCode: <T extends string>(code: T) => {
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
        readonly message: "`code` is supposed to be a string.";
        readonly status: "CODE_NOT_STRING";
    }];
} | {
    readonly success: true;
    readonly sourceCode: import("eslint").SourceCode;
};
/**
 * $COMMENT#_LUTHERTS_GET_SOURCECODE#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#GETSOURCECODEFROMPATH
 *
 * @param absolutePath - $COMMENT#_LUTHERTS_GET_SOURCECODE#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#ABSOLUTEPATH
 * @returns $COMMENT#_LUTHERTS_GET_SOURCECODE#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#GETSOURCECODEFROMPATH
 *
 * @public $COMMENT#_LUTHERTS_GET_SOURCECODE#PUBLIC#GETSOURCECODEFROMPATH
 */
export declare const getSourceCodeFromPath: <T extends string>(absolutePath: T) => {
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
    readonly success: false;
    readonly errors: readonly [{
        readonly type: "error";
        readonly message: "`absolutePath` is supposed to be absolute.";
        readonly status: "ABSOLUTEPATH_NOT_ABSOLUTE";
    }];
} | {
    readonly success: false;
    readonly errors: readonly [{
        readonly type: "error";
        readonly message: "`code` is supposed to be a string.";
        readonly status: "CODE_NOT_STRING";
    }];
} | {
    readonly success: true;
    readonly sourceCode: import("eslint").SourceCode;
};
