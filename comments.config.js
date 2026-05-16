/* data */

import { data } from "./comment-variables/data/index.js";

/* ignores */

const ignores = [];

/* lintConfigImports */

const lintConfigImports = false; // can be omitted

/* myIgnoresOnly */

const myIgnoresOnly = false; // can be omitted

/* composedVariablesExclusives */

import { enComposedVariablesExclusives } from "./comment-variables/data/en/index.js";
import { frComposedVariablesExclusives } from "./comment-variables/data/fr/index.js";

const composedVariablesExclusives = [
  ...enComposedVariablesExclusives,
  ...frComposedVariablesExclusives,
]; // composed variables allowed, Comment Variables that include `#COMPOSEDVARIABLESEXCLUSIVES#` are implicitly added

/* variations */

import { EN, ENGLISH, FR, FRANÇAIS } from "./comment-variables/index.js";
import { enData } from "./comment-variables/data/en/index.js";
import tsConfigJson from "./tsconfig.json" with { type: "json" };

const variations = Object.freeze({
  // Defines all variants that have matching variations duly defined within the top-level keys of `data`.
  variants: Object.freeze({
    [EN]: Object.freeze({ label: ENGLISH }),
    [FR]: Object.freeze({ label: FRANÇAIS }),
  }),
  // Defines the current variant that Comment Variables currently resolves to.
  variant: EN,
  // Defines the reference variation that all other variations need to have (or aim to have) matching keys with. Requires a JavaScript variable as it needs to be the exact same object as the one referenced at `data[variations.referenceVariant]`.
  referenceData: enData,
  // Defines the variant of the reference variation.
  referenceVariant: EN,
  // Defines the behavior of the error handling in case of variations that do not match one-to-one with the reference variation. If `true`, allows incomplete variations data to remain. If `false`, errors and guides the fixing of missing variations data (while ignoring composed variables exclusives).
  allowIncompleteVariations: true,
  // Defines which variants' `#PUBLIC#` Comment Variables should be publicly available, by default through `comments.public.mjs` and `comments.public.json`.
  public: [EN, FR], // can be omitted, otherwise must first include `variations.referenceVariant` as its first element // v3
  // Defines the declarations directory and the root directory relative to this configuration file for the `comvar doc` command, which reapplies your library's public Comment Variables as documentation to the applicable exported members of your API.
  docCommandData: Object.freeze({
    declarationDir: tsConfigJson.compilerOptions.declarationDir,
    rootDir: tsConfigJson.compilerOptions.rootDir,
  }), // can be omitted // v3
});

/* libraries */

import { resolvedPublicData as getSourceCodeCommentVariablesData } from "./comments.config.public.mjs";

const libraries = {
  [getSourceCodeCommentVariablesData.libraryKey]:
    getSourceCodeCommentVariablesData.libraryVariations.FR,
}; // v3

const config = {
  data,
  ignores,
  lintConfigImports,
  myIgnoresOnly,
  composedVariablesExclusives,
  variations,
  libraries, // v3
};

export default config;
