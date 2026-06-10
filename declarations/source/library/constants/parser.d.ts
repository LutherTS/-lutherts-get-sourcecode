import { parser } from "typescript-eslint";
declare const parserOptions: Readonly<{
    ecmaFeatures: Readonly<{
        jsx: true;
    }>;
}>;
/**
 * $COMMENT#GET_SOURCECODE#TSDOC#SRC#LIB#CONSTS#PARSER#PUBLIC#TYPESCRIPTANDJSXCOMPATIBLE
 * @public
 */
export declare const typeScriptAndJSXCompatible: {
    parser: typeof parser;
    parserOptions: typeof parserOptions;
};
export {};
