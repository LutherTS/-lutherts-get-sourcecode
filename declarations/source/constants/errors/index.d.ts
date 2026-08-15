export declare const errorMessages_errorStatuses: Readonly<{
    "`code` is supposed to be a string.": "CODE_NOT_STRING";
    "`absolutePath` is supposed to be a string.": "ABSOLUTEPATH_NOT_STRING";
    "`absolutePath` is supposed to be absolute.": "ABSOLUTEPATH_NOT_ABSOLUTE";
    "Absolute file path could not be read.": "ABSOLUTE_PATH_NOT_FOUND";
    "JS/TS/JSX/TSX source code could not be parsed.": "SOURCE_CODE_FATAL_SYNTAX";
}>;
export declare const GETSOURCECODEFROMCODE_ERROR_A = "GETSOURCECODEFROMCODE_ERROR_A";
export declare const GETSOURCECODEFROMCODE_ERROR_B = "GETSOURCECODEFROMCODE_ERROR_B";
/** @public $COMMENT#_LUTHERTS_GET_SOURCECODE#PUBLIC#GETSOURCECODEFROMCODEERRORA */
export declare const getSourceCodeFromCodeErrorA: Readonly<{
    type: "error";
    message: "ERROR. `getSourceCodeFromCode` error.";
    status: "GETSOURCECODEFROMCODE_ERROR_A";
}>;
export declare const GETSOURCECODEFROMPATH_ERROR_A = "GETSOURCECODEFROMPATH_ERROR_A";
export declare const GETSOURCECODEFROMPATH_ERROR_B = "GETSOURCECODEFROMPATH_ERROR_B";
/** @public $COMMENT#_LUTHERTS_GET_SOURCECODE#PUBLIC#GETSOURCECODEFROMPATHERRORA */
export declare const getSourceCodeFromPathErrorA: Readonly<{
    type: "error";
    message: "ERROR. `getSourceCodeFromPath` error.";
    status: "GETSOURCECODEFROMPATH_ERROR_A";
}>;
