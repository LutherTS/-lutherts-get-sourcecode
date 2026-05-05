/* success objects */

/** Apply last with `...successFalse` to ensure that `success: false` sits at the top of its object's type definition, like `{propertyA, propertyB, ...successFalse}`. */
export const successFalse = Object.freeze({
  success: false,
});
/** Apply last with `...successTrue` to ensure that `success: true` sits at the top of its object's type definition, like `{propertyA, propertyB, ...successTrue}`. */
export const successTrue = Object.freeze({
  success: true,
});

/* error objects */

/** Apply last with `...typeError` to ensure that `type: "error"` sits at the top of its object's type definition, like `{propertyA, propertyB, ...typeError}`. */
export const typeError = Object.freeze({
  type: "error",
});
/** Apply last with `...typeWarning` to ensure that `type: "warning"` sits at the top of its object's type definition, like `{propertyA, propertyB, ...typeWarning}`. */
export const typeWarning = Object.freeze({
  type: "warning",
});
