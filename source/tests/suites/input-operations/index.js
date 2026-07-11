import url from "url";
import path from "path";

import { describe, it } from "node:test";

import {
  absolutePathCouldntBeRead,
  jsTsJsxTsxCouldntBeParsed,
} from "../../../constants/errors/messages.js";

import {
  GET_SOURCECODE_FROM_CODE,
  GET_SOURCECODE_FROM_PATH,
  CODE,
  ABSOLUTE_PATH,
  JAVASCRIPT,
  TYPESCRIPT,
} from "../../constants/index.js";

import {
  assertFailureWithMessage,
  assertSuccess,
} from "../../utilities/index.js";

/**
 * @typedef {import("../../../types/index.ts").GetSourceCodeFromCode} GetSourceCodeFromCode
 * @typedef {import("../../../types/index.ts").GetSourceCodeFromPath} GetSourceCodeFromPath
 */

/* inputOperationsSuite */

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
  /** @type {GetSourceCodeFromCode} */ getSourceCodeFromCode,
  /** @type {GetSourceCodeFromPath} */ getSourceCodeFromPath,
) => {
  describe(`${GET_SOURCECODE_FROM_CODE} - input operations`, () => {
    it(`should error if given fatal syntax`, () => {
      const getSourceCodeFromCodeResults =
        getSourceCodeFromCode("fatal#syntax");
      assertFailureWithMessage(
        getSourceCodeFromCodeResults,
        jsTsJsxTsxCouldntBeParsed,
      );
    });

    it(`should succeed if given valid syntax`, () => {
      const getSourceCodeFromCodeResults = getSourceCodeFromCode("const x = 1");
      assertSuccess(getSourceCodeFromCodeResults);
    });
  });

  describe(`${GET_SOURCECODE_FROM_PATH} - input operations`, () => {
    it(`should error if \`${ABSOLUTE_PATH}\` is not found`, () => {
      const getSourceCodeFromPathResults = getSourceCodeFromPath(
        "/Users/Luther/Code/find-all-imports-ts/not-comments.config.js",
      );
      assertFailureWithMessage(
        getSourceCodeFromPathResults,
        absolutePathCouldntBeRead,
      );
    });

    for (const l of languages) {
      it(`should error if given an invalid ${l.language} file`, () => {
        const getSourceCodeFromPathResults = getSourceCodeFromPath(l.fatalPath);
        assertFailureWithMessage(
          getSourceCodeFromPathResults,
          jsTsJsxTsxCouldntBeParsed,
        );
      });

      it(`should succeed if given a valid ${l.language} file`, () => {
        const getSourceCodeFromPathResults = getSourceCodeFromPath(l.validPath);
        assertSuccess(getSourceCodeFromPathResults);
      });

      it(`should succeed if given a valid ${l.language} file with JSX`, () => {
        const getSourceCodeFromPathResults = getSourceCodeFromPath(l.jsxPath);
        assertSuccess(getSourceCodeFromPathResults);
      });
    }

    it("should succeed if given a valid `.ts` TypeScript declaration file", () => {
      const getSourceCodeFromPathResults = getSourceCodeFromPath(
        validDeclarationFilePath,
      );
      assertSuccess(getSourceCodeFromPathResults);
    });

    it("should succeed if given a valid `.mts` TypeScript declaration file", () => {
      const getSourceCodeFromPathResults = getSourceCodeFromPath(
        validDeclarationMFilePath,
      );
      assertSuccess(getSourceCodeFromPathResults);
    });
  });
};
