export function isStringEmpty(item) {
    return (item == null || item === undefined || item === '');
};

export function isArrayEmpty(item) {
    return item === null || item === undefined || item.length === 0;
}