/**
 * $COMMENT#JSDOC#DEFS#MAKESUCCESSFALSETYPEERROR
 * @param message $COMMENT#JSDOC#PARAMS#MESSAGE
 * @param status $COMMENT#JSDOC#PARAMS#STATUS
 */
export function makeSuccessFalseTypeError<T extends string, U extends string>(
  message: T,
  status: U,
): {
  readonly success: false;
  readonly errors: readonly [
    {
      readonly type: "error";
      readonly message: T;
      readonly status: U;
    },
  ];
};
/**
 * $COMMENT#JSDOC#DEFS#MAKESUCCESSFALSETYPEWARNING
 * @param message $COMMENT#JSDOC#PARAMS#MESSAGE
 * @param status $COMMENT#JSDOC#PARAMS#STATUS
 */
export function makeSuccessFalseTypeWarning<T extends string, U extends string>(
  message: T,
  status: U,
): {
  readonly success: false;
  readonly errors: readonly [
    {
      readonly type: "warning";
      readonly message: T;
      readonly status: U;
    },
  ];
};
