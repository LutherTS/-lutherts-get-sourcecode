import { successFalse, typeError, typeWarning } from "../constants/index.js";

/* makeSuccessFalse */

/**
 * Crée un objet `{success: false}` avec une seule erreur dans son array `errors` de `{type: error}` basée sur le `message` qu'elle doit montrer et le `status` qu'elle doit avoir.
 *
 * @param message - Le message en clair de l'erreur.
 * @param status - Le texte statique du statut de l'erreur.
 * @returns Un objet `{success: false}` avec une seule erreur dans son array `errors` de `{type: error}`.
 */
export const makeSuccessFalseTypeError =
  /** @template {string} T, @template {string} U */ (
    /** @type {T} */ message,
    /** @type {U} */ status,
  ) =>
    /** @type {const} */ ({
      errors: [
        {
          message,
          status,
          ...typeError,
        },
      ],
      ...successFalse,
    });

/**
 * Crée un objet `{success: false}` avec une seule erreur dans son array `errors` de `{type: warning}` basée sur le `message` qu'elle doit montrer et le `status` qu'elle doit avoir.
 *
 * @param message - Le message en clair de l'erreur.
 * @param status - Le texte statique du statut de l'erreur.
 * @returns Un objet `{success: false}` avec une seule erreur dans son array `errors` de `{type: warning}`.
 */
export const makeSuccessFalseTypeWarning =
  /** @template {string} T, @template {string} U */ (
    /** @type {T} */ message,
    /** @type {U} */ status,
  ) =>
    /** @type {const} */ ({
      errors: [
        {
          message,
          status,
          ...typeWarning,
        },
      ],
      ...successFalse,
    });
