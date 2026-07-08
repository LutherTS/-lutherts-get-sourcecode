import { parser } from 'typescript-eslint';
import { SourceCode } from 'eslint';

/** @public $COMMENT#GET_SOURCECODE#PUBLIC#RESOLVEDPUBLICDATA */
export declare const commentVariablesData: {
    "libraryKey": "GET_SOURCECODE";
    "libraryVariations": {
        "EN": {
            "GET_SOURCECODE#TSDOC#SRC#LIB#CONSTS#PARSER#PUBLIC#TYPESCRIPTANDJSXCOMPATIBLE": "`languageOptions` object for instances of the `ESLint` and `Linter` classes enabling the linting of TypeScript and JSX (React) files.";
            "GET_SOURCECODE#TSDOC#SRC#LIB#CONSTS#PARSER#PUBLIC#NOINLINECONFIG": "`linterOptions` object for instances of the `ESLint` and `Linter` classes disabling ESLint inline configs when using ESLint programmatically.";
            "GET_SOURCECODE#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#GETSOURCECODEFROMCODE": "Gets the ESLint-generated `SourceCode` object of a file from its code as text.";
            "GET_SOURCECODE#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#GETSOURCECODEFROMPATH": "Gets the ESLint-generated `SourceCode` object of a file from its absolute path.";
            "GET_SOURCECODE#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#CODE": "The code as text of the file at hand.";
            "GET_SOURCECODE#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#ABSOLUTEPATH": "The absolute path of the file at hand.";
            "GET_SOURCECODE#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#GETSOURCECODEFROMCODE": "The ESLint-generated `SourceCode` object of a file, from which the AST (`sourceCode.ast`) and all comments (`sourceCode.getAllComments()`) can be extracted, inside a `{success: true}` object at its `sourceCode` key. In case of an error, a `{success: false}` object is returned instead.";
            "GET_SOURCECODE#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#GETSOURCECODEFROMPATH": "The ESLint-generated `SourceCode` object of a file, from which the AST (`sourceCode.ast`) and all comments (`sourceCode.getAllComments()`) can be extracted, inside a `{success: true}` object at its `sourceCode` key. In case of an error, a `{success: false}` object is returned instead.";
            "GET_SOURCECODE#PUBLIC#RESOLVEDPUBLICDATA": "";
            "GET_SOURCECODE#PUBLIC#GETSOURCECODEFROMCODE": "";
            "GET_SOURCECODE#PUBLIC#GETSOURCECODEFROMPATH": "";
            "GET_SOURCECODE#PUBLIC#NOINLINECONFIG": "";
            "GET_SOURCECODE#PUBLIC#TYPESCRIPTANDJSXCOMPATIBLE": "";
        };
        "FR": {
            "GET_SOURCECODE#TSDOC#SRC#LIB#CONSTS#PARSER#PUBLIC#TYPESCRIPTANDJSXCOMPATIBLE": "Objet `languageOptions` pour instances de classes `ESLint` et `Linter` permettant l'analyse statique de fichiers TypeScript et JSX (React).";
            "GET_SOURCECODE#TSDOC#SRC#LIB#CONSTS#PARSER#PUBLIC#NOINLINECONFIG": "Objet `linterOptions` pour instances de classes `ESLint` et `Linter` désactivant les configurations dans le code lors d'usages programmatiques de ESLint.";
            "GET_SOURCECODE#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#GETSOURCECODEFROMCODE": "Obtient l'objet `SourceCode` généré par ESLint d'un fichier à partir de son code en tant que texte.";
            "GET_SOURCECODE#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#GETSOURCECODEFROMPATH": "Obtient l'objet `SourceCode` généré par ESLint d'un fichier à partir de son chemin absolu.";
            "GET_SOURCECODE#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#CODE": "Le code en tant que texte du fichier concerné.";
            "GET_SOURCECODE#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#ABSOLUTEPATH": "Le chemin absolu du fichier concerné.";
            "GET_SOURCECODE#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#GETSOURCECODEFROMCODE": "L'objet `SourceCode` généré par ESLint d'un fichier, à partir duquel l'AST (`sourceCode.ast`) et tous les commentaires (`sourceCode.getAllComments()`) peuvent être extraits, à l'intérieur d'un objet `{success: true}` à sa clé `sourceCode`. En cas d'erreur, un objet `{success: false}` est retourné à la place.";
            "GET_SOURCECODE#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#GETSOURCECODEFROMPATH": "L'objet `SourceCode` généré par ESLint d'un fichier, à partir duquel l'AST (`sourceCode.ast`) et tous les commentaires (`sourceCode.getAllComments()`) peuvent être extraits, à l'intérieur d'un objet `{success: true}` à sa clé `sourceCode`. En cas d'erreur, un objet `{success: false}` est retourné à la place.";
            "GET_SOURCECODE#PUBLIC#RESOLVEDPUBLICDATA": "";
            "GET_SOURCECODE#PUBLIC#GETSOURCECODEFROMCODE": "";
            "GET_SOURCECODE#PUBLIC#GETSOURCECODEFROMPATH": "";
            "GET_SOURCECODE#PUBLIC#NOINLINECONFIG": "";
            "GET_SOURCECODE#PUBLIC#TYPESCRIPTANDJSXCOMPATIBLE": "";
        };
    };
};

/**
 * $COMMENT#GET_SOURCECODE#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#GETSOURCECODEFROMCODE
 *
 * @param code - $COMMENT#GET_SOURCECODE#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#CODE
 * @returns $COMMENT#GET_SOURCECODE#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#GETSOURCECODEFROMCODE
 *
 * @public $COMMENT#GET_SOURCECODE#PUBLIC#GETSOURCECODEFROMCODE
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
    readonly sourceCode: SourceCode;
};

/**
 * $COMMENT#GET_SOURCECODE#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#GETSOURCECODEFROMPATH
 *
 * @param absolutePath - $COMMENT#GET_SOURCECODE#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#ABSOLUTEPATH
 * @returns $COMMENT#GET_SOURCECODE#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#GETSOURCECODEFROMPATH
 *
 * @public $COMMENT#GET_SOURCECODE#PUBLIC#GETSOURCECODEFROMPATH
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
    readonly sourceCode: SourceCode;
};

/**
 * $COMMENT#GET_SOURCECODE#TSDOC#SRC#LIB#CONSTS#PARSER#PUBLIC#NOINLINECONFIG
 * @public $COMMENT#GET_SOURCECODE#PUBLIC#NOINLINECONFIG
 */
export declare const noInlineConfig: {
    readonly noInlineConfig: true;
};

/**
 * $COMMENT#GET_SOURCECODE#TSDOC#SRC#LIB#CONSTS#PARSER#PUBLIC#TYPESCRIPTANDJSXCOMPATIBLE
 * @public $COMMENT#GET_SOURCECODE#PUBLIC#TYPESCRIPTANDJSXCOMPATIBLE
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
