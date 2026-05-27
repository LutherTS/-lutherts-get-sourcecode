import url from "url";
import path from "path";

import { describe, it } from "node:test";

import {
  absolutePathCouldntBeRead,
  jsTsJsxTsxCouldntBeParsed,
} from "../../../constants/errors/messages.js";

import {
  GET_SOURCECODE,
  ABSOLUTE_PATH,
  JAVASCRIPT,
  TYPESCRIPT,
} from "../../constants/index.js";

import {
  assertFailureWithMessage,
  assertSuccess,
} from "../../utilities/index.js";

/**
 * @typedef {import("../../../typedefs/index.js").GetSourceCode} GetSourceCode
 */

const currentDirectoryPath = path.dirname(url.fileURLToPath(import.meta.url));

const languages = /** @type {const} */ ([
  {
    language: JAVASCRIPT,
    fatalPath: path.join(currentDirectoryPath, "./files/fatal/javascript.js"),
    validPath: path.join(currentDirectoryPath, "./files/valid/javascript.js"),
    jsxPath: path.join(currentDirectoryPath, "./files/jsx/javascript.jsx"),
  },
  {
    language: TYPESCRIPT,
    fatalPath: path.join(currentDirectoryPath, "./files/fatal/typescript.ts"),
    validPath: path.join(currentDirectoryPath, "./files/valid/typescript.ts"),
    jsxPath: path.join(currentDirectoryPath, "./files/jsx/typescript.tsx"),
  },
]);

const validDeclarationFilePath = path.join(
  currentDirectoryPath,
  "./files/valid/others/declaration.d.ts",
);
const validDeclarationMFilePath = path.join(
  currentDirectoryPath,
  "./files/valid/others/declaration-m.d.mts",
);

export const inputOperationsSuite = (
  /** @type {GetSourceCode} */ getSourceCode,
) => {
  describe(`${GET_SOURCECODE} - input operations`, () => {
    it(`should error if \`${ABSOLUTE_PATH}\` is not found`, () => {
      const getSourceCodeResults = getSourceCode("does-not-exist.js");
      assertFailureWithMessage(getSourceCodeResults, absolutePathCouldntBeRead);
    });

    for (const l of languages) {
      it(`should error if given an invalid ${l.language} file`, () => {
        const getSourceCodeResults = getSourceCode(l.fatalPath);
        assertFailureWithMessage(
          getSourceCodeResults,
          jsTsJsxTsxCouldntBeParsed,
        );
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
};
