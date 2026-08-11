export declare const resolvedConfigData: {
    readonly en: {
        readonly tsDoc: {
            readonly src: {
                readonly consts: {
                    readonly errors: {
                        readonly messages: {
                            readonly codeSupposedToBeString: {
                                readonly key: "EN#TSDOC#SRC#CONSTS#ERRORS#MESSAGES#CODESUPPOSEDTOBESTRING";
                                readonly value: "`code` is supposed to be a string.";
                            };
                            readonly absolutePathSupposedToBeString: {
                                readonly key: "EN#TSDOC#SRC#CONSTS#ERRORS#MESSAGES#ABSOLUTEPATHSUPPOSEDTOBESTRING";
                                readonly value: "`absolutePath` is supposed to be a string.";
                            };
                            readonly absolutePathSupposedToBeAbsolute: {
                                readonly key: "EN#TSDOC#SRC#CONSTS#ERRORS#MESSAGES#ABSOLUTEPATHSUPPOSEDTOBEABSOLUTE";
                                readonly value: "`absolutePath` is supposed to be absolute.";
                            };
                            readonly absolutePathCouldntBeRead: {
                                readonly key: "EN#TSDOC#SRC#CONSTS#ERRORS#MESSAGES#ABSOLUTEPATHCOULDNTBEREAD";
                                readonly value: "Absolute file path could not be read.";
                            };
                            readonly jsTsJsxTsxCouldntBeParsed: {
                                readonly key: "EN#TSDOC#SRC#CONSTS#ERRORS#MESSAGES#JSTSJSXTSXCOULDNTBEPARSED";
                                readonly value: "JS/TS/JSX/TSX source code could not be parsed.";
                            };
                        };
                        readonly statuses: {
                            readonly CODE_NOT_STRING: {
                                readonly key: "EN#TSDOC#SRC#CONSTS#ERRORS#STATUSES#CODE_NOT_STRING";
                                readonly value: "\"`code` is supposed to be a string.\"";
                            };
                            readonly ABSOLUTEPATH_NOT_STRING: {
                                readonly key: "EN#TSDOC#SRC#CONSTS#ERRORS#STATUSES#ABSOLUTEPATH_NOT_STRING";
                                readonly value: "\"`absolutePath` is supposed to be a string.\"";
                            };
                            readonly ABSOLUTEPATH_NOT_ABSOLUTE: {
                                readonly key: "EN#TSDOC#SRC#CONSTS#ERRORS#STATUSES#ABSOLUTEPATH_NOT_ABSOLUTE";
                                readonly value: "\"`absolutePath` is supposed to be absolute.\"";
                            };
                            readonly ABSOLUTE_PATH_NOT_FOUND: {
                                readonly key: "EN#TSDOC#SRC#CONSTS#ERRORS#STATUSES#ABSOLUTE_PATH_NOT_FOUND";
                                readonly value: "\"Absolute file path could not be read.\"";
                            };
                            readonly SOURCE_CODE_FATAL_SYNTAX: {
                                readonly key: "EN#TSDOC#SRC#CONSTS#ERRORS#STATUSES#SOURCE_CODE_FATAL_SYNTAX";
                                readonly value: "\"JS/TS/JSX/TSX source code could not be parsed.\"";
                            };
                        };
                    };
                };
                readonly lib: {
                    readonly consts: {
                        readonly parser: {
                            readonly public: {
                                readonly typeScriptAndJSXCompatible: {
                                    readonly key: "EN#TSDOC#SRC#LIB#CONSTS#PARSER#PUBLIC#TYPESCRIPTANDJSXCOMPATIBLE";
                                    readonly value: "`languageOptions` object for instances of the `ESLint` and `Linter` classes enabling the linting of TypeScript and JSX (React) files.";
                                };
                                readonly noInlineConfig: {
                                    readonly key: "EN#TSDOC#SRC#LIB#CONSTS#PARSER#PUBLIC#NOINLINECONFIG";
                                    readonly value: "`linterOptions` object for instances of the `ESLint` and `Linter` classes disabling ESLint inline configs when using ESLint programmatically.";
                                };
                            };
                        };
                    };
                    readonly defs: {
                        readonly utils: {
                            readonly public: {
                                readonly getSourceCodeFromCode: {
                                    readonly key: "EN#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#GETSOURCECODEFROMCODE";
                                    readonly value: "Gets the ESLint-generated `SourceCode` object of a file from its code as text.";
                                };
                                readonly getSourceCodeFromPath: {
                                    readonly key: "EN#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#GETSOURCECODEFROMPATH";
                                    readonly value: "Gets the ESLint-generated `SourceCode` object of a file from its absolute path.";
                                };
                            };
                        };
                    };
                    readonly params: {
                        readonly utils: {
                            readonly public: {
                                readonly code: {
                                    readonly key: "EN#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#CODE";
                                    readonly value: "The code as text of the file at hand.";
                                };
                                readonly absolutePath: {
                                    readonly key: "EN#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#ABSOLUTEPATH";
                                    readonly value: "The absolute path of the file at hand.";
                                };
                            };
                            readonly atHand: {
                                readonly code: {
                                    readonly key: "EN#TSDOC#SRC#LIB#PARAMS#UTILS#ATHAND#CODE";
                                    readonly value: "The code as text of the file§";
                                };
                                readonly absolutePath: {
                                    readonly key: "EN#TSDOC#SRC#LIB#PARAMS#UTILS#ATHAND#ABSOLUTEPATH";
                                    readonly value: "The absolute path of the file§";
                                };
                            };
                        };
                    };
                    readonly returns: {
                        readonly utils: {
                            readonly public: {
                                readonly getSourceCodeFromCode: {
                                    readonly key: "EN#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#GETSOURCECODEFROMCODE";
                                    readonly value: "The ESLint-generated `SourceCode` object of a file, from which the AST (`sourceCode.ast`) and all comments (`sourceCode.getAllComments()`) can be extracted, inside a `{success: true}` object at its `sourceCode` key. In case of an error, a `{success: false}` object is returned instead.";
                                };
                                readonly getSourceCodeFromPath: {
                                    readonly key: "EN#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#GETSOURCECODEFROMPATH";
                                    readonly value: "The ESLint-generated `SourceCode` object of a file, from which the AST (`sourceCode.ast`) and all comments (`sourceCode.getAllComments()`) can be extracted, inside a `{success: true}` object at its `sourceCode` key. In case of an error, a `{success: false}` object is returned instead.";
                                };
                            };
                        };
                    };
                };
                readonly tests: {
                    readonly defs: {
                        readonly utils: {
                            readonly assertFailureWithMessage: {
                                readonly key: "EN#TSDOC#SRC#TESTS#DEFS#UTILS#ASSERTFAILUREWITHMESSAGE";
                                readonly value: "Asserts that `getSourceCodeFromCode` or `getSourceCodeFromPath` fails when it should.";
                            };
                            readonly assertSuccess: {
                                readonly key: "EN#TSDOC#SRC#TESTS#DEFS#UTILS#ASSERTSUCCESS";
                                readonly value: "Asserts that `getSourceCodeFromCode` or `getSourceCodeFromPath` succeeds when it should.";
                            };
                        };
                    };
                    readonly params: {
                        readonly utils: {
                            readonly getSourceCodeResults: {
                                readonly key: "EN#TSDOC#SRC#TESTS#PARAMS#UTILS#GETSOURCECODERESULTS";
                                readonly value: "The results of the `getSourceCodeFromCode` or `getSourceCodeFromPath` instance called in the test, whose success or failure is evaluated via its `success` key's boolean value.";
                            };
                            readonly expectedMessage: {
                                readonly key: "EN#TSDOC#SRC#TESTS#PARAMS#UTILS#EXPECTEDMESSAGE";
                                readonly value: "The expected message of the error that should be encountered during failure, from which the status can be inferred.";
                            };
                        };
                    };
                    readonly returns: {
                        readonly utils: {
                            readonly assertFailureWithMessage: {
                                readonly key: "EN#TSDOC#SRC#TESTS#RETURNS#UTILS#ASSERTFAILUREWITHMESSAGE";
                                readonly value: "Void.";
                            };
                            readonly assertSuccess: {
                                readonly key: "EN#TSDOC#SRC#TESTS#RETURNS#UTILS#ASSERTSUCCESS";
                                readonly value: "Void.";
                            };
                        };
                    };
                };
            };
        };
        readonly composedVariablesExclusives: {
            readonly variables: {
                readonly getSourceCodeFromCode: {
                    readonly key: "EN#COMPOSEDVARIABLESEXCLUSIVES#VARIABLES#GETSOURCECODEFROMCODE";
                    readonly value: "getSourceCodeFromCode";
                };
                readonly getSourceCodeFromPath: {
                    readonly key: "EN#COMPOSEDVARIABLESEXCLUSIVES#VARIABLES#GETSOURCECODEFROMPATH";
                    readonly value: "getSourceCodeFromPath";
                };
                readonly typeScriptAndJSXCompatible: {
                    readonly key: "EN#COMPOSEDVARIABLESEXCLUSIVES#VARIABLES#TYPESCRIPTANDJSXCOMPATIBLE";
                    readonly value: "typeScriptAndJSXCompatible";
                };
                readonly noInlineConfig: {
                    readonly key: "EN#COMPOSEDVARIABLESEXCLUSIVES#VARIABLES#NOINLINECONFIG";
                    readonly value: "noInlineConfig";
                };
                readonly parser: {
                    readonly key: "EN#COMPOSEDVARIABLESEXCLUSIVES#VARIABLES#PARSER";
                    readonly value: "parser";
                };
                readonly parserOptions: {
                    readonly key: "EN#COMPOSEDVARIABLESEXCLUSIVES#VARIABLES#PARSEROPTIONS";
                    readonly value: "parserOptions";
                };
                readonly ecmaFeatures: {
                    readonly key: "EN#COMPOSEDVARIABLESEXCLUSIVES#VARIABLES#ECMAFEATURES";
                    readonly value: "ecmaFeatures";
                };
                readonly pEcmaFeatures: {
                    readonly key: "EN#COMPOSEDVARIABLESEXCLUSIVES#VARIABLES#PECMAFEATURES";
                    readonly value: "parserOptions.ecmaFeatures";
                };
                readonly jsx: {
                    readonly key: "EN#COMPOSEDVARIABLESEXCLUSIVES#VARIABLES#JSX";
                    readonly value: "jsx";
                };
                readonly pEJsx: {
                    readonly key: "EN#COMPOSEDVARIABLESEXCLUSIVES#VARIABLES#PEJSX";
                    readonly value: "parserOptions.ecmaFeatures.jsx";
                };
            };
            readonly arguments: {
                readonly code: {
                    readonly key: "EN#COMPOSEDVARIABLESEXCLUSIVES#ARGUMENTS#CODE";
                    readonly value: "code";
                };
                readonly absolutePath: {
                    readonly key: "EN#COMPOSEDVARIABLESEXCLUSIVES#ARGUMENTS#ABSOLUTEPATH";
                    readonly value: "absolutePath";
                };
            };
            readonly eslintSourceCode: {
                readonly key: "EN#COMPOSEDVARIABLESEXCLUSIVES#ESLINTSOURCECODE";
                readonly value: "ESLint-generated `SourceCode` object of a file";
            };
            readonly singleError: {
                readonly key: "EN#COMPOSEDVARIABLESEXCLUSIVES#SINGLEERROR";
                readonly value: "single error in its `errors` array";
            };
            readonly basedOnMessageAndStatus: {
                readonly key: "EN#COMPOSEDVARIABLESEXCLUSIVES#BASEDONMESSAGEANDSTATUS";
                readonly value: "based on the `message` it is meant to display and the `status` it is meant to have";
            };
            readonly code: {
                readonly key: "EN#COMPOSEDVARIABLESEXCLUSIVES#CODE";
                readonly value: "code as text of the file";
            };
            readonly absolutePath: {
                readonly key: "EN#COMPOSEDVARIABLESEXCLUSIVES#ABSOLUTEPATH";
                readonly value: "absolute path of the file";
            };
            readonly atHand: {
                readonly key: "EN#COMPOSEDVARIABLESEXCLUSIVES#ATHAND";
                readonly value: "at hand";
            };
            readonly success_true: {
                readonly key: "EN#COMPOSEDVARIABLESEXCLUSIVES#SUCCESS_TRUE";
                readonly value: "success: true";
            };
            readonly success_false: {
                readonly key: "EN#COMPOSEDVARIABLESEXCLUSIVES#SUCCESS_FALSE";
                readonly value: "success: false";
            };
            readonly _asserts: {
                readonly key: "EN#COMPOSEDVARIABLESEXCLUSIVES#_ASSERTS";
                readonly value: "Asserts";
            };
            readonly whenItShould: {
                readonly key: "EN#COMPOSEDVARIABLESEXCLUSIVES#WHENITSHOULD";
                readonly value: "when it should";
            };
            readonly message: {
                readonly key: "EN#COMPOSEDVARIABLESEXCLUSIVES#MESSAGE";
                readonly value: "message";
            };
            readonly status: {
                readonly key: "EN#COMPOSEDVARIABLESEXCLUSIVES#STATUS";
                readonly value: "status";
            };
            readonly success: {
                readonly key: "EN#COMPOSEDVARIABLESEXCLUSIVES#SUCCESS";
                readonly value: "success";
            };
            readonly _void: {
                readonly key: "EN#COMPOSEDVARIABLESEXCLUSIVES#_VOID";
                readonly value: "Void";
            };
        };
    };
    readonly fr: {
        readonly tsDoc: {
            readonly src: {
                readonly consts: {
                    readonly errors: {
                        readonly messages: {
                            readonly codeSupposedToBeString: {
                                readonly key: "FR#TSDOC#SRC#CONSTS#ERRORS#MESSAGES#CODESUPPOSEDTOBESTRING";
                                readonly value: "`code` is supposed to be a string. / (En anglais uniquement.)";
                            };
                            readonly absolutePathSupposedToBeString: {
                                readonly key: "FR#TSDOC#SRC#CONSTS#ERRORS#MESSAGES#ABSOLUTEPATHSUPPOSEDTOBESTRING";
                                readonly value: "`absolutePath` is supposed to be a string. / (En anglais uniquement.)";
                            };
                            readonly absolutePathSupposedToBeAbsolute: {
                                readonly key: "FR#TSDOC#SRC#CONSTS#ERRORS#MESSAGES#ABSOLUTEPATHSUPPOSEDTOBEABSOLUTE";
                                readonly value: "`absolutePath` is supposed to be absolute. / (En anglais uniquement.)";
                            };
                            readonly absolutePathCouldntBeRead: {
                                readonly key: "FR#TSDOC#SRC#CONSTS#ERRORS#MESSAGES#ABSOLUTEPATHCOULDNTBEREAD";
                                readonly value: "Absolute file path could not be read. / (En anglais uniquement.)";
                            };
                            readonly jsTsJsxTsxCouldntBeParsed: {
                                readonly key: "FR#TSDOC#SRC#CONSTS#ERRORS#MESSAGES#JSTSJSXTSXCOULDNTBEPARSED";
                                readonly value: "JS/TS/JSX/TSX source code could not be parsed. / (En anglais uniquement.)";
                            };
                        };
                        readonly statuses: {
                            readonly CODE_NOT_STRING: {
                                readonly key: "FR#TSDOC#SRC#CONSTS#ERRORS#STATUSES#CODE_NOT_STRING";
                                readonly value: "En anglais à l'exécution : \"`code` is supposed to be a string.\"";
                            };
                            readonly ABSOLUTEPATH_NOT_STRING: {
                                readonly key: "FR#TSDOC#SRC#CONSTS#ERRORS#STATUSES#ABSOLUTEPATH_NOT_STRING";
                                readonly value: "En anglais à l'exécution : \"`absolutePath` is supposed to be a string.\"";
                            };
                            readonly ABSOLUTEPATH_NOT_ABSOLUTE: {
                                readonly key: "FR#TSDOC#SRC#CONSTS#ERRORS#STATUSES#ABSOLUTEPATH_NOT_ABSOLUTE";
                                readonly value: "En anglais à l'exécution : \"`absolutePath` is supposed to be absolute.\"";
                            };
                            readonly ABSOLUTE_PATH_NOT_FOUND: {
                                readonly key: "FR#TSDOC#SRC#CONSTS#ERRORS#STATUSES#ABSOLUTE_PATH_NOT_FOUND";
                                readonly value: "En anglais à l'exécution : \"Absolute file path could not be read.\"";
                            };
                            readonly SOURCE_CODE_FATAL_SYNTAX: {
                                readonly key: "FR#TSDOC#SRC#CONSTS#ERRORS#STATUSES#SOURCE_CODE_FATAL_SYNTAX";
                                readonly value: "En anglais à l'exécution : \"JS/TS/JSX/TSX source code could not be parsed.\"";
                            };
                        };
                    };
                };
                readonly lib: {
                    readonly consts: {
                        readonly parser: {
                            readonly public: {
                                readonly typeScriptAndJSXCompatible: {
                                    readonly key: "FR#TSDOC#SRC#LIB#CONSTS#PARSER#PUBLIC#TYPESCRIPTANDJSXCOMPATIBLE";
                                    readonly value: "Objet `languageOptions` pour instances de classes `ESLint` et `Linter` permettant l'analyse statique de fichiers TypeScript et JSX (React).";
                                };
                                readonly noInlineConfig: {
                                    readonly key: "FR#TSDOC#SRC#LIB#CONSTS#PARSER#PUBLIC#NOINLINECONFIG";
                                    readonly value: "Objet `linterOptions` pour instances de classes `ESLint` et `Linter` désactivant les configurations dans le code lors d'usages programmatiques de ESLint.";
                                };
                            };
                        };
                    };
                    readonly defs: {
                        readonly utils: {
                            readonly public: {
                                readonly getSourceCodeFromCode: {
                                    readonly key: "FR#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#GETSOURCECODEFROMCODE";
                                    readonly value: "Obtient l'objet `SourceCode` généré par ESLint d'un fichier à partir de son code en tant que texte.";
                                };
                                readonly getSourceCodeFromPath: {
                                    readonly key: "FR#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#GETSOURCECODEFROMPATH";
                                    readonly value: "Obtient l'objet `SourceCode` généré par ESLint d'un fichier à partir de son chemin absolu.";
                                };
                            };
                        };
                    };
                    readonly params: {
                        readonly utils: {
                            readonly public: {
                                readonly code: {
                                    readonly key: "FR#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#CODE";
                                    readonly value: "Le code en tant que texte du fichier concerné.";
                                };
                                readonly absolutePath: {
                                    readonly key: "FR#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#ABSOLUTEPATH";
                                    readonly value: "Le chemin absolu du fichier concerné.";
                                };
                            };
                        };
                    };
                    readonly returns: {
                        readonly utils: {
                            readonly public: {
                                readonly getSourceCodeFromCode: {
                                    readonly key: "FR#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#GETSOURCECODEFROMCODE";
                                    readonly value: "L'objet `SourceCode` généré par ESLint d'un fichier, à partir duquel l'AST (`sourceCode.ast`) et tous les commentaires (`sourceCode.getAllComments()`) peuvent être extraits, à l'intérieur d'un objet `{success: true}` à sa clé `sourceCode`. En cas d'erreur, un objet `{success: false}` est retourné à la place.";
                                };
                                readonly getSourceCodeFromPath: {
                                    readonly key: "FR#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#GETSOURCECODEFROMPATH";
                                    readonly value: "L'objet `SourceCode` généré par ESLint d'un fichier, à partir duquel l'AST (`sourceCode.ast`) et tous les commentaires (`sourceCode.getAllComments()`) peuvent être extraits, à l'intérieur d'un objet `{success: true}` à sa clé `sourceCode`. En cas d'erreur, un objet `{success: false}` est retourné à la place.";
                                };
                            };
                        };
                    };
                };
                readonly tests: {
                    readonly defs: {
                        readonly utils: {
                            readonly assertFailureWithMessage: {
                                readonly key: "FR#TSDOC#SRC#TESTS#DEFS#UTILS#ASSERTFAILUREWITHMESSAGE";
                                readonly value: "Confirme que `getSourceCodeFromCode` ou `getSourceCodeFromPath` échoue lorsqu'il se doit.";
                            };
                            readonly assertSuccess: {
                                readonly key: "FR#TSDOC#SRC#TESTS#DEFS#UTILS#ASSERTSUCCESS";
                                readonly value: "Confirme que `getSourceCodeFromCode` ou `getSourceCodeFromPath` réussit lorsqu'il se doit.";
                            };
                        };
                    };
                    readonly params: {
                        readonly utils: {
                            readonly getSourceCodeResults: {
                                readonly key: "FR#TSDOC#SRC#TESTS#PARAMS#UTILS#GETSOURCECODERESULTS";
                                readonly value: "Les résultats de l'instance de `getSourceCodeFromCode` ou `getSourceCodeFromPath` appelée lors du test, dont le succès ou l'échec est évalué à travers la valeur booléenne de leur clé `success`.";
                            };
                            readonly expectedMessage: {
                                readonly key: "FR#TSDOC#SRC#TESTS#PARAMS#UTILS#EXPECTEDMESSAGE";
                                readonly value: "Le message attendu de l'erreur qui devrait être rencontrée en cas d'échec (`message`), à partir duquel le statut peut être déduit (`status`).";
                            };
                        };
                    };
                    readonly returns: {
                        readonly utils: {
                            readonly assertFailureWithMessage: {
                                readonly key: "FR#TSDOC#SRC#TESTS#RETURNS#UTILS#ASSERTFAILUREWITHMESSAGE";
                                readonly value: "Void.";
                            };
                            readonly assertSuccess: {
                                readonly key: "FR#TSDOC#SRC#TESTS#RETURNS#UTILS#ASSERTSUCCESS";
                                readonly value: "Void.";
                            };
                        };
                    };
                };
            };
        };
        readonly composedVariablesExclusives: {
            readonly variables: {};
            readonly arguments: {};
            readonly _enAnglais: {
                readonly key: "FR#COMPOSEDVARIABLESEXCLUSIVES#_ENANGLAIS";
                readonly value: "En anglais à l'exécution";
            };
            readonly _enAnglais_: {
                readonly key: "FR#COMPOSEDVARIABLESEXCLUSIVES#_ENANGLAIS_";
                readonly value: "(En anglais uniquement.)";
            };
            readonly eslintSourceCode: {
                readonly key: "FR#COMPOSEDVARIABLESEXCLUSIVES#ESLINTSOURCECODE";
                readonly value: "objet `SourceCode` généré par ESLint d'un fichier";
            };
            readonly singleError: {
                readonly key: "FR#COMPOSEDVARIABLESEXCLUSIVES#SINGLEERROR";
                readonly value: "seule erreur dans son array `errors`";
            };
            readonly basedOnMessageAndStatus: {
                readonly key: "FR#COMPOSEDVARIABLESEXCLUSIVES#BASEDONMESSAGEANDSTATUS";
                readonly value: "basée sur le `message` qu'elle doit montrer et le `status` qu'elle doit avoir";
            };
            readonly code: {
                readonly key: "FR#COMPOSEDVARIABLESEXCLUSIVES#CODE";
                readonly value: "code en tant que texte du fichier";
            };
            readonly absolutePath: {
                readonly key: "FR#COMPOSEDVARIABLESEXCLUSIVES#ABSOLUTEPATH";
                readonly value: "chemin absolu du fichier";
            };
            readonly concerné: {
                readonly key: "FR#COMPOSEDVARIABLESEXCLUSIVES#CONCERNÉ";
                readonly value: "concerné";
            };
            readonly _asserts: {
                readonly key: "FR#COMPOSEDVARIABLESEXCLUSIVES#_ASSERTS";
                readonly value: "Confirme";
            };
            readonly whenItShould: {
                readonly key: "FR#COMPOSEDVARIABLESEXCLUSIVES#WHENITSHOULD";
                readonly value: "lorsqu'il se doit";
            };
        };
    };
};
