/**
 * An immutable empty array.
 */
export declare const emptyArray: readonly any[];
/**
 * An immutable empty object.
 */
export declare const emptyObject: Readonly<any>;
/**
 * Get a deep copy of the specified value.
 * @param value Input value.
 * @param levels Optional level limit for cloning.
 * @returns Returns the value copy.
 */
export declare function clone<T>(value: T, levels?: number): T;
/**
 * Get a deep copy of the specified array.
 * @param value Input value.
 * @param levels Optional level limit for cloning.
 * @returns Returns the value copy.
 */
export declare function cloneArray<T>(value: T, levels?: number): T;
/**
 * Get a deep copy of the specified object.
 * @param value Input value.
 * @param levels Optional level limit for cloning.
 * @returns Returns the value copy.
 */
export declare function cloneObject<T>(value: T, levels?: number): T;
/**
 * Get a deep and immutable copy of the specified value.
 * @param value Input value.
 * @param levels Optional level limit for cloning.
 * @returns Returns the value copy.
 */
export declare function freeze<T>(value: T, levels?: number): Readonly<T>;
/**
 * Get a deep and immutable copy of the specified array.
 * @param value Input value.
 * @param levels Optional level limit for cloning.
 * @returns Returns the value copy.
 */
export declare function freezeArray<T>(value: T, levels?: number): Readonly<T>;
/**
 * Get a deep and immutable copy of the specified object.
 * @param value Input value.
 * @param levels Optional level limit for cloning.
 * @returns Returns the value copy.
 */
export declare function freezeObject<T>(value: T, levels?: number): Readonly<T>;
