function isNull(value) {
  return value === null;
}
function isUndefined(value) {
  return value === void 0;
}
function isNumber(value) {
  return typeof value === "number" && !Number.isNaN(value);
}
function isString(value) {
  return typeof value === "string";
}
function isBoolean(value) {
  return typeof value === "boolean";
}
function isFunction(value) {
  return typeof value === "function";
}
function isArray(value) {
  return Array.isArray(value);
}
function isObject(value) {
  return value !== null && typeof value === "object";
}
export {
  isArray,
  isBoolean,
  isFunction,
  isNull,
  isNumber,
  isObject,
  isString,
  isUndefined
};
