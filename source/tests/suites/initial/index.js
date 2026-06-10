import { describe, it } from "node:test";
import assert from "node:assert";

import { GET_SOURCECODE } from "../../constants/index.js";

/**
 * @typedef {import("../../../typedefs/index.js").GetSourceCode} GetSourceCode
 */

export const initialSuite = (/** @type {GetSourceCode} */ getSourceCode) => {
  describe(`${GET_SOURCECODE} - initial`, () => {
    it("should be a function", () => {
      const getSourceCodeType = typeof getSourceCode;
      assert.strictEqual(getSourceCodeType, "function");
    });

    it.skip(`should be named \`${GET_SOURCECODE}\``, () => {
      const getSourceCodeName = getSourceCode.name;
      assert.strictEqual(getSourceCodeName, GET_SOURCECODE);
    });
  });
};
