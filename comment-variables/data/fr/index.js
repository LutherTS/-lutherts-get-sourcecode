/* data */

export const frData = Object.freeze({
  tsDoc: Object.freeze({
    src: Object.freeze({
      consts: Object.freeze({
        errors: Object.freeze({
          messages: Object.freeze({
            absolutePathSupposedToBeString:
              "$COMMENT#EN#TSDOC#SRC#CONSTS#ERRORS#MESSAGES#ABSOLUTEPATHSUPPOSEDTOBESTRING / $COMMENT#FR#COMPOSEDVARIABLESEXCLUSIVES#_ENANGLAIS_" /* variations: $COMMENT#TSDOC#SRC#CONSTS#ERRORS#MESSAGES#ABSOLUTEPATHSUPPOSEDTOBESTRING / core: $COMMENT#FR#TSDOC#SRC#CONSTS#ERRORS#MESSAGES#ABSOLUTEPATHSUPPOSEDTOBESTRING */,
            absolutePathCouldntBeRead:
              "$COMMENT#EN#TSDOC#SRC#CONSTS#ERRORS#MESSAGES#ABSOLUTEPATHCOULDNTBEREAD / $COMMENT#FR#COMPOSEDVARIABLESEXCLUSIVES#_ENANGLAIS_" /* variations: $COMMENT#TSDOC#SRC#CONSTS#ERRORS#MESSAGES#ABSOLUTEPATHCOULDNTBEREAD / core: $COMMENT#FR#TSDOC#SRC#CONSTS#ERRORS#MESSAGES#ABSOLUTEPATHCOULDNTBEREAD */,
            jsTsJsxTsxCouldntBeParsed:
              "$COMMENT#EN#TSDOC#SRC#CONSTS#ERRORS#MESSAGES#JSTSJSXTSXCOULDNTBEPARSED / $COMMENT#FR#COMPOSEDVARIABLESEXCLUSIVES#_ENANGLAIS_" /* variations: $COMMENT#TSDOC#SRC#CONSTS#ERRORS#MESSAGES#JSTSJSXTSXCOULDNTBEPARSED / core: $COMMENT#FR#TSDOC#SRC#CONSTS#ERRORS#MESSAGES#JSTSJSXTSXCOULDNTBEPARSED */,
          }),
          statuses: Object.freeze({
            ABSOLUTEPATH_NOT_STRING:
              '$COMMENT#FR#COMPOSEDVARIABLESEXCLUSIVES#_ENANGLAIS : "$COMMENT#EN#TSDOC#SRC#CONSTS#ERRORS#MESSAGES#ABSOLUTEPATHSUPPOSEDTOBESTRING"' /* variations: $COMMENT#TSDOC#SRC#CONSTS#ERRORS#STATUSES#ABSOLUTEPATH_NOT_STRING / core: $COMMENT#FR#TSDOC#SRC#CONSTS#ERRORS#STATUSES#ABSOLUTEPATH_NOT_STRING */,
            ABSOLUTE_PATH_NOT_FOUND:
              '$COMMENT#FR#COMPOSEDVARIABLESEXCLUSIVES#_ENANGLAIS : "$COMMENT#EN#TSDOC#SRC#CONSTS#ERRORS#MESSAGES#ABSOLUTEPATHCOULDNTBEREAD"' /* variations: $COMMENT#TSDOC#SRC#CONSTS#ERRORS#STATUSES#ABSOLUTE_PATH_NOT_FOUND / core: $COMMENT#FR#TSDOC#SRC#CONSTS#ERRORS#STATUSES#ABSOLUTE_PATH_NOT_FOUND */,
            SOURCE_CODE_FATAL_SYNTAX:
              '$COMMENT#FR#COMPOSEDVARIABLESEXCLUSIVES#_ENANGLAIS : "$COMMENT#EN#TSDOC#SRC#CONSTS#ERRORS#MESSAGES#JSTSJSXTSXCOULDNTBEPARSED"' /* variations: $COMMENT#TSDOC#SRC#CONSTS#ERRORS#STATUSES#SOURCE_CODE_FATAL_SYNTAX / core: $COMMENT#FR#TSDOC#SRC#CONSTS#ERRORS#STATUSES#SOURCE_CODE_FATAL_SYNTAX */,
          }),
        }),
      }),
      lib: Object.freeze({
        consts: Object.freeze({
          parser: Object.freeze({
            public: Object.freeze({
              typeScriptAndJSXCompatible:
                "Objet `languageOptions` pour instances de classes `ESLint` et `Linter` permettant l'analyse statique de fichiers TypeScript et JSX (React)." /* variations: $COMMENT#TSDOC#SRC#LIB#CONSTS#PARSER#PUBLIC#TYPESCRIPTANDJSXCOMPATIBLE / core: $COMMENT#FR#TSDOC#SRC#LIB#CONSTS#PARSER#PUBLIC#TYPESCRIPTANDJSXCOMPATIBLE */,
            }),
          }),
        }),
        defs: Object.freeze({
          utils: Object.freeze({}),
          public: Object.freeze({
            getSourceCode:
              "Obtient l'$COMMENT#FR#COMPOSEDVARIABLESEXCLUSIVES#ESLINTSOURCECODE à partir de son chemin absolu.",
          }),
        }),
        params: Object.freeze({
          utils: Object.freeze({}),
          public: Object.freeze({
            absolutePath:
              "Le $COMMENT#FR#COMPOSEDVARIABLESEXCLUSIVES#ABSOLUTEPATH $COMMENT#FR#COMPOSEDVARIABLESEXCLUSIVES#CONCERNÉ.",
          }),
        }),
        returns: Object.freeze({
          utils: Object.freeze({}),
          public: Object.freeze({
            getSourceCode:
              "L'$COMMENT#FR#COMPOSEDVARIABLESEXCLUSIVES#ESLINTSOURCECODE, à partir duquel l'AST (`sourceCode.ast`) et tous les commentaires (`sourceCode.getAllComments()`) peuvent être extraits, à l'intérieur d'un objet `{$COMMENT#EN#COMPOSEDVARIABLESEXCLUSIVES#SUCCESS_TRUE}` à sa clé `sourceCode`. En cas d'erreur, un objet `{$COMMENT#EN#COMPOSEDVARIABLESEXCLUSIVES#SUCCESS_FALSE}` est retourné à la place.",
          }),
        }),
      }),

      tests: Object.freeze({
        defs: Object.freeze({
          utils: Object.freeze({
            assertFailureWithMessage:
              "$COMMENT#FR#COMPOSEDVARIABLESEXCLUSIVES#_ASSERTS que `$COMMENT#EN#FORCOMPOSEDVARIABLES#VARIABLES#GETSOURCECODE` échoue $COMMENT#FR#COMPOSEDVARIABLESEXCLUSIVES#WHENITSHOULD." /* variations: $COMMENT#TSDOC#SRC#TESTS#DEFS#UTILS#ASSERTFAILUREWITHMESSAGE / core: $COMMENT#FR#TSDOC#SRC#TESTS#DEFS#UTILS#ASSERTFAILUREWITHMESSAGE */,
            assertSuccess:
              "$COMMENT#FR#COMPOSEDVARIABLESEXCLUSIVES#_ASSERTS que `$COMMENT#EN#FORCOMPOSEDVARIABLES#VARIABLES#GETSOURCECODE` réussit $COMMENT#FR#COMPOSEDVARIABLESEXCLUSIVES#WHENITSHOULD." /* variations: $COMMENT#TSDOC#SRC#TESTS#DEFS#UTILS#ASSERTSUCCESS / core: $COMMENT#FR#TSDOC#SRC#TESTS#DEFS#UTILS#ASSERTSUCCESS */,
          }),
        }),
        params: Object.freeze({
          utils: Object.freeze({
            getSourceCodeResults:
              "Les résultats de l'instance de `$COMMENT#EN#FORCOMPOSEDVARIABLES#VARIABLES#GETSOURCECODE` appelée lors du test, dont le succès ou l'échec est évalué à travers la valeur booléenne de leur clé `$COMMENT#EN#COMPOSEDVARIABLESEXCLUSIVES#SUCCESS`." /* variations: $COMMENT#TSDOC#SRC#TESTS#PARAMS#UTILS#GETSOURCECODERESULTS / core: $COMMENT#FR#TSDOC#SRC#TESTS#PARAMS#UTILS#GETSOURCECODERESULTS */,
            expectedMessage:
              "Le message attendu de l'erreur qui devrait être rencontrée en cas d'échec (`$COMMENT#EN#COMPOSEDVARIABLESEXCLUSIVES#MESSAGE`), à partir duquel le statut peut être déduit (`$COMMENT#EN#COMPOSEDVARIABLESEXCLUSIVES#STATUS`)." /* variations: $COMMENT#TSDOC#SRC#TESTS#PARAMS#UTILS#EXPECTEDMESSAGE / core: $COMMENT#FR#TSDOC#SRC#TESTS#PARAMS#UTILS#EXPECTEDMESSAGE */,
          }),
        }),
        returns: Object.freeze({
          utils: Object.freeze({
            assertFailureWithMessage:
              "EN#TSDOC#SRC#TESTS#RETURNS#UTILS#ASSERTFAILUREWITHMESSAGE" /* variations: $COMMENT#TSDOC#SRC#TESTS#RETURNS#UTILS#ASSERTFAILUREWITHMESSAGE / core: $COMMENT#FR#TSDOC#SRC#TESTS#RETURNS#UTILS#ASSERTFAILUREWITHMESSAGE */,
            assertSuccess:
              "EN#TSDOC#SRC#TESTS#RETURNS#UTILS#ASSERTFAILUREWITHMESSAGE" /* variations: $COMMENT#TSDOC#SRC#TESTS#RETURNS#UTILS#ASSERTSUCCESS / core: $COMMENT#FR#TSDOC#SRC#TESTS#RETURNS#UTILS#ASSERTSUCCESS */,
          }),
        }),
      }),
    }),
  }),
  forComposedVariables: Object.freeze({
    variables: Object.freeze({
      getSourceCode:
        "EN#FORCOMPOSEDVARIABLES#VARIABLES#GETSOURCECODE" /* variations: $COMMENT#FORCOMPOSEDVARIABLES#VARIABLES#GETSOURCECODE / core: $COMMENT#FR#FORCOMPOSEDVARIABLES#VARIABLES#GETSOURCECODE */,
    }),
    arguments: Object.freeze({}),
  }),
  composedVariablesExclusives: Object.freeze({
    variables: Object.freeze({}),
    arguments: Object.freeze({}),

    // tsDoc.src.consts
    _enAnglais:
      "En anglais à l'exécution" /* variations: $COMMENT#COMPOSEDVARIABLESEXCLUSIVES#_ENANGLAIS / core: $COMMENT#FR#COMPOSEDVARIABLESEXCLUSIVES#_ENANGLAIS */,
    _enAnglais_:
      "(En anglais uniquement.)" /* variations: $COMMENT#COMPOSEDVARIABLESEXCLUSIVES#_ENANGLAIS_ / core: $COMMENT#FR#COMPOSEDVARIABLESEXCLUSIVES#_ENANGLAIS_ */,

    // tsDoc.src.lib.defs
    eslintSourceCode:
      "objet `SourceCode` généré par ESLint d'un fichier" /* variations: $COMMENT#COMPOSEDVARIABLESEXCLUSIVES#ESLINTSOURCECODE / core: $COMMENT#FR#COMPOSEDVARIABLESEXCLUSIVES#ESLINTSOURCECODE */,
    singleError:
      "seule erreur dans son array `errors`" /* variations: $COMMENT#COMPOSEDVARIABLESEXCLUSIVES#SINGLEERROR / core: $COMMENT#FR#COMPOSEDVARIABLESEXCLUSIVES#SINGLEERROR */,
    basedOnMessageAndStatus:
      "basée sur le `message` qu'elle doit montrer et le `status` qu'elle doit avoir" /* variations: $COMMENT#COMPOSEDVARIABLESEXCLUSIVES#BASEDONMESSAGEANDSTATUS / core: $COMMENT#FR#COMPOSEDVARIABLESEXCLUSIVES#BASEDONMESSAGEANDSTATUS */,

    // tsDoc.src.lib.params
    absolutePath:
      "chemin absolu du fichier" /* variations: $COMMENT#COMPOSEDVARIABLESEXCLUSIVES#ABSOLUTEPATH / core: $COMMENT#FR#COMPOSEDVARIABLESEXCLUSIVES#ABSOLUTEPATH */,
    concerné:
      "concerné" /* variations: $COMMENT#COMPOSEDVARIABLESEXCLUSIVES#CONCERNÉ / core: $COMMENT#FR#COMPOSEDVARIABLESEXCLUSIVES#CONCERNÉ */,

    // tsDoc.src.tests.defs.utils
    _asserts:
      "Confirme" /* variations: $COMMENT#COMPOSEDVARIABLESEXCLUSIVES#_ASSERTS / core: $COMMENT#FR#COMPOSEDVARIABLESEXCLUSIVES#_ASSERTS */,
    whenItShould:
      "lors qu'il se doit" /* variations: $COMMENT#COMPOSEDVARIABLESEXCLUSIVES#WHENITSHOULD / core: $COMMENT#FR#COMPOSEDVARIABLESEXCLUSIVES#WHENITSHOULD */,
  }),
});

/* manual composedVariablesExclusives */

export const frComposedVariablesExclusives = /** @type {const} */ ([]);
