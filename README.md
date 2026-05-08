Retrieves the ESLint-generated `SourceCode` object of a JS/TS/JSX/TSX file.

```js
/**
 * $COMMENT#TSDOC#LIBRARY#DEFS#PUBLIC#GETSOURCECODE
 *
 * @param absolutePath - $COMMENT#TSDOC#LIBRARY#PARAMS#PUBLIC#ABSOLUTEPATH
 * @returns $COMMENT#TSDOC#LIBRARY#RETURNS#PUBLIC#GETSOURCECODE
 */
export const getSourceCode = (/** @type {string} */ absolutePath) => {
  if (typeof absolutePath !== "string")
    return makeSuccessFalseTypeError(
      absolutePathIsSupposedToBeAString,
      errorMessages_errorStatuses[absolutePathIsSupposedToBeAString],
    );

  const linter = new Linter();
  const languageOptions = typeScriptAndJSXCompatible;

  let code = /** @type {string | undefined} */ (undefined);

  try {
    code = fs.readFileSync(absolutePath, "utf8");
  } catch {
    return makeSuccessFalseTypeError(
      absolutePathCouldntBeRead,
      errorMessages_errorStatuses[absolutePathCouldntBeRead],
    );
  }

  linter.verify(code, { languageOptions });
  const sourceCode = linter.getSourceCode();

  if (!sourceCode)
    return makeSuccessFalseTypeError(
      jsTsJsxTsxCouldntBeParsed,
      errorMessages_errorStatuses[jsTsJsxTsxCouldntBeParsed],
    );

  return /** @type {const} */ ({
    sourceCode,
    ...successTrue,
  });
};
```

Voluntarily includes all of the project's files except those ignored by `.gitignore`, though that is subject to change if noticed to significantly hinder performance. This is in the process of completely opening this project as a showcase for how I develop my own libraries, maintain my file system organization, shape the tools that I use for error handling and linters, and make Comment Variables publicly available.
