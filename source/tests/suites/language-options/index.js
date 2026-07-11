import { describe, it } from "node:test";
import assert from "node:assert";

import {
  TYPESCRIPT_AND_JSX_COMPATIBLE,
  PARSER,
  PARSER_OPTIONS,
  P_ECMA_FEATURES,
  P_E_JSX,
} from "../../constants/index.js";

/**
 * @typedef {import("../../../types/index.ts").TypeScriptAndJSXCompatible} TypeScriptAndJSXCompatible
 */

/* languageOptionsSuite */

export const languageOptionsSuite = (
  /** @type {TypeScriptAndJSXCompatible} */ typeScriptAndJSXCompatible,
) => {
  describe(TYPESCRIPT_AND_JSX_COMPATIBLE, () => {
    // initial tests

    it(`should be an object`, () => {
      const typeScriptAndJSXCompatibleType = typeof typeScriptAndJSXCompatible;
      assert.strictEqual(typeScriptAndJSXCompatibleType, "object");
    });

    it(`\`${PARSER}\` key's value should be truthy`, () => {
      assert.strictEqual(!!typeScriptAndJSXCompatible.parser, true);
    });

    it(`\`${PARSER_OPTIONS}\` key's value should be an object`, () => {
      const parserOptionsType =
        typeof typeScriptAndJSXCompatible?.parserOptions;
      assert.strictEqual(parserOptionsType, "object");
    });

    it(`\`${P_ECMA_FEATURES}\` key's value should be an object`, () => {
      const pEcmaFeaturesType =
        typeof typeScriptAndJSXCompatible?.parserOptions?.ecmaFeatures;
      assert.strictEqual(pEcmaFeaturesType, "object");
    });

    it(`\`${P_E_JSX}\` key's value should be true`, () => {
      assert.strictEqual(
        typeScriptAndJSXCompatible?.parserOptions?.ecmaFeatures?.jsx,
        true,
      );
    });
  });
};
