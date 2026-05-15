/**
 * $COMMENT#GET_SOURCECODE#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#MAKESUCCESSFALSETYPEERROR
 *
 * @param message - $COMMENT#GET_SOURCECODE#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#MESSAGE
 * @param status - $COMMENT#GET_SOURCECODE#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#STATUS
 * @returns $COMMENT#GET_SOURCECODE#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#MAKESUCCESSFALSETYPEERROR
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
 * $COMMENT#GET_SOURCECODE#TSDOC#SRC#LIB#DEFS#UTILS#PUBLIC#MAKESUCCESSFALSETYPEWARNING
 *
 * @param message - $COMMENT#GET_SOURCECODE#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#MESSAGE
 * @param status - $COMMENT#GET_SOURCECODE#TSDOC#SRC#LIB#PARAMS#UTILS#PUBLIC#STATUS
 * @returns $COMMENT#GET_SOURCECODE#TSDOC#SRC#LIB#RETURNS#UTILS#PUBLIC#MAKESUCCESSFALSETYPEWARNING
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
