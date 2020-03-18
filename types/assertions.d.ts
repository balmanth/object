/**!
 * Copyright (C) 2020 Silas B. Domingos
 * @license MIT
 */
/**
 * Determines whether or not the specified value is an array.
 * @param value Input value.
 * @returns Returns true when the value is an array, false otherwise.
 */
export declare function isArray<T>(value: unknown): value is readonly T[] | T[];
/**
 * Determines whether or not the specified value is a literal object.
 * @param value Input value.
 * @returns Returns true when the value is a literal object, false otherwise.
 */
export declare function isObject<T>(value: unknown): value is T & object;
/**
 * Determines whether or not the specified value is empty.
 * @param value Input value.
 * @returns Returns true when the value is empty, false otherwise.
 */
export declare function isEmpty<T>(value: T): boolean;
/**
 * Determines whether or not the specified value is an instance of the given base type.
 * @param value Input value.
 * @param base Base type.
 * @returns Returns true when the value is an instance of the given base type, false otherwise.
 */
export declare function isInstanceOf<T extends new () => any>(value: unknown, base: T): value is T;
/**
 * Determines whether or not the specified value is derived from the base type.
 * @param value Input value.
 * @param base Base type.
 * @returns Returns true when the value is derived from the base type, false otherwise.
 */
export declare function isDerivedFrom<T>(value: unknown, base: T): value is T;
/**
 * Determines whether or not both values are equal.
 * @param base Base value.
 * @param value Input value.
 * @param levels Optional level limit for comparison.
 * @returns Returns true when both values are equal, false otherwise.
 */
export declare function areEqual<T>(base: T, value: T, levels?: number): boolean;
/**
 * Determines whether or not the specified value type is the same as the base value type.
 * @param value Input value.
 * @param base Base value.
 * @returns Returns true when both types are the same, false otherwise.
 */
export declare function areEqualTypes<T>(value: unknown, base: T): value is T;
