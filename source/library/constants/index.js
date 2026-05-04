/* success objects */

export const successFalse = /** @type {const} */ ({
  success: false,
});
export const successTrue = /** @type {const} */ ({
  success: true,
});

/* error objects */

export const typeError = /** @type {const} */ ({
  type: "error",
});
export const typeWarning = /** @type {const} */ ({
  type: "warning",
}); // (Currently unused. The current rationale is that it is up to the consumer to decide whether to consider the errors as warning or not depending on its own use cases.)
