import { describe, it } from "node:test";
import assert from "node:assert";

import {
  GET_SOURCECODE_FROM_CODE,
  GET_SOURCECODE_FROM_PATH,
} from "../../constants/index.js";

/**
 * @typedef {import("../../../types/index.ts").GetSourceCodeFromCode} GetSourceCodeFromCode
 * @typedef {import("../../../types/index.ts").GetSourceCodeFromPath} GetSourceCodeFromPath
 */

/* initialSuite */

export const initialSuite = (
  /** @type {GetSourceCodeFromCode} */ getSourceCodeFromCode,
  /** @type {GetSourceCodeFromPath} */ getSourceCodeFromPath,
) => {
  describe(`${GET_SOURCECODE_FROM_CODE} - initial`, () => {
    it("should be a function", () => {
      const getSourceCodeFromCodeType = typeof getSourceCodeFromCode;
      assert.strictEqual(getSourceCodeFromCodeType, "function");
    });

    it.skip(`should be named \`${GET_SOURCECODE_FROM_CODE}\``, () => {
      const getSourceCodeFromCodeName = getSourceCodeFromCode.name;
      assert.strictEqual(getSourceCodeFromCodeName, GET_SOURCECODE_FROM_CODE);
    });
  });

  describe(`${GET_SOURCECODE_FROM_PATH} - initial`, () => {
    it("should be a function", () => {
      const getSourceCodeFromPathType = typeof getSourceCodeFromPath;
      assert.strictEqual(getSourceCodeFromPathType, "function");
    });

    it.skip(`should be named \`${GET_SOURCECODE_FROM_PATH}\``, () => {
      const getSourceCodeFromPathName = getSourceCodeFromPath.name;
      assert.strictEqual(getSourceCodeFromPathName, GET_SOURCECODE_FROM_PATH);
    });
  });
};
