import { parser } from 'typescript-eslint';
import { SourceCode } from 'eslint';

/** @public */
export declare const commentVariablesData: {
    "libraryKey": "GET_SOURCECODE";
    "libraryVariations": {
        "EN": {
            "GET_SOURCECODE#TSDOC#SRC#LIB#CONSTS#PARSER#PUBLIC#TYPESCRIPTANDJSXCOMPATIBLE": "`languageOptions` object for instances of the `ESLint` and `Linter` classes enabling the linting of TypeScript and JSX (React) files.";
            "GET_SOURCECODE#TSDOC#SRC#LIB#CONSTS#PARSER#PUBLIC#NOINLINECONFIG": "`linterOptions` object for instances of the `ESLint` and `Linter` classes disabling ESLint inline configs when using ESLint programmatically.";
            "GET_SOURCECODE#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#GETSOURCECODE": "Gets the ESLint-generated `SourceCode` object of a file from its absolute path.";
            "GET_SOURCECODE#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#ABSOLUTEPATH": "The absolute path of the file at hand.";
            "GET_SOURCECODE#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#GETSOURCECODE": "The ESLint-generated `SourceCode` object of a file, from which the AST (`sourceCode.ast`) and all comments (`sourceCode.getAllComments()`) can be extracted, inside a `{success: true}` object at its `sourceCode` key. In case of an error, a `{success: false}` object is returned instead.";
        };
        "FR": {
            "GET_SOURCECODE#TSDOC#SRC#LIB#CONSTS#PARSER#PUBLIC#TYPESCRIPTANDJSXCOMPATIBLE": "Objet `languageOptions` pour instances de classes `ESLint` et `Linter` permettant l'analyse statique de fichiers TypeScript et JSX (React).";
            "GET_SOURCECODE#TSDOC#SRC#LIB#CONSTS#PARSER#PUBLIC#NOINLINECONFIG": "Object `linterOptions` pour instances de classes `ESLint` et `Linter` désactivant les configurations dans le code lors d'usages programmatiques de ESLint.";
            "GET_SOURCECODE#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#GETSOURCECODE": "Obtient l'objet `SourceCode` généré par ESLint d'un fichier à partir de son chemin absolu.";
            "GET_SOURCECODE#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#ABSOLUTEPATH": "Le chemin absolu du fichier concerné.";
            "GET_SOURCECODE#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#GETSOURCECODE": "L'objet `SourceCode` généré par ESLint d'un fichier, à partir duquel l'AST (`sourceCode.ast`) et tous les commentaires (`sourceCode.getAllComments()`) peuvent être extraits, à l'intérieur d'un objet `{success: true}` à sa clé `sourceCode`. En cas d'erreur, un objet `{success: false}` est retourné à la place.";
        };
    };
};

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
    readonly sourceCode: SourceCode;
};

/**
 * $COMMENT#GET_SOURCECODE#TSDOC#SRC#LIB#CONSTS#PARSER#PUBLIC#NOINLINECONFIG
 * @public
 */
export declare const noInlineConfig: {
    readonly noInlineConfig: true;
};

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

export { }
