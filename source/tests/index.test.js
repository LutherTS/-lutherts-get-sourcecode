import url from "url";
import path from "path";

import { describe, it } from "node:test";
import assert from "node:assert";

import { getSourceCode } from "../library/index.js";

import {
  absolutePathSupposedToBeString,
  absolutePathCouldntBeRead,
  jsTsJsxTsxCouldntBeParsed,
} from "../constants/errors/messages.js";

import {
  GET_SOURCECODE,
  ABSOLUTE_PATH,
  JAVASCRIPT,
  TYPESCRIPT,
} from "./constants/index.js";

import { assertFailureWithMessage, assertSuccess } from "./utilities/index.js";

const currentDirectoryPath = path.dirname(url.fileURLToPath(import.meta.url));

const languages = /** @type {const} */ ([
  {
    language: JAVASCRIPT,
    fatalPath: path.join(currentDirectoryPath, "./fatal/javascript.js"),
    validPath: path.join(currentDirectoryPath, "./valid/javascript.js"),
    jsxPath: path.join(currentDirectoryPath, "./jsx/javascript.jsx"),
  },
  {
    language: TYPESCRIPT,
    fatalPath: path.join(currentDirectoryPath, "./fatal/typescript.ts"),
    validPath: path.join(currentDirectoryPath, "./valid/typescript.ts"),
    jsxPath: path.join(currentDirectoryPath, "./jsx/typescript.tsx"),
  },
]);

const validDeclarationFilePath = path.join(
  currentDirectoryPath,
  "./valid/others/declaration.d.ts",
);
const validDeclarationMFilePath = path.join(
  currentDirectoryPath,
  "./valid/others/declaration-m.d.mts",
);

describe(GET_SOURCECODE, () => {
  // initial tests

  it("should be a function", () => {
    const getSourceCodeType = typeof getSourceCode;
    assert.strictEqual(getSourceCodeType, "function");
  });

  it(`should be named \`${GET_SOURCECODE}\``, () => {
    const getSourceCodeName = getSourceCode.name;
    assert.strictEqual(getSourceCodeName, GET_SOURCECODE);
  });

  // input validations tests

  it(`should error if \`${ABSOLUTE_PATH}\` is not a string`, () => {
    const getSourceCodeResults = getSourceCode(2);
    assertFailureWithMessage(
      getSourceCodeResults,
      absolutePathSupposedToBeString,
    );
  });

  // input operations tests

  it(`should error if \`${ABSOLUTE_PATH}\` is not found`, () => {
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

  it("should succeed if given a valid `.ts` TypeScript declaration file", () => {
    const getSourceCodeResults = getSourceCode(validDeclarationFilePath);
    assertSuccess(getSourceCodeResults);
  });

  it("should succeed if given a valid `.mts` TypeScript declaration file", () => {
    const getSourceCodeResults = getSourceCode(validDeclarationMFilePath);
    assertSuccess(getSourceCodeResults);
  });
});
