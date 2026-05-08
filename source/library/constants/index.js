/* success objects */

/** À apposer en dernier via  `...successFalse` pour s'assurer que `success: false` apparaisse au sommet de la définition du type de l'objet auquel il appartient, façon `{propertyA, propertyB, ...successFalse}`. */
export const successFalse = Object.freeze({
  success: false,
});
/** À apposer en dernier via  `...successTrue` pour s'assurer que `success: true` apparaisse au sommet de la définition du type de l'objet auquel il appartient, façon `{propertyA, propertyB, ...successTrue}`. */
export const successTrue = Object.freeze({
  success: true,
});

/* error objects */

/** À apposer en dernier via  `...typeError` pour s'assurer que `type: error` apparaisse au sommet de la définition du type de l'objet auquel il appartient, façon `{propertyA, propertyB, ...typeError}`. */
export const typeError = Object.freeze({
  type: "error",
});
/** À apposer en dernier via  `...typeWarning` pour s'assurer que `type: warning` apparaisse au sommet de la définition du type de l'objet auquel il appartient, façon `{propertyA, propertyB, ...typeWarning}`. */
export const typeWarning = Object.freeze({
  type: "warning",
});
