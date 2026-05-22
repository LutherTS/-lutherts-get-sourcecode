import fs from "fs";
import { makeSuccessFalseTypeError, successTrue } from "@lutherts/error-handling";
import { Linter } from "eslint";
import { parser } from "typescript-eslint";
//#region comments.config.mjs
/** @private */
const resolvedConfigData = {
	"en": {
		"tsDoc": { "src": {
			"consts": { "errors": {
				"messages": {
					"absolutePathSupposedToBeString": {
						"value": "`absolutePath` is supposed to be a string.",
						"key": "EN#TSDOC#SRC#CONSTS#ERRORS#MESSAGES#ABSOLUTEPATHSUPPOSEDTOBESTRING"
					},
					"absolutePathCouldntBeRead": {
						"value": "Absolute file path could not be read.",
						"key": "EN#TSDOC#SRC#CONSTS#ERRORS#MESSAGES#ABSOLUTEPATHCOULDNTBEREAD"
					},
					"jsTsJsxTsxCouldntBeParsed": {
						"value": "JS/TS/JSX/TSX source code could not be parsed.",
						"key": "EN#TSDOC#SRC#CONSTS#ERRORS#MESSAGES#JSTSJSXTSXCOULDNTBEPARSED"
					}
				},
				"statuses": {
					"ABSOLUTEPATH_NOT_STRING": {
						"value": "\"`absolutePath` is supposed to be a string.\"",
						"key": "EN#TSDOC#SRC#CONSTS#ERRORS#STATUSES#ABSOLUTEPATH_NOT_STRING"
					},
					"ABSOLUTE_PATH_NOT_FOUND": {
						"value": "\"Absolute file path could not be read.\"",
						"key": "EN#TSDOC#SRC#CONSTS#ERRORS#STATUSES#ABSOLUTE_PATH_NOT_FOUND"
					},
					"SOURCE_CODE_FATAL_SYNTAX": {
						"value": "\"JS/TS/JSX/TSX source code could not be parsed.\"",
						"key": "EN#TSDOC#SRC#CONSTS#ERRORS#STATUSES#SOURCE_CODE_FATAL_SYNTAX"
					}
				}
			} },
			"lib": {
				"consts": { "parser": { "public": { "typeScriptAndJSXCompatible": {
					"value": "`languageOptions` object for instances of the `ESLint` and `Linter` classes enabling the linting of TypeScript and JSX (React) files.",
					"key": "EN#TSDOC#SRC#LIB#CONSTS#PARSER#PUBLIC#TYPESCRIPTANDJSXCOMPATIBLE"
				} } } },
				"defs": { "utils": { "public": { "getSourceCode": {
					"value": "Gets the ESLint-generated `SourceCode` object of a file from its absolute path.",
					"key": "EN#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#GETSOURCECODE"
				} } } },
				"params": { "utils": { "public": { "absolutePath": {
					"value": "The absolute path of the file at hand.",
					"key": "EN#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#ABSOLUTEPATH"
				} } } },
				"returns": { "utils": { "public": { "getSourceCode": {
					"value": "The ESLint-generated `SourceCode` object of a file, from which the AST (`sourceCode.ast`) and all comments (`sourceCode.getAllComments()`) can be extracted, inside a `{success: true}` object at its `sourceCode` key. In case of an error, a `{success: false}` object is returned instead.",
					"key": "EN#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#GETSOURCECODE"
				} } } }
			},
			"tests": {
				"defs": { "utils": {
					"assertFailureWithMessage": {
						"value": "Asserts that `getSourceCode` fails when it should.",
						"key": "EN#TSDOC#SRC#TESTS#DEFS#UTILS#ASSERTFAILUREWITHMESSAGE"
					},
					"assertSuccess": {
						"value": "Asserts that `getSourceCode` succeeds when it should.",
						"key": "EN#TSDOC#SRC#TESTS#DEFS#UTILS#ASSERTSUCCESS"
					}
				} },
				"params": { "utils": {
					"getSourceCodeResults": {
						"value": "The results of the `getSourceCode` instance called in the test, whose success or failure is evaluated via its `success` key's boolean value.",
						"key": "EN#TSDOC#SRC#TESTS#PARAMS#UTILS#GETSOURCECODERESULTS"
					},
					"expectedMessage": {
						"value": "The expected message of the error that should be encountered during failure, from which the status can be inferred.",
						"key": "EN#TSDOC#SRC#TESTS#PARAMS#UTILS#EXPECTEDMESSAGE"
					}
				} },
				"returns": { "utils": {
					"assertFailureWithMessage": {
						"value": "Void.",
						"key": "EN#TSDOC#SRC#TESTS#RETURNS#UTILS#ASSERTFAILUREWITHMESSAGE"
					},
					"assertSuccess": {
						"value": "Void.",
						"key": "EN#TSDOC#SRC#TESTS#RETURNS#UTILS#ASSERTSUCCESS"
					}
				} }
			}
		} },
		"forComposedVariables": {
			"variables": { "getSourceCode": {
				"value": "getSourceCode",
				"key": "EN#FORCOMPOSEDVARIABLES#VARIABLES#GETSOURCECODE"
			} },
			"arguments": {}
		},
		"composedVariablesExclusives": {
			"variables": {},
			"arguments": { "absolutePath": {
				"value": "absolutePath",
				"key": "EN#COMPOSEDVARIABLESEXCLUSIVES#ARGUMENTS#ABSOLUTEPATH"
			} },
			"eslintSourceCode": {
				"value": "ESLint-generated `SourceCode` object of a file",
				"key": "EN#COMPOSEDVARIABLESEXCLUSIVES#ESLINTSOURCECODE"
			},
			"singleError": {
				"value": "single error in its `errors` array",
				"key": "EN#COMPOSEDVARIABLESEXCLUSIVES#SINGLEERROR"
			},
			"basedOnMessageAndStatus": {
				"value": "based on the `message` it is meant to display and the `status` it is meant to have",
				"key": "EN#COMPOSEDVARIABLESEXCLUSIVES#BASEDONMESSAGEANDSTATUS"
			},
			"absolutePath": {
				"value": "absolute path of the file",
				"key": "EN#COMPOSEDVARIABLESEXCLUSIVES#ABSOLUTEPATH"
			},
			"atHand": {
				"value": "at hand",
				"key": "EN#COMPOSEDVARIABLESEXCLUSIVES#ATHAND"
			},
			"success_true": {
				"value": "success: true",
				"key": "EN#COMPOSEDVARIABLESEXCLUSIVES#SUCCESS_TRUE"
			},
			"success_false": {
				"value": "success: false",
				"key": "EN#COMPOSEDVARIABLESEXCLUSIVES#SUCCESS_FALSE"
			},
			"_asserts": {
				"value": "Asserts",
				"key": "EN#COMPOSEDVARIABLESEXCLUSIVES#_ASSERTS"
			},
			"whenItShould": {
				"value": "when it should",
				"key": "EN#COMPOSEDVARIABLESEXCLUSIVES#WHENITSHOULD"
			},
			"message": {
				"value": "message",
				"key": "EN#COMPOSEDVARIABLESEXCLUSIVES#MESSAGE"
			},
			"status": {
				"value": "status",
				"key": "EN#COMPOSEDVARIABLESEXCLUSIVES#STATUS"
			},
			"success": {
				"value": "success",
				"key": "EN#COMPOSEDVARIABLESEXCLUSIVES#SUCCESS"
			},
			"_void": {
				"value": "Void",
				"key": "EN#COMPOSEDVARIABLESEXCLUSIVES#_VOID"
			}
		}
	},
	"fr": {
		"tsDoc": { "src": {
			"consts": { "errors": {
				"messages": {
					"absolutePathSupposedToBeString": {
						"value": "`absolutePath` is supposed to be a string. / (En anglais uniquement.)",
						"key": "FR#TSDOC#SRC#CONSTS#ERRORS#MESSAGES#ABSOLUTEPATHSUPPOSEDTOBESTRING"
					},
					"absolutePathCouldntBeRead": {
						"value": "Absolute file path could not be read. / (En anglais uniquement.)",
						"key": "FR#TSDOC#SRC#CONSTS#ERRORS#MESSAGES#ABSOLUTEPATHCOULDNTBEREAD"
					},
					"jsTsJsxTsxCouldntBeParsed": {
						"value": "JS/TS/JSX/TSX source code could not be parsed. / (En anglais uniquement.)",
						"key": "FR#TSDOC#SRC#CONSTS#ERRORS#MESSAGES#JSTSJSXTSXCOULDNTBEPARSED"
					}
				},
				"statuses": {
					"ABSOLUTEPATH_NOT_STRING": {
						"value": "En anglais à l'exécution : \"`absolutePath` is supposed to be a string.\"",
						"key": "FR#TSDOC#SRC#CONSTS#ERRORS#STATUSES#ABSOLUTEPATH_NOT_STRING"
					},
					"ABSOLUTE_PATH_NOT_FOUND": {
						"value": "En anglais à l'exécution : \"Absolute file path could not be read.\"",
						"key": "FR#TSDOC#SRC#CONSTS#ERRORS#STATUSES#ABSOLUTE_PATH_NOT_FOUND"
					},
					"SOURCE_CODE_FATAL_SYNTAX": {
						"value": "En anglais à l'exécution : \"JS/TS/JSX/TSX source code could not be parsed.\"",
						"key": "FR#TSDOC#SRC#CONSTS#ERRORS#STATUSES#SOURCE_CODE_FATAL_SYNTAX"
					}
				}
			} },
			"lib": {
				"consts": { "parser": { "public": { "typeScriptAndJSXCompatible": {
					"value": "Objet `languageOptions` pour instances de classes `ESLint` et `Linter` permettant l'analyse statique de fichiers TypeScript et JSX (React).",
					"key": "FR#TSDOC#SRC#LIB#CONSTS#PARSER#PUBLIC#TYPESCRIPTANDJSXCOMPATIBLE"
				} } } },
				"defs": { "utils": { "public": { "getSourceCode": {
					"value": "Obtient l'objet `SourceCode` généré par ESLint d'un fichier à partir de son chemin absolu.",
					"key": "FR#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#GETSOURCECODE"
				} } } },
				"params": { "utils": { "public": { "absolutePath": {
					"value": "Le chemin absolu du fichier concerné.",
					"key": "FR#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#ABSOLUTEPATH"
				} } } },
				"returns": { "utils": { "public": { "getSourceCode": {
					"value": "L'objet `SourceCode` généré par ESLint d'un fichier, à partir duquel l'AST (`sourceCode.ast`) et tous les commentaires (`sourceCode.getAllComments()`) peuvent être extraits, à l'intérieur d'un objet `{success: true}` à sa clé `sourceCode`. En cas d'erreur, un objet `{success: false}` est retourné à la place.",
					"key": "FR#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#GETSOURCECODE"
				} } } }
			},
			"tests": {
				"defs": { "utils": {
					"assertFailureWithMessage": {
						"value": "Confirme que `getSourceCode` échoue lors qu'il se doit.",
						"key": "FR#TSDOC#SRC#TESTS#DEFS#UTILS#ASSERTFAILUREWITHMESSAGE"
					},
					"assertSuccess": {
						"value": "Confirme que `getSourceCode` réussit lors qu'il se doit.",
						"key": "FR#TSDOC#SRC#TESTS#DEFS#UTILS#ASSERTSUCCESS"
					}
				} },
				"params": { "utils": {
					"getSourceCodeResults": {
						"value": "Les résultats de l'instance de `getSourceCode` appelée lors du test, dont le succès ou l'échec est évalué à travers la valeur booléenne de leur clé `success`.",
						"key": "FR#TSDOC#SRC#TESTS#PARAMS#UTILS#GETSOURCECODERESULTS"
					},
					"expectedMessage": {
						"value": "Le message attendu de l'erreur qui devrait être rencontrée en cas d'échec (`message`), à partir duquel le statut peut être déduit (`status`).",
						"key": "FR#TSDOC#SRC#TESTS#PARAMS#UTILS#EXPECTEDMESSAGE"
					}
				} },
				"returns": { "utils": {
					"assertFailureWithMessage": {
						"value": "Void.",
						"key": "FR#TSDOC#SRC#TESTS#RETURNS#UTILS#ASSERTFAILUREWITHMESSAGE"
					},
					"assertSuccess": {
						"value": "Void.",
						"key": "FR#TSDOC#SRC#TESTS#RETURNS#UTILS#ASSERTSUCCESS"
					}
				} }
			}
		} },
		"forComposedVariables": {
			"variables": { "getSourceCode": {
				"value": "getSourceCode",
				"key": "FR#FORCOMPOSEDVARIABLES#VARIABLES#GETSOURCECODE"
			} },
			"arguments": {}
		},
		"composedVariablesExclusives": {
			"variables": {},
			"arguments": {},
			"_enAnglais": {
				"value": "En anglais à l'exécution",
				"key": "FR#COMPOSEDVARIABLESEXCLUSIVES#_ENANGLAIS"
			},
			"_enAnglais_": {
				"value": "(En anglais uniquement.)",
				"key": "FR#COMPOSEDVARIABLESEXCLUSIVES#_ENANGLAIS_"
			},
			"eslintSourceCode": {
				"value": "objet `SourceCode` généré par ESLint d'un fichier",
				"key": "FR#COMPOSEDVARIABLESEXCLUSIVES#ESLINTSOURCECODE"
			},
			"singleError": {
				"value": "seule erreur dans son array `errors`",
				"key": "FR#COMPOSEDVARIABLESEXCLUSIVES#SINGLEERROR"
			},
			"basedOnMessageAndStatus": {
				"value": "basée sur le `message` qu'elle doit montrer et le `status` qu'elle doit avoir",
				"key": "FR#COMPOSEDVARIABLESEXCLUSIVES#BASEDONMESSAGEANDSTATUS"
			},
			"absolutePath": {
				"value": "chemin absolu du fichier",
				"key": "FR#COMPOSEDVARIABLESEXCLUSIVES#ABSOLUTEPATH"
			},
			"concerné": {
				"value": "concerné",
				"key": "FR#COMPOSEDVARIABLESEXCLUSIVES#CONCERNÉ"
			},
			"_asserts": {
				"value": "Confirme",
				"key": "FR#COMPOSEDVARIABLESEXCLUSIVES#_ASSERTS"
			},
			"whenItShould": {
				"value": "lors qu'il se doit",
				"key": "FR#COMPOSEDVARIABLESEXCLUSIVES#WHENITSHOULD"
			}
		}
	}
};
//#endregion
//#region source/comment-variables/index.js
const messages = resolvedConfigData.en.tsDoc.src.consts.errors.messages;
resolvedConfigData.en.forComposedVariables;
resolvedConfigData.en.composedVariablesExclusives;
//#endregion
//#region source/constants/errors/messages.js
const absolutePathSupposedToBeString = messages.absolutePathSupposedToBeString.value;
const absolutePathCouldntBeRead = messages.absolutePathCouldntBeRead.value;
const jsTsJsxTsxCouldntBeParsed = messages.jsTsJsxTsxCouldntBeParsed.value;
//#endregion
//#region source/constants/errors/statuses.js
/** $COMMENT#TSDOC#SRC#CONSTS#ERRORS#STATUSES#ABSOLUTEPATH_NOT_STRING */
const ABSOLUTEPATH_NOT_STRING = "ABSOLUTEPATH_NOT_STRING";
/** $COMMENT#TSDOC#SRC#CONSTS#ERRORS#STATUSES#ABSOLUTE_PATH_NOT_FOUND */
const ABSOLUTE_PATH_NOT_FOUND = "ABSOLUTE_PATH_NOT_FOUND";
/** $COMMENT#TSDOC#SRC#CONSTS#ERRORS#STATUSES#SOURCE_CODE_FATAL_SYNTAX */
const SOURCE_CODE_FATAL_SYNTAX = "SOURCE_CODE_FATAL_SYNTAX";
//#endregion
//#region source/constants/errors/index.js
const errorMessages_errorStatuses = Object.freeze({
	[absolutePathSupposedToBeString]: ABSOLUTEPATH_NOT_STRING,
	[absolutePathCouldntBeRead]: ABSOLUTE_PATH_NOT_FOUND,
	[jsTsJsxTsxCouldntBeParsed]: SOURCE_CODE_FATAL_SYNTAX
});
/**
* $COMMENT#TSDOC#SRC#LIB#CONSTS#PARSER#PUBLIC#TYPESCRIPTANDJSXCOMPATIBLE
* @public
*/
const typeScriptAndJSXCompatible = {
	parser,
	parserOptions: Object.freeze({ ecmaFeatures: Object.freeze({ jsx: true }) })
};
//#endregion
//#region source/library/utilities/get-sourcecode.js
/**
* $COMMENT#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#GETSOURCECODE
*
* @param absolutePath - $COMMENT#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#ABSOLUTEPATH
* @returns $COMMENT#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#GETSOURCECODE
*
* @public
*/
const getSourceCode = (absolutePath) => {
	if (typeof absolutePath !== "string") return makeSuccessFalseTypeError(absolutePathSupposedToBeString, errorMessages_errorStatuses[absolutePathSupposedToBeString]);
	const linter = new Linter();
	const languageOptions = typeScriptAndJSXCompatible;
	let code = void 0;
	try {
		code = fs.readFileSync(absolutePath, "utf8");
	} catch {
		return makeSuccessFalseTypeError(absolutePathCouldntBeRead, errorMessages_errorStatuses[absolutePathCouldntBeRead]);
	}
	linter.verify(code, { languageOptions });
	const sourceCode = linter.getSourceCode();
	if (!sourceCode) return makeSuccessFalseTypeError(jsTsJsxTsxCouldntBeParsed, errorMessages_errorStatuses[jsTsJsxTsxCouldntBeParsed]);
	return {
		sourceCode,
		...successTrue
	};
};
//#endregion
//#region comments.config.public.mjs
/** @public */
const resolvedPublicData = {
	"libraryKey": "GET_SOURCECODE",
	"libraryVariations": {
		"EN": {
			"GET_SOURCECODE#TSDOC#SRC#LIB#CONSTS#PARSER#PUBLIC#TYPESCRIPTANDJSXCOMPATIBLE": "`languageOptions` object for instances of the `ESLint` and `Linter` classes enabling the linting of TypeScript and JSX (React) files.",
			"GET_SOURCECODE#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#GETSOURCECODE": "Gets the ESLint-generated `SourceCode` object of a file from its absolute path.",
			"GET_SOURCECODE#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#ABSOLUTEPATH": "The absolute path of the file at hand.",
			"GET_SOURCECODE#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#GETSOURCECODE": "The ESLint-generated `SourceCode` object of a file, from which the AST (`sourceCode.ast`) and all comments (`sourceCode.getAllComments()`) can be extracted, inside a `{success: true}` object at its `sourceCode` key. In case of an error, a `{success: false}` object is returned instead."
		},
		"FR": {
			"GET_SOURCECODE#TSDOC#SRC#LIB#CONSTS#PARSER#PUBLIC#TYPESCRIPTANDJSXCOMPATIBLE": "Objet `languageOptions` pour instances de classes `ESLint` et `Linter` permettant l'analyse statique de fichiers TypeScript et JSX (React).",
			"GET_SOURCECODE#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#GETSOURCECODE": "Obtient l'objet `SourceCode` généré par ESLint d'un fichier à partir de son chemin absolu.",
			"GET_SOURCECODE#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#ABSOLUTEPATH": "Le chemin absolu du fichier concerné.",
			"GET_SOURCECODE#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#GETSOURCECODE": "L'objet `SourceCode` généré par ESLint d'un fichier, à partir duquel l'AST (`sourceCode.ast`) et tous les commentaires (`sourceCode.getAllComments()`) peuvent être extraits, à l'intérieur d'un objet `{success: true}` à sa clé `sourceCode`. En cas d'erreur, un objet `{success: false}` est retourné à la place."
		}
	}
};
//#endregion
export { resolvedPublicData as commentVariablesData, getSourceCode, typeScriptAndJSXCompatible };
