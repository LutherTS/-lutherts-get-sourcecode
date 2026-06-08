/* libraries */

// import { resolvedPublicData as getSourceCodeCommentVariablesData } from "./comment-variables/config/comments.config.public.mjs";

import { commentVariablesData as errorHandlingCommentVariablesData } from "@lutherts/error-handling";

const libraries = {
  // [getSourceCodeCommentVariablesData.libraryKey]:
  //   getSourceCodeCommentVariablesData.libraryVariations.FR,

  [errorHandlingCommentVariablesData.libraryKey]:
    errorHandlingCommentVariablesData.libraryVariations.EN,
}; // can be omitted // v3

const config = {
  libraries, // v3
};

export default config;
