/** @public $COMMENT#_LUTHERTS_GET_SOURCECODE#PUBLIC#MAKEGETSOURCECODEFROMCODEERRORB */
export declare const makeGetSourceCodeFromCodeErrorB: (code: string) => {
    readonly type: "error";
    readonly message: `\`code\`: 
${string}`;
    readonly status: "GETSOURCECODEFROMCODE_ERROR_B";
};
/** @public $COMMENT#_LUTHERTS_GET_SOURCECODE#PUBLIC#MAKEGETSOURCECODEFROMPATHERRORB */
export declare const makeGetSourceCodeFromPathErrorB: (absolutePath: string) => {
    readonly type: "error";
    readonly message: `\`absolutePath\`: 
${string}`;
    readonly status: "GETSOURCECODEFROMPATH_ERROR_B";
};
