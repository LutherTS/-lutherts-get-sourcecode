// import url from "url";
// import path from "path";

import { describe, it } from "node:test";
import assert from "node:assert";

import { getSourceCode } from "../library/index.js";

describe("getSourceCode", () => {
  it("should be a function", () => {
    const getSourceCodeType = typeof getSourceCode;
    assert.strictEqual(getSourceCodeType, "function");
  });

  it("should be named `getSourceCode`", () => {
    const getSourceCodeName = getSourceCode.name;
    assert.strictEqual(getSourceCodeName, "getSourceCode");
  });
});
