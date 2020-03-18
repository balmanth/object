/**!
 * Copyright (C) 2020 Silas B. Domingos
 * @license MIT
 */
import { isArray, isObject } from './assertions';

/**
 * Internal functions.
 */
namespace Internals {
  /**
   * Get a deep copy of the specified array.
   * @param array Input array.
   * @param levels Cloning level limit.
   * @returns Returns the value copy.
   */
  export function cloneArray<T>(array: Readonly<T[]>, levels: number): T[] {
    const copy = <any>[];
    for (const value of array) {
      if (levels > 0) {
        copy.push(clone(value, levels - 1));
      } else {
        copy.push(value);
      }
    }
    return copy;
  }

  /**
   * Get a deep copy of the specified object.
   * @param object Input object.
   * @param levels Cloning level limit.
   * @returns Returns the value copy.
   */
  export function cloneObject<T>(object: Readonly<T>, levels: number): T {
    const copy = <any>{};
    for (const [property, value] of <[keyof T, any][]>Object.entries(object)) {
      if (levels > 0) {
        copy[property] = clone(value, levels - 1);
      } else {
        copy[property] = value;
      }
    }
    return copy;
  }

  /**
   * Get a deep and immutable copy of the specified array.
   * @param array Input array.
   * @param levels Locking level limit.
   * @returns Returns the value copy.
   */
  export function freezeArray<T>(array: Readonly<T[]>, levels: number = Infinity): Readonly<T[]> {
    const copy = <any>[];
    for (const value of array) {
      if (levels > 0) {
        copy.push(freeze(value, levels - 1));
      } else {
        copy.push(value);
      }
    }
    return Object.freeze(copy);
  }

  /**
   * Get a deep and immutable copy of the specified object.
   * @param object Input object.
   * @param levels Locking level limit.
   * @returns Returns the value copy.
   */
  export function freezeObject<T>(object: Readonly<T>, levels: number = Infinity): Readonly<T> {
    const copy = <any>{};
    for (const [property, value] of <[keyof T, any][]>Object.entries(object)) {
      if (levels > 0) {
        copy[property] = freeze(value, levels - 1);
      } else {
        copy[property] = value;
      }
    }
    return Object.freeze(copy);
  }
}

/**
 * An immutable empty array.
 */
export const emptyArray = <Readonly<any[]>>Object.freeze([]);

/**
 * An immutable empty object.
 */
export const emptyObject = <Readonly<any>>Object.freeze({});

/**
 * Get a deep copy of the specified value.
 * @param value Input value.
 * @param levels Optional level limit for cloning.
 * @returns Returns the value copy.
 */
export function clone<T>(value: T, levels: number = Infinity): T {
  if (isArray<T>(value)) {
    return <any>Internals.cloneArray(value, levels);
  } else if (isObject<T>(value)) {
    return Internals.cloneObject(value, levels);
  }
  return value;
}

/**
 * Get a deep copy of the specified array.
 * @param value Input value.
 * @param levels Optional level limit for cloning.
 * @returns Returns the value copy.
 */
export function cloneArray<T>(value: T, levels: number = Infinity): T {
  if (!isArray<T>(value)) {
    throw new TypeError(`Input value must be an Array.`);
  }
  return <any>Internals.cloneArray(value, levels);
}

/**
 * Get a deep copy of the specified object.
 * @param value Input value.
 * @param levels Optional level limit for cloning.
 * @returns Returns the value copy.
 */
export function cloneObject<T>(value: T, levels: number = Infinity): T {
  if (!isObject<T>(value)) {
    throw new TypeError(`Input value must be an Object.`);
  }
  return Internals.cloneObject(value, levels);
}

/**
 * Get a deep and immutable copy of the specified value.
 * @param value Input value.
 * @param levels Optional level limit for cloning.
 * @returns Returns the value copy.
 */
export function freeze<T>(value: T, levels: number = Infinity): Readonly<T> {
  if (isArray<T>(value)) {
    return <any>Internals.freezeArray(value, levels);
  } else if (isObject<T>(value)) {
    return Internals.freezeObject(value, levels);
  }
  return value;
}

/**
 * Get a deep and immutable copy of the specified array.
 * @param value Input value.
 * @param levels Optional level limit for cloning.
 * @returns Returns the value copy.
 */
export function freezeArray<T>(value: T, levels: number = Infinity): Readonly<T> {
  if (!isArray<T>(value)) {
    throw new TypeError(`Input value must be an Array.`);
  }
  return <any>Internals.freezeArray(value, levels);
}

/**
 * Get a deep and immutable copy of the specified object.
 * @param value Input value.
 * @param levels Optional level limit for cloning.
 * @returns Returns the value copy.
 */
export function freezeObject<T>(value: T, levels: number = Infinity): Readonly<T> {
  if (!isObject<T>(value)) {
    throw new TypeError(`Input value must be an Object.`);
  }
  return Internals.freezeObject(value, levels);
}
