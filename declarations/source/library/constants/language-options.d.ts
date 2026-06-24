import { parser } from "typescript-eslint";
/**
 * $COMMENT#GET_SOURCECODE#TSDOC#SRC#LIB#CONSTS#PARSER#PUBLIC#TYPESCRIPTANDJSXCOMPATIBLE
 * @public
 */
export declare const typeScriptAndJSXCompatible: {
    readonly parser: typeof parser;
    readonly parserOptions: {
        readonly ecmaFeatures: {
            readonly jsx: true;
        };
    };
};
