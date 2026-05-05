export namespace successFalse {
    let success: false;
}
export namespace successTrue {
    let success_1: true;
    export { success_1 as success };
}
export namespace typeError {
    let type: "error";
}
export namespace typeWarning {
    let type_1: "warning";
    export { type_1 as type };
}
