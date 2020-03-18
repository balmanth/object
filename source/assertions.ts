/**!
 * Copyright (C) 2020 Silas B. Domingos
 * @license MIT
 */

/**
 * Determines whether or not the specified value is an array.
 * @param value Input value.
 * @returns Returns true when the value is an array, false otherwise.
 */
export function isArray<T>(value: unknown): value is readonly T[] | T[] {
  return value instanceof Array;
}

/**
 * Determines whether or not the specified value is a literal object.
 * @param value Input value.
 * @returns Returns true when the value is a literal object, false otherwise.
 */
export function isObject<T>(value: unknown): value is T & object {
  return value instanceof Object && Object.getPrototypeOf(value) === Object.getPrototypeOf({});
}

/**
 * Determines whether or not the specified value is empty.
 * @param value Input value.
 * @returns Returns true when the value is empty, false otherwise.
 */
export function isEmpty<T>(value: T): boolean {
  if (value) {
    if (isArray<T>(value)) {
      return value.length === 0;
    } else if (isObject<T>(value)) {
      return Object.keys(value).length === 0;
    }
    return false;
  }
  return true;
}

/**
 * Determines whether or not the specified value is an instance of the given base type.
 * @param value Input value.
 * @param base Base type.
 * @returns Returns true when the value is an instance of the given base type, false otherwise.
 */
export function isInstanceOf<T extends new () => any>(value: unknown, base: T): value is T {
  return value instanceof base;
}

/**
 * Determines whether or not the specified value is derived from the base type.
 * @param value Input value.
 * @param base Base type.
 * @returns Returns true when the value is derived from the base type, false otherwise.
 */
export function isDerivedFrom<T>(value: unknown, base: T): value is T {
  if (value instanceof Object) {
    do {
      value = Object.getPrototypeOf(value);
      if (value === base) {
        return true;
      }
    } while (value && value !== Function);
  }
  return false;
}

/**
 * Determines whether or not both values are equal.
 * @param base Base value.
 * @param value Input value.
 * @param levels Optional level limit for comparison.
 * @returns Returns true when both values are equal, false otherwise.
 */
export function areEqual<T>(base: T, value: T, levels: number = Infinity): boolean {
  if (value !== base) {
    if (isArray<T>(value) && isArray<T>(base)) {
      return areEqualArrays(base, value, levels);
    } else if (isObject<T>(value) && isObject<T>(base)) {
      return areEqualObjects(base, value, levels);
    }
    return false;
  }
  return true;
}

/**
 * Determines whether or not the specified value type is the same as the base value type.
 * @param value Input value.
 * @param base Base value.
 * @returns Returns true when both types are the same, false otherwise.
 */
export function areEqualTypes<T>(value: unknown, base: T): value is T {
  if (typeof base === typeof value) {
    if (base instanceof Object) {
      const valueClass = Object.getPrototypeOf(value).constructor;
      const baseClass = Object.getPrototypeOf(base).constructor;
      return valueClass === baseClass;
    }
    return true;
  }
  return false;
}

/**
 * Determines whether or not both arrays are equal.
 * @param base Base array.
 * @param array Input array.
 * @param levels Optional level limit for comparison.
 * @returns Returns true when both arrays are equal, false otherwise.
 */
function areEqualArrays<T>(base: readonly T[], array: readonly T[], levels: number): boolean {
  if (array.length === base.length) {
    const length = array.length;
    for (let index = 0; index < length; ++index) {
      if (levels > 0) {
        if (!areEqual(base[index], array[index], levels - 1)) {
          return false;
        }
      } else if (base[index] !== array[index]) {
        return false;
      }
    }
    return true;
  }
  return false;
}

/**
 * Determines whether or not both objects are equal.
 * @param base Base object.
 * @param value Input object.
 * @param levels Optional level limit for comparison.
 * @returns Returns true when both objects are equal, false otherwise.
 */
function areEqualObjects<T extends object>(base: T, object: T, levels: number): boolean {
  if (Object.keys(object).length === Object.keys(base).length) {
    for (const key in object) {
      if (levels > 0) {
        if (!areEqual(base[key], object[key], levels - 1)) {
          return false;
        }
      } else if (base[key] !== object[key]) {
        return false;
      }
    }
    return true;
  }
  return false;
}
