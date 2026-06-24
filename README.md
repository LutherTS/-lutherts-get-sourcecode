Retrieves the ESLint-generated `SourceCode` object of a JS/TS/JSX/TSX file.

```js
/* getSourceCodeFromCode */

/**
 * $COMMENT#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#GETSOURCECODEFROMCODE
 *
 * @param code - $COMMENT#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#CODE
 * @returns $COMMENT#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#GETSOURCECODEFROMCODE
 *
 * @public
 */
export const getSourceCodeFromCode = /** @template {string} T */ (
  /** @type {T} */ code,
) => {
  // input validations

  if (typeof code !== "string")
    return makeSuccessFalseTypeError(
      codeSupposedToBeString,
      errorMessages_errorStatuses[codeSupposedToBeString],
    );

  // input operations

  const linter = new Linter();

  linter.verify(code, { languageOptions, linterOptions });
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

/* getSourceCodeFromPath */

/**
 * $COMMENT#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#GETSOURCECODEFROMPATH
 *
 * @param absolutePath - $COMMENT#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#ABSOLUTEPATH
 * @returns $COMMENT#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#GETSOURCECODEFROMPATH
 *
 * @public
 */
export const getSourceCodeFromPath = /** @template {string} T */ (
  /** @type {T} */ absolutePath,
) => {
  // input validations

  if (typeof absolutePath !== "string")
    return makeSuccessFalseTypeError(
      absolutePathSupposedToBeString,
      errorMessages_errorStatuses[absolutePathSupposedToBeString],
    );

  if (!path.isAbsolute(absolutePath))
    return makeSuccessFalseTypeError(
      absolutePathSupposedToBeAbsolute,
      errorMessages_errorStatuses[absolutePathSupposedToBeAbsolute],
    );

  // input operations

  let code = /** @type {string | undefined} */ (undefined);

  try {
    code = fs.readFileSync(absolutePath, "utf8");
  } catch {
    return makeSuccessFalseTypeError(
      absolutePathCouldntBeRead,
      errorMessages_errorStatuses[absolutePathCouldntBeRead],
    );
  }

  return getSourceCodeFromCode(code);
};
```
