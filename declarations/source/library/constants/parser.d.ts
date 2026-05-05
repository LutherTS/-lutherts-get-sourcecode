export namespace typeScriptAndJSXCompatible {
    export { parser };
    export namespace parserOptions {
        namespace ecmaFeatures {
            let jsx: true;
        }
    }
}
import { parser } from "typescript-eslint";
