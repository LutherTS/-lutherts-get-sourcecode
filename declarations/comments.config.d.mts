export const resolvedConfigData: {
    "en": {
        "tsDoc": {
            "src": {
                "consts": {
                    "errors": {
                        "messages": {
                            "absolutePathSupposedToBeString": {
                                "value": "`absolutePath` is supposed to be a string.";
                                "key": "EN#TSDOC#SRC#CONSTS#ERRORS#MESSAGES#ABSOLUTEPATHSUPPOSEDTOBESTRING";
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
                            "ABSOLUTEPATH_NOT_STRING": {
                                "value": "\"`absolutePath` is supposed to be a string.\"";
                                "key": "EN#TSDOC#SRC#CONSTS#ERRORS#STATUSES#ABSOLUTEPATH_NOT_STRING";
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
                            };
                        };
                    };
                    "defs": {
                        "utils": {
                            "public": {
                                "getSourceCode": {
                                    "value": "Gets the ESLint-generated `SourceCode` object of a file from its absolute path.";
                                    "key": "EN#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#GETSOURCECODE";
                                };
                            };
                        };
                    };
                    "params": {
                        "utils": {
                            "public": {
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
                                "getSourceCode": {
                                    "value": "The ESLint-generated `SourceCode` object of a file, from which the AST (`sourceCode.ast`) and all comments (`sourceCode.getAllComments()`) can be extracted, inside a `{success: true}` object at its `sourceCode` key. In case of an error, a `{success: false}` object is returned instead.";
                                    "key": "EN#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#GETSOURCECODE";
                                };
                            };
                        };
                    };
                };
                "tests": {
                    "defs": {
                        "utils": {
                            "assertFailureWithMessage": {
                                "value": "Asserts that `getSourceCode` fails when it should.";
                                "key": "EN#TSDOC#SRC#TESTS#DEFS#UTILS#ASSERTFAILUREWITHMESSAGE";
                            };
                            "assertSuccess": {
                                "value": "Asserts that `getSourceCode` succeeds when it should.";
                                "key": "EN#TSDOC#SRC#TESTS#DEFS#UTILS#ASSERTSUCCESS";
                            };
                        };
                    };
                    "params": {
                        "utils": {
                            "getSourceCodeResults": {
                                "value": "The results of the `getSourceCode` instance called in the test, whose success or failure is evaluated via its `success` key's boolean value.";
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
                "getSourceCode": {
                    "value": "getSourceCode";
                    "key": "EN#FORCOMPOSEDVARIABLES#VARIABLES#GETSOURCECODE";
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
                            "absolutePathSupposedToBeString": {
                                "value": "`absolutePath` is supposed to be a string. / (En anglais uniquement.)";
                                "key": "FR#TSDOC#SRC#CONSTS#ERRORS#MESSAGES#ABSOLUTEPATHSUPPOSEDTOBESTRING";
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
                            "ABSOLUTEPATH_NOT_STRING": {
                                "value": "En anglais \u00E0 l'ex\u00E9cution : \"`absolutePath` is supposed to be a string.\"";
                                "key": "FR#TSDOC#SRC#CONSTS#ERRORS#STATUSES#ABSOLUTEPATH_NOT_STRING";
                            };
                            "ABSOLUTE_PATH_NOT_FOUND": {
                                "value": "En anglais \u00E0 l'ex\u00E9cution : \"Absolute file path could not be read.\"";
                                "key": "FR#TSDOC#SRC#CONSTS#ERRORS#STATUSES#ABSOLUTE_PATH_NOT_FOUND";
                            };
                            "SOURCE_CODE_FATAL_SYNTAX": {
                                "value": "En anglais \u00E0 l'ex\u00E9cution : \"JS/TS/JSX/TSX source code could not be parsed.\"";
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
                            };
                        };
                    };
                    "defs": {
                        "utils": {
                            "public": {
                                "getSourceCode": {
                                    "value": "Obtient l'objet `SourceCode` g\u00E9n\u00E9r\u00E9 par ESLint d'un fichier \u00E0 partir de son chemin absolu.";
                                    "key": "FR#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#GETSOURCECODE";
                                };
                            };
                        };
                    };
                    "params": {
                        "utils": {
                            "public": {
                                "absolutePath": {
                                    "value": "Le chemin absolu du fichier concern\u00E9.";
                                    "key": "FR#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#ABSOLUTEPATH";
                                };
                            };
                        };
                    };
                    "returns": {
                        "utils": {
                            "public": {
                                "getSourceCode": {
                                    "value": "L'objet `SourceCode` g\u00E9n\u00E9r\u00E9 par ESLint d'un fichier, \u00E0 partir duquel l'AST (`sourceCode.ast`) et tous les commentaires (`sourceCode.getAllComments()`) peuvent \u00EAtre extraits, \u00E0 l'int\u00E9rieur d'un objet `{success: true}` \u00E0 sa cl\u00E9 `sourceCode`. En cas d'erreur, un objet `{success: false}` est retourn\u00E9 \u00E0 la place.";
                                    "key": "FR#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#GETSOURCECODE";
                                };
                            };
                        };
                    };
                };
                "tests": {
                    "defs": {
                        "utils": {
                            "assertFailureWithMessage": {
                                "value": "Confirme que `getSourceCode` \u00E9choue lors qu'il se doit.";
                                "key": "FR#TSDOC#SRC#TESTS#DEFS#UTILS#ASSERTFAILUREWITHMESSAGE";
                            };
                            "assertSuccess": {
                                "value": "Confirme que `getSourceCode` r\u00E9ussit lors qu'il se doit.";
                                "key": "FR#TSDOC#SRC#TESTS#DEFS#UTILS#ASSERTSUCCESS";
                            };
                        };
                    };
                    "params": {
                        "utils": {
                            "getSourceCodeResults": {
                                "value": "Les r\u00E9sultats de l'instance de `getSourceCode` appel\u00E9e lors du test, dont le succ\u00E8s ou l'\u00E9chec est \u00E9valu\u00E9 \u00E0 travers la valeur bool\u00E9enne de leur cl\u00E9 `success`.";
                                "key": "FR#TSDOC#SRC#TESTS#PARAMS#UTILS#GETSOURCECODERESULTS";
                            };
                            "expectedMessage": {
                                "value": "Le message attendu de l'erreur qui devrait \u00EAtre rencontr\u00E9e en cas d'\u00E9chec (`message`), \u00E0 partir duquel le statut peut \u00EAtre d\u00E9duit (`status`).";
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
                "getSourceCode": {
                    "value": "getSourceCode";
                    "key": "FR#FORCOMPOSEDVARIABLES#VARIABLES#GETSOURCECODE";
                };
            };
            "arguments": {};
        };
        "composedVariablesExclusives": {
            "variables": {};
            "arguments": {};
            "_enAnglais": {
                "value": "En anglais \u00E0 l'ex\u00E9cution";
                "key": "FR#COMPOSEDVARIABLESEXCLUSIVES#_ENANGLAIS";
            };
            "_enAnglais_": {
                "value": "(En anglais uniquement.)";
                "key": "FR#COMPOSEDVARIABLESEXCLUSIVES#_ENANGLAIS_";
            };
            "eslintSourceCode": {
                "value": "objet `SourceCode` g\u00E9n\u00E9r\u00E9 par ESLint d'un fichier";
                "key": "FR#COMPOSEDVARIABLESEXCLUSIVES#ESLINTSOURCECODE";
            };
            "singleError": {
                "value": "seule erreur dans son array `errors`";
                "key": "FR#COMPOSEDVARIABLESEXCLUSIVES#SINGLEERROR";
            };
            "basedOnMessageAndStatus": {
                "value": "bas\u00E9e sur le `message` qu'elle doit montrer et le `status` qu'elle doit avoir";
                "key": "FR#COMPOSEDVARIABLESEXCLUSIVES#BASEDONMESSAGEANDSTATUS";
            };
            "absolutePath": {
                "value": "chemin absolu du fichier";
                "key": "FR#COMPOSEDVARIABLESEXCLUSIVES#ABSOLUTEPATH";
            };
            "concern\u00E9": {
                "value": "concern\u00E9";
                "key": "FR#COMPOSEDVARIABLESEXCLUSIVES#CONCERN\u00C9";
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
