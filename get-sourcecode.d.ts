import { parser } from "typescript-eslint";
import { SourceCode } from "eslint";

export declare const commentVariablesData: {
  libraryKey: "GET_SOURCECODE";
  libraryVariations: {
    EN: {
      "GET_SOURCECODE#TSDOC#SRC#CONSTS#ERRORS#STATUSES#PUBLIC#ABSOLUTEPATH_NOT_STRING": '"`absolutePath` is supposed to be a string."';
      "GET_SOURCECODE#TSDOC#SRC#CONSTS#ERRORS#STATUSES#PUBLIC#ABSOLUTE_PATH_NOT_FOUND": '"Absolute file path could not be read."';
      "GET_SOURCECODE#TSDOC#SRC#CONSTS#ERRORS#STATUSES#PUBLIC#SOURCE_CODE_FATAL_SYNTAX": '"JS/TS/JSX/TSX source code could not be parsed."';
      "GET_SOURCECODE#TSDOC#SRC#LIB#CONSTS#PUBLIC#SUCCESSFALSE": "Apply last with  `...successFalse` to ensure that `success: false` sits at the top of its object's type definition, like `{propertyA, propertyB, ...successFalse}`.";
      "GET_SOURCECODE#TSDOC#SRC#LIB#CONSTS#PUBLIC#SUCCESSTRUE": "Apply last with  `...successTrue` to ensure that `success: true` sits at the top of its object's type definition, like `{propertyA, propertyB, ...successTrue}`.";
      "GET_SOURCECODE#TSDOC#SRC#LIB#CONSTS#PUBLIC#TYPEERROR": "Apply last with  `...typeError` to ensure that `type: error` sits at the top of its object's type definition, like `{propertyA, propertyB, ...typeError}`.";
      "GET_SOURCECODE#TSDOC#SRC#LIB#CONSTS#PUBLIC#TYPEWARNING": "Apply last with  `...typeWarning` to ensure that `type: warning` sits at the top of its object's type definition, like `{propertyA, propertyB, ...typeWarning}`.";
      "GET_SOURCECODE#TSDOC#SRC#LIB#CONSTS#PARSER#PUBLIC#TYPESCRIPTANDJSXCOMPATIBLE": "`languageOptions` object for instances of the `ESLint` and `Linter` classes enabling the linting of TypeScript and JSX (React) files.";
      "GET_SOURCECODE#TSDOC#SRC#LIB#DEFS#PUBLIC#GETSOURCECODE": "Gets the ESLint-generated `SourceCode` object of a file from its absolute path.";
      "GET_SOURCECODE#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#MAKESUCCESSFALSETYPEERROR": "Makes a `{success: false}` object with a single error in its `errors` array of `{type: error}` based on the `message` it is meant to display and the `status` it is meant to have.";
      "GET_SOURCECODE#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#MAKESUCCESSFALSETYPEWARNING": "Makes a `{success: false}` object with a single error in its `errors` array of `{type: warning}` based on the `message` it is meant to display and the `status` it is meant to have.";
      "GET_SOURCECODE#TSDOC#SRC#LIB#PARAMS#PUBLIC#ABSOLUTEPATH": "The absolute path of the file at hand.";
      "GET_SOURCECODE#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#MESSAGE": "The human-readable message of the error.";
      "GET_SOURCECODE#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#STATUS": "The static status text of the error.";
      "GET_SOURCECODE#TSDOC#SRC#LIB#RETURNS#PUBLIC#GETSOURCECODE": "The ESLint-generated `SourceCode` object of a file, from which the AST (`sourceCode.ast`) and all comments (`sourceCode.getAllComments()`) can be extracted, inside a `{success: true}` object at its `sourceCode` key. In case of an error, a `{success: false}` object is returned instead.";
      "GET_SOURCECODE#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#MAKESUCCESSFALSETYPEERROR": "A `{success: false}` object with a single error in its `errors` array of `{type: error}`.";
      "GET_SOURCECODE#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#MAKESUCCESSFALSETYPEWARNING": "A `{success: false}` object with a single error in its `errors` array of `{type: warning}`.";
    };
    FR: {
      "GET_SOURCECODE#TSDOC#SRC#CONSTS#ERRORS#STATUSES#PUBLIC#ABSOLUTEPATH_NOT_STRING": 'En anglais \u00E0 l\'ex\u00E9cution : "`absolutePath` is supposed to be a string."';
      "GET_SOURCECODE#TSDOC#SRC#CONSTS#ERRORS#STATUSES#PUBLIC#ABSOLUTE_PATH_NOT_FOUND": 'En anglais \u00E0 l\'ex\u00E9cution : "Absolute file path could not be read."';
      "GET_SOURCECODE#TSDOC#SRC#CONSTS#ERRORS#STATUSES#PUBLIC#SOURCE_CODE_FATAL_SYNTAX": 'En anglais \u00E0 l\'ex\u00E9cution : "JS/TS/JSX/TSX source code could not be parsed."';
      "GET_SOURCECODE#TSDOC#SRC#LIB#CONSTS#PUBLIC#SUCCESSFALSE": "\u00C0 apposer en dernier via  `...successFalse` pour s'assurer que `success: false` apparaisse au sommet de la d\u00E9finition du type de l'objet auquel il appartient, fa\u00E7on `{propertyA, propertyB, ...successFalse}`.";
      "GET_SOURCECODE#TSDOC#SRC#LIB#CONSTS#PUBLIC#SUCCESSTRUE": "\u00C0 apposer en dernier via  `...successTrue` pour s'assurer que `success: true` apparaisse au sommet de la d\u00E9finition du type de l'objet auquel il appartient, fa\u00E7on `{propertyA, propertyB, ...successTrue}`.";
      "GET_SOURCECODE#TSDOC#SRC#LIB#CONSTS#PUBLIC#TYPEERROR": "\u00C0 apposer en dernier via  `...typeError` pour s'assurer que `type: error` apparaisse au sommet de la d\u00E9finition du type de l'objet auquel il appartient, fa\u00E7on `{propertyA, propertyB, ...typeError}`.";
      "GET_SOURCECODE#TSDOC#SRC#LIB#CONSTS#PUBLIC#TYPEWARNING": "\u00C0 apposer en dernier via  `...typeWarning` pour s'assurer que `type: warning` apparaisse au sommet de la d\u00E9finition du type de l'objet auquel il appartient, fa\u00E7on `{propertyA, propertyB, ...typeWarning}`.";
      "GET_SOURCECODE#TSDOC#SRC#LIB#CONSTS#PARSER#PUBLIC#TYPESCRIPTANDJSXCOMPATIBLE": "Objet `languageOptions` pour instances de classes `ESLint` et `Linter` permettant l'analyse statique de fichiers TypeScript et JSX (React).";
      "GET_SOURCECODE#TSDOC#SRC#LIB#DEFS#PUBLIC#GETSOURCECODE": "Obtient l'objet `SourceCode` g\u00E9n\u00E9r\u00E9 par ESLint d'un fichier \u00E0 partir de son chemin absolu.";
      "GET_SOURCECODE#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#MAKESUCCESSFALSETYPEERROR": "Cr\u00E9e un objet `{success: false}` avec une seule erreur dans son array `errors` de `{type: error}` bas\u00E9e sur le `message` qu'elle doit montrer et le `status` qu'elle doit avoir.";
      "GET_SOURCECODE#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#MAKESUCCESSFALSETYPEWARNING": "Cr\u00E9e un objet `{success: false}` avec une seule erreur dans son array `errors` de `{type: warning}` bas\u00E9e sur le `message` qu'elle doit montrer et le `status` qu'elle doit avoir.";
      "GET_SOURCECODE#TSDOC#SRC#LIB#PARAMS#PUBLIC#ABSOLUTEPATH": "Le chemin absolu du fichier concern\u00E9.";
      "GET_SOURCECODE#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#MESSAGE": "Le message en clair de l'erreur.";
      "GET_SOURCECODE#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#STATUS": "Le texte statique du statut de l'erreur.";
      "GET_SOURCECODE#TSDOC#SRC#LIB#RETURNS#PUBLIC#GETSOURCECODE": "L'objet `SourceCode` g\u00E9n\u00E9r\u00E9 par ESLint d'un fichier, \u00E0 partir duquel l'AST (`sourceCode.ast`) et tous les commentaires (`sourceCode.getAllComments()`) peuvent \u00EAtre extraits, \u00E0 l'int\u00E9rieur d'un objet `{success: true}` \u00E0 sa cl\u00E9 `sourceCode`. En cas d'erreur, un objet `{success: false}` est retourn\u00E9 \u00E0 la place.";
      "GET_SOURCECODE#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#MAKESUCCESSFALSETYPEERROR": "Un objet `{success: false}` avec une seule erreur dans son array `errors` de `{type: error}`.";
      "GET_SOURCECODE#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#MAKESUCCESSFALSETYPEWARNING": "Un objet `{success: false}` avec une seule erreur dans son array `errors` de `{type: warning}`.";
    };
  };
};

/**
 * $COMMENT#GET_SOURCECODE#TSDOC#SRC#LIB#DEFS#PUBLIC#GETSOURCECODE
 *
 * @param absolutePath - $COMMENT#GET_SOURCECODE#TSDOC#SRC#LIB#PARAMS#PUBLIC#ABSOLUTEPATH
 * @returns $COMMENT#GET_SOURCECODE#TSDOC#SRC#LIB#RETURNS#PUBLIC#GETSOURCECODE
 */
export declare function getSourceCode<T extends string>(
  absolutePath: T,
):
  | {
      readonly success: false;
      readonly errors: readonly [
        {
          readonly type: "error";
          readonly message: "`absolutePath` is supposed to be a string.";
          readonly status: "ABSOLUTEPATH_NOT_STRING";
        },
      ];
    }
  | {
      readonly success: false;
      readonly errors: readonly [
        {
          readonly type: "error";
          readonly message: "Absolute file path could not be read.";
          readonly status: "ABSOLUTE_PATH_NOT_FOUND";
        },
      ];
    }
  | {
      readonly success: false;
      readonly errors: readonly [
        {
          readonly type: "error";
          readonly message: "JS/TS/JSX/TSX source code could not be parsed.";
          readonly status: "SOURCE_CODE_FATAL_SYNTAX";
        },
      ];
    }
  | {
      readonly success: true;
      readonly sourceCode: SourceCode;
    };

/**
 * $COMMENT#GET_SOURCECODE#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#MAKESUCCESSFALSETYPEERROR
 *
 * @param message - $COMMENT#GET_SOURCECODE#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#MESSAGE
 * @param status - $COMMENT#GET_SOURCECODE#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#STATUS
 * @returns $COMMENT#GET_SOURCECODE#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#MAKESUCCESSFALSETYPEERROR
 */
export declare function makeSuccessFalseTypeError<
  T extends string,
  U extends string,
>(
  message: T,
  status: U,
): {
  readonly success: false;
  readonly errors: readonly [
    {
      readonly type: "error";
      readonly message: T;
      readonly status: U;
    },
  ];
};

/**
 * $COMMENT#GET_SOURCECODE#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#MAKESUCCESSFALSETYPEWARNING
 *
 * @param message - $COMMENT#GET_SOURCECODE#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#MESSAGE
 * @param status - $COMMENT#GET_SOURCECODE#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#STATUS
 * @returns $COMMENT#GET_SOURCECODE#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#MAKESUCCESSFALSETYPEWARNING
 */
export declare function makeSuccessFalseTypeWarning<
  T extends string,
  U extends string,
>(
  message: T,
  status: U,
): {
  readonly success: false;
  readonly errors: readonly [
    {
      readonly type: "warning";
      readonly message: T;
      readonly status: U;
    },
  ];
};

declare const parserOptions: Readonly<{
  ecmaFeatures: Readonly<{
    jsx: true;
  }>;
}>;

/** $COMMENT#GET_SOURCECODE#TSDOC#SRC#LIB#CONSTS#PUBLIC#SUCCESSFALSE */
export declare const successFalse: Readonly<{
  success: false;
}>;

/** $COMMENT#GET_SOURCECODE#TSDOC#SRC#LIB#CONSTS#PUBLIC#SUCCESSTRUE */
export declare const successTrue: Readonly<{
  success: true;
}>;

/** $COMMENT#GET_SOURCECODE#TSDOC#SRC#LIB#CONSTS#PUBLIC#TYPEERROR */
export declare const typeError: Readonly<{
  type: "error";
}>;

/** $COMMENT#GET_SOURCECODE#TSDOC#SRC#LIB#CONSTS#PARSER#PUBLIC#TYPESCRIPTANDJSXCOMPATIBLE */
export declare const typeScriptAndJSXCompatible: {
  parser: typeof parser;
  parserOptions: typeof parserOptions;
};

/** $COMMENT#GET_SOURCECODE#TSDOC#SRC#LIB#CONSTS#PUBLIC#TYPEWARNING */
export declare const typeWarning: Readonly<{
  type: "warning";
}>;

export {};
