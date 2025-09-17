const objToString = Object.prototype.toString;

// 检查给定的值是否是 dom 元素
export function isElement(value: unknown): value is Element {
  return (
    typeof value === 'object' &&
    value !== null &&
    (value as Element).nodeType === 1
  );
}

// 检查给定的值是否是 null
export function isNull(value: unknown): value is null {
  return value === null;
}

// 检查给定的值是否是 undefined
export function isUndefined(value: unknown): value is undefined {
  return value === undefined; // undefined 始终返回 undefined
}

// 检查给定的值是否是 NaN
export function isNaN(value: unknown): value is number {
  return Number.isNaN(value as number);
}

// 检查给定的值是否是数值
export function isNumber(value: unknown): value is number {
  return typeof value === 'number' && !Number.isNaN(value);
}

// 检查给定的值是否是字符串
export function isString(value: unknown): value is string {
  return typeof value === 'string';
}

// 检查给定的值是否是布尔值
export function isBoolean(value: unknown): value is boolean {
  return typeof value === 'boolean';
}

// 检查给定的值是否是正则表达式
export function isRegExp(value: unknown): value is RegExp {
  return objToString.call(value) === '[object RegExp]';
}

// 检查给定的值是否是日期对象
export function isDate(value: unknown): value is Date {
  return (
    objToString.call(value) === '[object Date]' &&
    !Number.isNaN((value as Date).getTime())
  );
}

// 检查给定的值是否是函数
export function isFunction(value: unknown): value is Function {
  return typeof value === 'function';
}

// 检查给定的值是否是数组
export function isArray(value: unknown): value is Array<unknown> {
  return Array.isArray(value);
}

// 检查给定的值是否是对象
export function isObject(value: unknown): value is Record<string, unknown> {
  return value !== null && typeof value === 'object';
}
