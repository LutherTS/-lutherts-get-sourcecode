/** $COMMENT#GET_SOURCECODE#TSDOC#SRC#LIB#CONSTS#PARSER#PUBLIC#TYPESCRIPTANDJSXCOMPATIBLE */
export const typeScriptAndJSXCompatible: {
  parser: typeof parser;
  parserOptions: typeof parserOptions;
};
import { parser } from "typescript-eslint";
declare const parserOptions: Readonly<{
  ecmaFeatures: Readonly<{
    jsx: true;
  }>;
}>;
export {};
