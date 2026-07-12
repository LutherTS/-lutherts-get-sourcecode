import { defineConfig } from "oxlint";

export default defineConfig({
  categories: {
    correctness: "warn",
  },
  ignorePatterns: [
    "tsdown/library/index.mjs",
    "source/tests/suites/input-operations/files/fatal/typescript.ts",
    "source/tests/suites/input-operations/files/fatal/javascript.js",
    "source/tests/suites/input-operations/files/valid/typescript.ts",
    "source/tests/suites/input-operations/files/valid/javascript.js",
  ],
  overrides: [
    {
      files: ["get-sourcecode.d.ts", "get-sourcecode.public.d.ts"],
      jsPlugins: ["eslint-plugin-tsdoc"],
      rules: {
        "typescript/no-useless-empty-export": "off",
        "tsdoc/syntax": "error",
      },
    },
  ],
});
