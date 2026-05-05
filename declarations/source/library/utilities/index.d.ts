export function makeSuccessFalseTypeError<T extends string, U extends string>(message: T, status: U): {
    readonly success: false;
    readonly errors: readonly [{
        readonly type: "error";
        readonly message: T;
        readonly status: U;
    }];
};
export function makeSuccessFalseTypeWarning<T extends string, U extends string>(message: T, status: U): {
    readonly success: false;
    readonly errors: readonly [{
        readonly type: "warning";
        readonly message: T;
        readonly status: U;
    }];
};
