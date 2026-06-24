/* data */

export const enData = Object.freeze({
  tsDoc: Object.freeze({
    src: Object.freeze({
      consts: Object.freeze({
        errors: Object.freeze({
          messages: Object.freeze({
            absolutePathSupposedToBeString:
              "`$COMMENT#EN#COMPOSEDVARIABLESEXCLUSIVES#ARGUMENTS#ABSOLUTEPATH` is supposed to be a string." /* variations: $COMMENT#TSDOC#SRC#CONSTS#ERRORS#MESSAGES#ABSOLUTEPATHSUPPOSEDTOBESTRING / core: $COMMENT#EN#TSDOC#SRC#CONSTS#ERRORS#MESSAGES#ABSOLUTEPATHSUPPOSEDTOBESTRING */,
            absolutePathCouldntBeRead:
              "Absolute file path could not be read." /* variations: $COMMENT#TSDOC#SRC#CONSTS#ERRORS#MESSAGES#ABSOLUTEPATHCOULDNTBEREAD / core: $COMMENT#EN#TSDOC#SRC#CONSTS#ERRORS#MESSAGES#ABSOLUTEPATHCOULDNTBEREAD */,
            jsTsJsxTsxCouldntBeParsed:
              "JS/TS/JSX/TSX source code could not be parsed." /* variations: $COMMENT#TSDOC#SRC#CONSTS#ERRORS#MESSAGES#JSTSJSXTSXCOULDNTBEPARSED / core: $COMMENT#EN#TSDOC#SRC#CONSTS#ERRORS#MESSAGES#JSTSJSXTSXCOULDNTBEPARSED */,
          }),
          statuses: Object.freeze({
            ABSOLUTEPATH_NOT_STRING:
              '"$COMMENT#EN#TSDOC#SRC#CONSTS#ERRORS#MESSAGES#ABSOLUTEPATHSUPPOSEDTOBESTRING"' /* variations: $COMMENT#TSDOC#SRC#CONSTS#ERRORS#STATUSES#ABSOLUTEPATH_NOT_STRING / core: $COMMENT#EN#TSDOC#SRC#CONSTS#ERRORS#STATUSES#ABSOLUTEPATH_NOT_STRING */,
            ABSOLUTE_PATH_NOT_FOUND:
              '"$COMMENT#EN#TSDOC#SRC#CONSTS#ERRORS#MESSAGES#ABSOLUTEPATHCOULDNTBEREAD"' /* variations: $COMMENT#TSDOC#SRC#CONSTS#ERRORS#STATUSES#ABSOLUTE_PATH_NOT_FOUND / core: $COMMENT#EN#TSDOC#SRC#CONSTS#ERRORS#STATUSES#ABSOLUTE_PATH_NOT_FOUND */,
            SOURCE_CODE_FATAL_SYNTAX:
              '"$COMMENT#EN#TSDOC#SRC#CONSTS#ERRORS#MESSAGES#JSTSJSXTSXCOULDNTBEPARSED"' /* variations: $COMMENT#TSDOC#SRC#CONSTS#ERRORS#STATUSES#SOURCE_CODE_FATAL_SYNTAX / core: $COMMENT#EN#TSDOC#SRC#CONSTS#ERRORS#STATUSES#SOURCE_CODE_FATAL_SYNTAX */,
          }),
        }),
      }),
      lib: Object.freeze({
        consts: Object.freeze({
          parser: Object.freeze({
            public: Object.freeze({
              typeScriptAndJSXCompatible:
                "`languageOptions` object for instances of the `ESLint` and `Linter` classes enabling the linting of TypeScript and JSX (React) files." /* variations: $COMMENT#TSDOC#SRC#LIB#CONSTS#PARSER#PUBLIC#TYPESCRIPTANDJSXCOMPATIBLE / core: $COMMENT#EN#TSDOC#SRC#LIB#CONSTS#PARSER#PUBLIC#TYPESCRIPTANDJSXCOMPATIBLE */,
              noInlineConfig:
                "`linterOptions` object for instances of the `ESLint` and `Linter` classes disabling ESLint inline configs when using ESLint programmatically." /* variations: $COMMENT#TSDOC#SRC#LIB#CONSTS#PARSER#PUBLIC#NOINLINECONFIG / core: $COMMENT#EN#TSDOC#SRC#LIB#CONSTS#PARSER#PUBLIC#NOINLINECONFIG */,
            }),
          }),
        }),
        defs: Object.freeze({
          utils: Object.freeze({
            public: Object.freeze({
              getSourceCode:
                "Gets the $COMMENT#EN#COMPOSEDVARIABLESEXCLUSIVES#ESLINTSOURCECODE from its absolute path." /* variations: $COMMENT#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#GETSOURCECODE / core: $COMMENT#EN#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#GETSOURCECODE */,
            }),
          }),
        }),
        params: Object.freeze({
          utils: Object.freeze({
            public: Object.freeze({
              absolutePath:
                "The $COMMENT#EN#COMPOSEDVARIABLESEXCLUSIVES#ABSOLUTEPATH $COMMENT#EN#COMPOSEDVARIABLESEXCLUSIVES#ATHAND." /* variations: $COMMENT#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#ABSOLUTEPATH / core: $COMMENT#EN#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#ABSOLUTEPATH */,
            }),
          }),
        }),
        returns: Object.freeze({
          utils: Object.freeze({
            public: Object.freeze({
              getSourceCode:
                "The $COMMENT#EN#COMPOSEDVARIABLESEXCLUSIVES#ESLINTSOURCECODE, from which the AST (`sourceCode.ast`) and all comments (`sourceCode.getAllComments()`) can be extracted, inside a `{$COMMENT#EN#COMPOSEDVARIABLESEXCLUSIVES#SUCCESS_TRUE}` object at its `sourceCode` key. In case of an error, a `{$COMMENT#EN#COMPOSEDVARIABLESEXCLUSIVES#SUCCESS_FALSE}` object is returned instead." /* variations: $COMMENT#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#GETSOURCECODE / core: $COMMENT#EN#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#GETSOURCECODE */,
            }),
          }),
        }),
      }),
      tests: Object.freeze({
        defs: Object.freeze({
          utils: Object.freeze({
            assertFailureWithMessage:
              "$COMMENT#EN#COMPOSEDVARIABLESEXCLUSIVES#_ASSERTS that `$COMMENT#EN#FORCOMPOSEDVARIABLES#VARIABLES#GETSOURCECODE` fails $COMMENT#EN#COMPOSEDVARIABLESEXCLUSIVES#WHENITSHOULD." /* variations: $COMMENT#TSDOC#SRC#TESTS#DEFS#UTILS#ASSERTFAILUREWITHMESSAGE / core: $COMMENT#EN#TSDOC#SRC#TESTS#DEFS#UTILS#ASSERTFAILUREWITHMESSAGE */,
            assertSuccess:
              "$COMMENT#EN#COMPOSEDVARIABLESEXCLUSIVES#_ASSERTS that `$COMMENT#EN#FORCOMPOSEDVARIABLES#VARIABLES#GETSOURCECODE` succeeds $COMMENT#EN#COMPOSEDVARIABLESEXCLUSIVES#WHENITSHOULD." /* variations: $COMMENT#TSDOC#SRC#TESTS#DEFS#UTILS#ASSERTSUCCESS / core: $COMMENT#EN#TSDOC#SRC#TESTS#DEFS#UTILS#ASSERTSUCCESS */,
          }),
        }),
        params: Object.freeze({
          utils: Object.freeze({
            getSourceCodeResults:
              "The results of the `$COMMENT#EN#FORCOMPOSEDVARIABLES#VARIABLES#GETSOURCECODE` instance called in the test, whose success or failure is evaluated via its `$COMMENT#EN#COMPOSEDVARIABLESEXCLUSIVES#SUCCESS` key's boolean value." /* variations: $COMMENT#TSDOC#SRC#TESTS#PARAMS#UTILS#GETSOURCECODERESULTS / core: $COMMENT#EN#TSDOC#SRC#TESTS#PARAMS#UTILS#GETSOURCECODERESULTS */,
            expectedMessage:
              "The expected $COMMENT#EN#COMPOSEDVARIABLESEXCLUSIVES#MESSAGE of the error that should be encountered during failure, from which the $COMMENT#EN#COMPOSEDVARIABLESEXCLUSIVES#STATUS can be inferred." /* variations: $COMMENT#TSDOC#SRC#TESTS#PARAMS#UTILS#EXPECTEDMESSAGE / core: $COMMENT#EN#TSDOC#SRC#TESTS#PARAMS#UTILS#EXPECTEDMESSAGE */,
          }),
        }),
        returns: Object.freeze({
          utils: Object.freeze({
            assertFailureWithMessage:
              "$COMMENT#EN#COMPOSEDVARIABLESEXCLUSIVES#_VOID." /* variations: $COMMENT#TSDOC#SRC#TESTS#RETURNS#UTILS#ASSERTFAILUREWITHMESSAGE / core: $COMMENT#EN#TSDOC#SRC#TESTS#RETURNS#UTILS#ASSERTFAILUREWITHMESSAGE */,
            assertSuccess:
              "EN#TSDOC#SRC#TESTS#RETURNS#UTILS#ASSERTFAILUREWITHMESSAGE" /* variations: $COMMENT#TSDOC#SRC#TESTS#RETURNS#UTILS#ASSERTSUCCESS / core: $COMMENT#EN#TSDOC#SRC#TESTS#RETURNS#UTILS#ASSERTSUCCESS */,
          }),
        }),
      }),
    }),
  }),
  forComposedVariables: Object.freeze({
    variables: Object.freeze({
      getSourceCode:
        "getSourceCode" /* variations: $COMMENT#FORCOMPOSEDVARIABLES#VARIABLES#GETSOURCECODE / core: $COMMENT#EN#FORCOMPOSEDVARIABLES#VARIABLES#GETSOURCECODE */,
    }),
    arguments: Object.freeze({}),
  }),
  composedVariablesExclusives: Object.freeze({
    variables: Object.freeze({
      typeScriptAndJSXCompatible:
        "typeScriptAndJSXCompatible" /* variations: $COMMENT#COMPOSEDVARIABLESEXCLUSIVES#VARIABLES#TYPESCRIPTANDJSXCOMPATIBLE / core: $COMMENT#EN#COMPOSEDVARIABLESEXCLUSIVES#VARIABLES#TYPESCRIPTANDJSXCOMPATIBLE */,
      parser:
        "parser" /* variations: $COMMENT#COMPOSEDVARIABLESEXCLUSIVES#VARIABLES#PARSER / core: $COMMENT#EN#COMPOSEDVARIABLESEXCLUSIVES#VARIABLES#PARSER */,
      parserOptions:
        "parserOptions" /* variations: $COMMENT#COMPOSEDVARIABLESEXCLUSIVES#VARIABLES#PARSEROPTIONS / core: $COMMENT#EN#COMPOSEDVARIABLESEXCLUSIVES#VARIABLES#PARSEROPTIONS */,
      ecmaFeatures:
        "ecmaFeatures" /* variations: $COMMENT#COMPOSEDVARIABLESEXCLUSIVES#VARIABLES#ECMAFEATURES / core: $COMMENT#EN#COMPOSEDVARIABLESEXCLUSIVES#VARIABLES#ECMAFEATURES */,
      pEcmaFeatures:
        "$COMMENT#EN#COMPOSEDVARIABLESEXCLUSIVES#VARIABLES#PARSEROPTIONS.$COMMENT#EN#COMPOSEDVARIABLESEXCLUSIVES#VARIABLES#ECMAFEATURES" /* variations: $COMMENT#COMPOSEDVARIABLESEXCLUSIVES#VARIABLES#PECMAFEATURES / core: $COMMENT#EN#COMPOSEDVARIABLESEXCLUSIVES#VARIABLES#PECMAFEATURES */,
      jsx: "jsx" /* variations: $COMMENT#COMPOSEDVARIABLESEXCLUSIVES#VARIABLES#JSX / core: $COMMENT#EN#COMPOSEDVARIABLESEXCLUSIVES#VARIABLES#JSX */,
      pEJsx:
        "$COMMENT#EN#COMPOSEDVARIABLESEXCLUSIVES#VARIABLES#PECMAFEATURES.$COMMENT#EN#COMPOSEDVARIABLESEXCLUSIVES#VARIABLES#JSX" /* variations: $COMMENT#COMPOSEDVARIABLESEXCLUSIVES#VARIABLES#PEJSX / core: $COMMENT#EN#COMPOSEDVARIABLESEXCLUSIVES#VARIABLES#PEJSX */,
    }),
    arguments: Object.freeze({
      absolutePath:
        "absolutePath" /* variations: $COMMENT#COMPOSEDVARIABLESEXCLUSIVES#ARGUMENTS#ABSOLUTEPATH / core: $COMMENT#EN#COMPOSEDVARIABLESEXCLUSIVES#ARGUMENTS#ABSOLUTEPATH */,
    }),

    // tsDoc.src.lib.defs.utils
    eslintSourceCode:
      "ESLint-generated `SourceCode` object of a file" /* variations: $COMMENT#COMPOSEDVARIABLESEXCLUSIVES#ESLINTSOURCECODE / core: $COMMENT#EN#COMPOSEDVARIABLESEXCLUSIVES#ESLINTSOURCECODE */,
    singleError:
      "single error in its `errors` array" /* variations: $COMMENT#COMPOSEDVARIABLESEXCLUSIVES#SINGLEERROR / core: $COMMENT#EN#COMPOSEDVARIABLESEXCLUSIVES#SINGLEERROR */,
    basedOnMessageAndStatus:
      "based on the `message` it is meant to display and the `status` it is meant to have" /* variations: $COMMENT#COMPOSEDVARIABLESEXCLUSIVES#BASEDONMESSAGEANDSTATUS / core: $COMMENT#EN#COMPOSEDVARIABLESEXCLUSIVES#BASEDONMESSAGEANDSTATUS */,

    // tsDoc.src.lib.params.utils
    absolutePath:
      "absolute path of the file" /* variations: $COMMENT#COMPOSEDVARIABLESEXCLUSIVES#ABSOLUTEPATH / core: $COMMENT#EN#COMPOSEDVARIABLESEXCLUSIVES#ABSOLUTEPATH */,
    atHand:
      "at hand" /* variations: $COMMENT#COMPOSEDVARIABLESEXCLUSIVES#ATHAND / core: $COMMENT#EN#COMPOSEDVARIABLESEXCLUSIVES#ATHAND */,

    // tsDoc.src.lib.returns.utils
    success_true:
      "success: true" /* variations: $COMMENT#COMPOSEDVARIABLESEXCLUSIVES#SUCCESS_TRUE / core: $COMMENT#EN#COMPOSEDVARIABLESEXCLUSIVES#SUCCESS_TRUE */,
    success_false:
      "success: false" /* variations: $COMMENT#COMPOSEDVARIABLESEXCLUSIVES#SUCCESS_FALSE / core: $COMMENT#EN#COMPOSEDVARIABLESEXCLUSIVES#SUCCESS_FALSE */,

    // tsDoc.src.tests.defs.utils
    _asserts:
      "Asserts" /* variations: $COMMENT#COMPOSEDVARIABLESEXCLUSIVES#_ASSERTS / core: $COMMENT#EN#COMPOSEDVARIABLESEXCLUSIVES#_ASSERTS */,
    whenItShould:
      "when it should" /* variations: $COMMENT#COMPOSEDVARIABLESEXCLUSIVES#WHENITSHOULD / core: $COMMENT#EN#COMPOSEDVARIABLESEXCLUSIVES#WHENITSHOULD */,

    // tsDoc.src.tests.params.utils
    message:
      "message" /* variations: $COMMENT#COMPOSEDVARIABLESEXCLUSIVES#MESSAGE / core: $COMMENT#EN#COMPOSEDVARIABLESEXCLUSIVES#MESSAGE */,
    status:
      "status" /* variations: $COMMENT#COMPOSEDVARIABLESEXCLUSIVES#STATUS / core: $COMMENT#EN#COMPOSEDVARIABLESEXCLUSIVES#STATUS */,
    success:
      "success" /* variations: $COMMENT#COMPOSEDVARIABLESEXCLUSIVES#SUCCESS / core: $COMMENT#EN#COMPOSEDVARIABLESEXCLUSIVES#SUCCESS */,

    // tsDoc.src.tests.returns.utils
    _void:
      "Void" /* variations: $COMMENT#COMPOSEDVARIABLESEXCLUSIVES#_VOID / core: $COMMENT#EN#COMPOSEDVARIABLESEXCLUSIVES#_VOID */,
  }),
});

/* manual composedVariablesExclusives */

export const enComposedVariablesExclusives = /** @type {const} */ ([]);
