import { describe, it } from "node:test";
import assert from "node:assert";

import { NO_INLINE_CONFIG } from "../../constants/index.js";

/**
 * @typedef {import("../../../typedefs/index.js").NoInlineConfig} NoInlineConfig
 */

/* linterOptionsSuite */

export const linterOptionsSuite = (
  /** @type {NoInlineConfig} */ noInlineConfig,
) => {
  describe(NO_INLINE_CONFIG, () => {
    // initial tests

    it(`should be an object`, () => {
      const noInlineConfigType = typeof noInlineConfig;
      assert.strictEqual(noInlineConfigType, "object");
    });

    it(`\`${NO_INLINE_CONFIG}\` key's value should be true`, () => {
      assert.strictEqual(noInlineConfig?.noInlineConfig, true);
    });
  });
};
