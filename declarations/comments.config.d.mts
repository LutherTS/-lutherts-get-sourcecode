export declare const resolvedConfigData: {
    "en": {
        "tsDoc": {
            "src": {
                "consts": {
                    "errors": {
                        "messages": {
                            "codeSupposedToBeString": {
                                "value": "`code` is supposed to be a string.";
                                "key": "EN#TSDOC#SRC#CONSTS#ERRORS#MESSAGES#CODESUPPOSEDTOBESTRING";
                            };
                            "absolutePathSupposedToBeString": {
                                "value": "`absolutePath` is supposed to be a string.";
                                "key": "EN#TSDOC#SRC#CONSTS#ERRORS#MESSAGES#ABSOLUTEPATHSUPPOSEDTOBESTRING";
                            };
                            "absolutePathSupposedToBeAbsolute": {
                                "value": "`absolutePath` is supposed to be absolute.";
                                "key": "EN#TSDOC#SRC#CONSTS#ERRORS#MESSAGES#ABSOLUTEPATHSUPPOSEDTOBEABSOLUTE";
                            };
                            "absolutePathCouldntBeRead": {
                                "value": "Absolute file path could not be read.";
                                "key": "EN#TSDOC#SRC#CONSTS#ERRORS#MESSAGES#ABSOLUTEPATHCOULDNTBEREAD";
                            };
                            "jsTsJsxTsxCouldntBeParsed": {
                                "value": "JS/TS/JSX/TSX source code could not be parsed.";
                                "key": "EN#TSDOC#SRC#CONSTS#ERRORS#MESSAGES#JSTSJSXTSXCOULDNTBEPARSED";
                            };
                        };
                        "statuses": {
                            "CODE_NOT_STRING": {
                                "value": "\"`code` is supposed to be a string.\"";
                                "key": "EN#TSDOC#SRC#CONSTS#ERRORS#STATUSES#CODE_NOT_STRING";
                            };
                            "ABSOLUTEPATH_NOT_STRING": {
                                "value": "\"`absolutePath` is supposed to be a string.\"";
                                "key": "EN#TSDOC#SRC#CONSTS#ERRORS#STATUSES#ABSOLUTEPATH_NOT_STRING";
                            };
                            "ABSOLUTEPATH_NOT_ABSOLUTE": {
                                "value": "\"`absolutePath` is supposed to be absolute.\"";
                                "key": "EN#TSDOC#SRC#CONSTS#ERRORS#STATUSES#ABSOLUTEPATH_NOT_ABSOLUTE";
                            };
                            "ABSOLUTE_PATH_NOT_FOUND": {
                                "value": "\"Absolute file path could not be read.\"";
                                "key": "EN#TSDOC#SRC#CONSTS#ERRORS#STATUSES#ABSOLUTE_PATH_NOT_FOUND";
                            };
                            "SOURCE_CODE_FATAL_SYNTAX": {
                                "value": "\"JS/TS/JSX/TSX source code could not be parsed.\"";
                                "key": "EN#TSDOC#SRC#CONSTS#ERRORS#STATUSES#SOURCE_CODE_FATAL_SYNTAX";
                            };
                        };
                    };
                };
                "lib": {
                    "consts": {
                        "parser": {
                            "public": {
                                "typeScriptAndJSXCompatible": {
                                    "value": "`languageOptions` object for instances of the `ESLint` and `Linter` classes enabling the linting of TypeScript and JSX (React) files.";
                                    "key": "EN#TSDOC#SRC#LIB#CONSTS#PARSER#PUBLIC#TYPESCRIPTANDJSXCOMPATIBLE";
                                };
                                "noInlineConfig": {
                                    "value": "`linterOptions` object for instances of the `ESLint` and `Linter` classes disabling ESLint inline configs when using ESLint programmatically.";
                                    "key": "EN#TSDOC#SRC#LIB#CONSTS#PARSER#PUBLIC#NOINLINECONFIG";
                                };
                            };
                        };
                    };
                    "defs": {
                        "utils": {
                            "public": {
                                "getSourceCodeFromCode": {
                                    "value": "Gets the ESLint-generated `SourceCode` object of a file from its code as text.";
                                    "key": "EN#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#GETSOURCECODEFROMCODE";
                                };
                                "getSourceCodeFromPath": {
                                    "value": "Gets the ESLint-generated `SourceCode` object of a file from its absolute path.";
                                    "key": "EN#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#GETSOURCECODEFROMPATH";
                                };
                            };
                        };
                    };
                    "params": {
                        "utils": {
                            "public": {
                                "code": {
                                    "value": "The code as text of the file at hand.";
                                    "key": "EN#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#CODE";
                                };
                                "absolutePath": {
                                    "value": "The absolute path of the file at hand.";
                                    "key": "EN#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#ABSOLUTEPATH";
                                };
                            };
                        };
                    };
                    "returns": {
                        "utils": {
                            "public": {
                                "getSourceCodeFromCode": {
                                    "value": "The ESLint-generated `SourceCode` object of a file, from which the AST (`sourceCode.ast`) and all comments (`sourceCode.getAllComments()`) can be extracted, inside a `{success: true}` object at its `sourceCode` key. In case of an error, a `{success: false}` object is returned instead.";
                                    "key": "EN#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#GETSOURCECODEFROMCODE";
                                };
                                "getSourceCodeFromPath": {
                                    "value": "The ESLint-generated `SourceCode` object of a file, from which the AST (`sourceCode.ast`) and all comments (`sourceCode.getAllComments()`) can be extracted, inside a `{success: true}` object at its `sourceCode` key. In case of an error, a `{success: false}` object is returned instead.";
                                    "key": "EN#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#GETSOURCECODEFROMPATH";
                                };
                            };
                        };
                    };
                };
                "tests": {
                    "defs": {
                        "utils": {
                            "assertFailureWithMessage": {
                                "value": "Asserts that `getSourceCodeFromCode` or `getSourceCodeFromPath` fails when it should.";
                                "key": "EN#TSDOC#SRC#TESTS#DEFS#UTILS#ASSERTFAILUREWITHMESSAGE";
                            };
                            "assertSuccess": {
                                "value": "Asserts that `getSourceCodeFromCode` or `getSourceCodeFromPath` succeeds when it should.";
                                "key": "EN#TSDOC#SRC#TESTS#DEFS#UTILS#ASSERTSUCCESS";
                            };
                        };
                    };
                    "params": {
                        "utils": {
                            "getSourceCodeResults": {
                                "value": "The results of the `getSourceCodeFromCode` or `getSourceCodeFromPath` instance called in the test, whose success or failure is evaluated via its `success` key's boolean value.";
                                "key": "EN#TSDOC#SRC#TESTS#PARAMS#UTILS#GETSOURCECODERESULTS";
                            };
                            "expectedMessage": {
                                "value": "The expected message of the error that should be encountered during failure, from which the status can be inferred.";
                                "key": "EN#TSDOC#SRC#TESTS#PARAMS#UTILS#EXPECTEDMESSAGE";
                            };
                        };
                    };
                    "returns": {
                        "utils": {
                            "assertFailureWithMessage": {
                                "value": "Void.";
                                "key": "EN#TSDOC#SRC#TESTS#RETURNS#UTILS#ASSERTFAILUREWITHMESSAGE";
                            };
                            "assertSuccess": {
                                "value": "Void.";
                                "key": "EN#TSDOC#SRC#TESTS#RETURNS#UTILS#ASSERTSUCCESS";
                            };
                        };
                    };
                };
            };
        };
        "forComposedVariables": {
            "variables": {
                "getSourceCodeFromCode": {
                    "value": "getSourceCodeFromCode";
                    "key": "EN#FORCOMPOSEDVARIABLES#VARIABLES#GETSOURCECODEFROMCODE";
                };
                "getSourceCodeFromPath": {
                    "value": "getSourceCodeFromPath";
                    "key": "EN#FORCOMPOSEDVARIABLES#VARIABLES#GETSOURCECODEFROMPATH";
                };
            };
            "arguments": {};
        };
        "composedVariablesExclusives": {
            "variables": {
                "typeScriptAndJSXCompatible": {
                    "value": "typeScriptAndJSXCompatible";
                    "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#VARIABLES#TYPESCRIPTANDJSXCOMPATIBLE";
                };
                "noInlineConfig": {
                    "value": "noInlineConfig";
                    "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#VARIABLES#NOINLINECONFIG";
                };
                "parser": {
                    "value": "parser";
                    "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#VARIABLES#PARSER";
                };
                "parserOptions": {
                    "value": "parserOptions";
                    "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#VARIABLES#PARSEROPTIONS";
                };
                "ecmaFeatures": {
                    "value": "ecmaFeatures";
                    "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#VARIABLES#ECMAFEATURES";
                };
                "pEcmaFeatures": {
                    "value": "parserOptions.ecmaFeatures";
                    "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#VARIABLES#PECMAFEATURES";
                };
                "jsx": {
                    "value": "jsx";
                    "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#VARIABLES#JSX";
                };
                "pEJsx": {
                    "value": "parserOptions.ecmaFeatures.jsx";
                    "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#VARIABLES#PEJSX";
                };
            };
            "arguments": {
                "code": {
                    "value": "code";
                    "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#ARGUMENTS#CODE";
                };
                "absolutePath": {
                    "value": "absolutePath";
                    "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#ARGUMENTS#ABSOLUTEPATH";
                };
            };
            "eslintSourceCode": {
                "value": "ESLint-generated `SourceCode` object of a file";
                "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#ESLINTSOURCECODE";
            };
            "singleError": {
                "value": "single error in its `errors` array";
                "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#SINGLEERROR";
            };
            "basedOnMessageAndStatus": {
                "value": "based on the `message` it is meant to display and the `status` it is meant to have";
                "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#BASEDONMESSAGEANDSTATUS";
            };
            "code": {
                "value": "code as text of the file";
                "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#CODE";
            };
            "absolutePath": {
                "value": "absolute path of the file";
                "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#ABSOLUTEPATH";
            };
            "atHand": {
                "value": "at hand";
                "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#ATHAND";
            };
            "success_true": {
                "value": "success: true";
                "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#SUCCESS_TRUE";
            };
            "success_false": {
                "value": "success: false";
                "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#SUCCESS_FALSE";
            };
            "_asserts": {
                "value": "Asserts";
                "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#_ASSERTS";
            };
            "whenItShould": {
                "value": "when it should";
                "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#WHENITSHOULD";
            };
            "message": {
                "value": "message";
                "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#MESSAGE";
            };
            "status": {
                "value": "status";
                "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#STATUS";
            };
            "success": {
                "value": "success";
                "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#SUCCESS";
            };
            "_void": {
                "value": "Void";
                "key": "EN#COMPOSEDVARIABLESEXCLUSIVES#_VOID";
            };
        };
    };
    "fr": {
        "tsDoc": {
            "src": {
                "consts": {
                    "errors": {
                        "messages": {
                            "codeSupposedToBeString": {
                                "value": "`code` is supposed to be a string. / (En anglais uniquement.)";
                                "key": "FR#TSDOC#SRC#CONSTS#ERRORS#MESSAGES#CODESUPPOSEDTOBESTRING";
                            };
                            "absolutePathSupposedToBeString": {
                                "value": "`absolutePath` is supposed to be a string. / (En anglais uniquement.)";
                                "key": "FR#TSDOC#SRC#CONSTS#ERRORS#MESSAGES#ABSOLUTEPATHSUPPOSEDTOBESTRING";
                            };
                            "absolutePathSupposedToBeAbsolute": {
                                "value": "`absolutePath` is supposed to be absolute. / (En anglais uniquement.)";
                                "key": "FR#TSDOC#SRC#CONSTS#ERRORS#MESSAGES#ABSOLUTEPATHSUPPOSEDTOBEABSOLUTE";
                            };
                            "absolutePathCouldntBeRead": {
                                "value": "Absolute file path could not be read. / (En anglais uniquement.)";
                                "key": "FR#TSDOC#SRC#CONSTS#ERRORS#MESSAGES#ABSOLUTEPATHCOULDNTBEREAD";
                            };
                            "jsTsJsxTsxCouldntBeParsed": {
                                "value": "JS/TS/JSX/TSX source code could not be parsed. / (En anglais uniquement.)";
                                "key": "FR#TSDOC#SRC#CONSTS#ERRORS#MESSAGES#JSTSJSXTSXCOULDNTBEPARSED";
                            };
                        };
                        "statuses": {
                            "CODE_NOT_STRING": {
                                "value": "En anglais à l'exécution : \"`code` is supposed to be a string.\"";
                                "key": "FR#TSDOC#SRC#CONSTS#ERRORS#STATUSES#CODE_NOT_STRING";
                            };
                            "ABSOLUTEPATH_NOT_STRING": {
                                "value": "En anglais à l'exécution : \"`absolutePath` is supposed to be a string.\"";
                                "key": "FR#TSDOC#SRC#CONSTS#ERRORS#STATUSES#ABSOLUTEPATH_NOT_STRING";
                            };
                            "ABSOLUTEPATH_NOT_ABSOLUTE": {
                                "value": "En anglais à l'exécution : \"`absolutePath` is supposed to be absolute.\"";
                                "key": "FR#TSDOC#SRC#CONSTS#ERRORS#STATUSES#ABSOLUTEPATH_NOT_ABSOLUTE";
                            };
                            "ABSOLUTE_PATH_NOT_FOUND": {
                                "value": "En anglais à l'exécution : \"Absolute file path could not be read.\"";
                                "key": "FR#TSDOC#SRC#CONSTS#ERRORS#STATUSES#ABSOLUTE_PATH_NOT_FOUND";
                            };
                            "SOURCE_CODE_FATAL_SYNTAX": {
                                "value": "En anglais à l'exécution : \"JS/TS/JSX/TSX source code could not be parsed.\"";
                                "key": "FR#TSDOC#SRC#CONSTS#ERRORS#STATUSES#SOURCE_CODE_FATAL_SYNTAX";
                            };
                        };
                    };
                };
                "lib": {
                    "consts": {
                        "parser": {
                            "public": {
                                "typeScriptAndJSXCompatible": {
                                    "value": "Objet `languageOptions` pour instances de classes `ESLint` et `Linter` permettant l'analyse statique de fichiers TypeScript et JSX (React).";
                                    "key": "FR#TSDOC#SRC#LIB#CONSTS#PARSER#PUBLIC#TYPESCRIPTANDJSXCOMPATIBLE";
                                };
                                "noInlineConfig": {
                                    "value": "Object `linterOptions` pour instances de classes `ESLint` et `Linter` désactivant les configurations dans le code lors d'usages programmatiques de ESLint.";
                                    "key": "FR#TSDOC#SRC#LIB#CONSTS#PARSER#PUBLIC#NOINLINECONFIG";
                                };
                            };
                        };
                    };
                    "defs": {
                        "utils": {
                            "public": {
                                "getSourceCodeFromCode": {
                                    "value": "Obtient l'objet `SourceCode` généré par ESLint d'un fichier à partir de son code en tant que texte.";
                                    "key": "FR#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#GETSOURCECODEFROMCODE";
                                };
                                "getSourceCodeFromPath": {
                                    "value": "Obtient l'objet `SourceCode` généré par ESLint d'un fichier à partir de son chemin absolu.";
                                    "key": "FR#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#GETSOURCECODEFROMPATH";
                                };
                            };
                        };
                    };
                    "params": {
                        "utils": {
                            "public": {
                                "code": {
                                    "value": "Le code en tant que texte du fichier concerné.";
                                    "key": "FR#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#CODE";
                                };
                                "absolutePath": {
                                    "value": "Le chemin absolu du fichier concerné.";
                                    "key": "FR#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#ABSOLUTEPATH";
                                };
                            };
                        };
                    };
                    "returns": {
                        "utils": {
                            "public": {
                                "getSourceCodeFromCode": {
                                    "value": "L'objet `SourceCode` généré par ESLint d'un fichier, à partir duquel l'AST (`sourceCode.ast`) et tous les commentaires (`sourceCode.getAllComments()`) peuvent être extraits, à l'intérieur d'un objet `{success: true}` à sa clé `sourceCode`. En cas d'erreur, un objet `{success: false}` est retourné à la place.";
                                    "key": "FR#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#GETSOURCECODEFROMCODE";
                                };
                                "getSourceCodeFromPath": {
                                    "value": "L'objet `SourceCode` généré par ESLint d'un fichier, à partir duquel l'AST (`sourceCode.ast`) et tous les commentaires (`sourceCode.getAllComments()`) peuvent être extraits, à l'intérieur d'un objet `{success: true}` à sa clé `sourceCode`. En cas d'erreur, un objet `{success: false}` est retourné à la place.";
                                    "key": "FR#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#GETSOURCECODEFROMPATH";
                                };
                            };
                        };
                    };
                };
                "tests": {
                    "defs": {
                        "utils": {
                            "assertFailureWithMessage": {
                                "value": "Confirme que `$COMMENT#EN#FORCOMPOSEDVARIABLES#VARIABLES#GETSOURCECODE` échoue lors qu'il se doit.";
                                "key": "FR#TSDOC#SRC#TESTS#DEFS#UTILS#ASSERTFAILUREWITHMESSAGE";
                            };
                            "assertSuccess": {
                                "value": "Confirme que `$COMMENT#EN#FORCOMPOSEDVARIABLES#VARIABLES#GETSOURCECODE` réussit lors qu'il se doit.";
                                "key": "FR#TSDOC#SRC#TESTS#DEFS#UTILS#ASSERTSUCCESS";
                            };
                        };
                    };
                    "params": {
                        "utils": {
                            "getSourceCodeResults": {
                                "value": "Les résultats de l'instance de `getSourceCodeFromPath` appelée lors du test, dont le succès ou l'échec est évalué à travers la valeur booléenne de leur clé `success`.";
                                "key": "FR#TSDOC#SRC#TESTS#PARAMS#UTILS#GETSOURCECODERESULTS";
                            };
                            "expectedMessage": {
                                "value": "Le message attendu de l'erreur qui devrait être rencontrée en cas d'échec (`message`), à partir duquel le statut peut être déduit (`status`).";
                                "key": "FR#TSDOC#SRC#TESTS#PARAMS#UTILS#EXPECTEDMESSAGE";
                            };
                        };
                    };
                    "returns": {
                        "utils": {
                            "assertFailureWithMessage": {
                                "value": "Void.";
                                "key": "FR#TSDOC#SRC#TESTS#RETURNS#UTILS#ASSERTFAILUREWITHMESSAGE";
                            };
                            "assertSuccess": {
                                "value": "Void.";
                                "key": "FR#TSDOC#SRC#TESTS#RETURNS#UTILS#ASSERTSUCCESS";
                            };
                        };
                    };
                };
            };
        };
        "forComposedVariables": {
            "variables": {
                "getSourceCodeFromCode": {
                    "value": "getSourceCodeFromCode";
                    "key": "FR#FORCOMPOSEDVARIABLES#VARIABLES#GETSOURCECODEFROMCODE";
                };
                "getSourceCodeFromPath": {
                    "value": "getSourceCodeFromPath";
                    "key": "FR#FORCOMPOSEDVARIABLES#VARIABLES#GETSOURCECODEFROMPATH";
                };
            };
            "arguments": {};
        };
        "composedVariablesExclusives": {
            "variables": {};
            "arguments": {};
            "_enAnglais": {
                "value": "En anglais à l'exécution";
                "key": "FR#COMPOSEDVARIABLESEXCLUSIVES#_ENANGLAIS";
            };
            "_enAnglais_": {
                "value": "(En anglais uniquement.)";
                "key": "FR#COMPOSEDVARIABLESEXCLUSIVES#_ENANGLAIS_";
            };
            "eslintSourceCode": {
                "value": "objet `SourceCode` généré par ESLint d'un fichier";
                "key": "FR#COMPOSEDVARIABLESEXCLUSIVES#ESLINTSOURCECODE";
            };
            "singleError": {
                "value": "seule erreur dans son array `errors`";
                "key": "FR#COMPOSEDVARIABLESEXCLUSIVES#SINGLEERROR";
            };
            "basedOnMessageAndStatus": {
                "value": "basée sur le `message` qu'elle doit montrer et le `status` qu'elle doit avoir";
                "key": "FR#COMPOSEDVARIABLESEXCLUSIVES#BASEDONMESSAGEANDSTATUS";
            };
            "code": {
                "value": "code en tant que texte du fichier";
                "key": "FR#COMPOSEDVARIABLESEXCLUSIVES#CODE";
            };
            "absolutePath": {
                "value": "chemin absolu du fichier";
                "key": "FR#COMPOSEDVARIABLESEXCLUSIVES#ABSOLUTEPATH";
            };
            "concerné": {
                "value": "concerné";
                "key": "FR#COMPOSEDVARIABLESEXCLUSIVES#CONCERNÉ";
            };
            "_asserts": {
                "value": "Confirme";
                "key": "FR#COMPOSEDVARIABLESEXCLUSIVES#_ASSERTS";
            };
            "whenItShould": {
                "value": "lors qu'il se doit";
                "key": "FR#COMPOSEDVARIABLESEXCLUSIVES#WHENITSHOULD";
            };
        };
    };
};
