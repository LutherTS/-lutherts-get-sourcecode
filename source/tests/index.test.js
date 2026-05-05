import url from "url";
import path from "path";

import { describe, it } from "node:test";
import assert from "node:assert";

import { getSourceCode } from "../library/index.js";

import {
  absolutePathIsSupposedToBeAString,
  absolutePathCouldntBeRead,
  jsTsJsxTsxCouldntBeParsed,
} from "../constants/errors/messages.js";

import { JAVASCRIPT, TYPESCRIPT } from "./constants/index.js";

import { assertFailureWithMessage, assertSuccess } from "./utilities/index.js";

const currentDirectoryPath = path.dirname(url.fileURLToPath(import.meta.url));

const toFatalJsFilePath = "./fatal/javascript.js";
const toFatalTsFilePath = "./fatal/typescript.ts";
const toValidJsFilePath = "./valid/javascript.js";
const toValidTsFilePath = "./valid/typescript.ts";
const toJsxJsFilePath = "./jsx/javascript.jsx";
const toJsxTsFilePath = "./jsx/typescript.tsx";

const languages = /** @type {const} */ ([
  {
    language: JAVASCRIPT,
    fatalPath: path.join(currentDirectoryPath, toFatalJsFilePath),
    validPath: path.join(currentDirectoryPath, toValidJsFilePath),
    jsxPath: path.join(currentDirectoryPath, toJsxJsFilePath),
  },
  {
    language: TYPESCRIPT,
    fatalPath: path.join(currentDirectoryPath, toFatalTsFilePath),
    validPath: path.join(currentDirectoryPath, toValidTsFilePath),
    jsxPath: path.join(currentDirectoryPath, toJsxTsFilePath),
  },
]);

describe("getSourceCode", () => {
  it("should be a function", () => {
    const getSourceCodeType = typeof getSourceCode;
    assert.strictEqual(getSourceCodeType, "function");
  });

  it("should be named `getSourceCode`", () => {
    const getSourceCodeName = getSourceCode.name;
    assert.strictEqual(getSourceCodeName, "getSourceCode");
  });

  it("should error if `absolutePath` is not a string", () => {
    const getSourceCodeResults = getSourceCode(2);
    assertFailureWithMessage(
      getSourceCodeResults,
      absolutePathIsSupposedToBeAString,
    );
  });

  it("should error if `absolutePath` is not found", () => {
    const getSourceCodeResults = getSourceCode("does-not-exist.js");
    assertFailureWithMessage(getSourceCodeResults, absolutePathCouldntBeRead);
  });

  for (const l of languages) {
    it(`should error if given an invalid ${l.language} file`, () => {
      const getSourceCodeResults = getSourceCode(l.fatalPath);
      assertFailureWithMessage(getSourceCodeResults, jsTsJsxTsxCouldntBeParsed);
    });

    it(`should succeed if given a valid ${l.language} file`, () => {
      const getSourceCodeResults = getSourceCode(l.validPath);
      assertSuccess(getSourceCodeResults);
    });

    it(`should succeed if given a valid ${l.language} file with JSX`, () => {
      const getSourceCodeResults = getSourceCode(l.jsxPath);
      assertSuccess(getSourceCodeResults);
    });
  }
});
