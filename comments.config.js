/* data */

import { data } from "./comment-variables/data/index.js";

/* myIgnoresOnly */

const myIgnoresOnly = false; // can be omitted

/* ignores */

const ignores = [
  "**/typedefs/**",
  "source/tests/suites/input-operations/files/fatal/typescript.ts",
  "source/tests/suites/input-operations/files/fatal/javascript.js",
]; // can be omitted

/* lintConfigImports */

const lintConfigImports = false; // can be omitted

/* composedVariablesExclusives */

import { enComposedVariablesExclusives } from "./comment-variables/data/en/index.js";
import { frComposedVariablesExclusives } from "./comment-variables/data/fr/index.js";

const composedVariablesExclusives = [
  ...enComposedVariablesExclusives,
  ...frComposedVariablesExclusives,
];

/* variations */

import { EN, ENGLISH, FR, FRANÇAIS } from "./comment-variables/index.js";
import { enData } from "./comment-variables/data/en/index.js";
import tsConfigJson from "./tsconfig.json" with { type: "json" };

const variations = Object.freeze({
  variants: Object.freeze({
    [EN]: Object.freeze({ label: ENGLISH }),
    [FR]: Object.freeze({ label: FRANÇAIS }),
  }),
  variant: EN,
  referenceData: enData,
  referenceVariant: EN,
  allowIncompleteVariations: false,
  public: [EN, FR], // can be omitted, otherwise must include `variations.referenceVariant` as its first element
  docCommandData: Object.freeze({
    declarationDir: tsConfigJson.compilerOptions.declarationDir,
    rootDir: tsConfigJson.compilerOptions.rootDir,
  }), // can be omitted
});

/* libraries */

import { resolvedPublicData as getSourceCodeCommentVariablesData } from "./comments.config.public.mjs";

import { commentVariablesData as errorHandlingCommentVariablesData } from "@lutherts/error-handling";

const libraries = {
  [getSourceCodeCommentVariablesData.libraryKey]:
    getSourceCodeCommentVariablesData.libraryVariations.FR,

  [errorHandlingCommentVariablesData.libraryKey]:
    errorHandlingCommentVariablesData.libraryVariations.EN,
}; // can be omitted

/* config */

const config = {
  data,
  myIgnoresOnly,
  ignores,
  lintConfigImports,
  composedVariablesExclusives,
  variations,
  libraries,
};

export default config;
