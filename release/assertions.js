"use strict";
/**!
 * Copyright (C) 2020 Silas B. Domingos
 * @license MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Determines whether or not the specified value is an array.
 * @param value Input value.
 * @returns Returns true when the value is an array, false otherwise.
 */
function isArray(value) {
    return value instanceof Array;
}
exports.isArray = isArray;
/**
 * Determines whether or not the specified value is a literal object.
 * @param value Input value.
 * @returns Returns true when the value is a literal object, false otherwise.
 */
function isObject(value) {
    return value instanceof Object && Object.getPrototypeOf(value) === Object.getPrototypeOf({});
}
exports.isObject = isObject;
/**
 * Determines whether or not the specified value is empty.
 * @param value Input value.
 * @returns Returns true when the value is empty, false otherwise.
 */
function isEmpty(value) {
    if (value) {
        if (isArray(value)) {
            return value.length === 0;
        }
        else if (isObject(value)) {
            return Object.keys(value).length === 0;
        }
        return false;
    }
    return true;
}
exports.isEmpty = isEmpty;
/**
 * Determines whether or not the specified value is an instance of the given base type.
 * @param value Input value.
 * @param base Base type.
 * @returns Returns true when the value is an instance of the given base type, false otherwise.
 */
function isInstanceOf(value, base) {
    return value instanceof base;
}
exports.isInstanceOf = isInstanceOf;
/**
 * Determines whether or not the specified value is derived from the base type.
 * @param value Input value.
 * @param base Base type.
 * @returns Returns true when the value is derived from the base type, false otherwise.
 */
function isDerivedFrom(value, base) {
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
exports.isDerivedFrom = isDerivedFrom;
/**
 * Determines whether or not both values are equal.
 * @param base Base value.
 * @param value Input value.
 * @param levels Optional level limit for comparison.
 * @returns Returns true when both values are equal, false otherwise.
 */
function areEqual(base, value, levels = Infinity) {
    if (value !== base) {
        if (isArray(value) && isArray(base)) {
            return areEqualArrays(base, value, levels);
        }
        else if (isObject(value) && isObject(base)) {
            return areEqualObjects(base, value, levels);
        }
        return false;
    }
    return true;
}
exports.areEqual = areEqual;
/**
 * Determines whether or not the specified value type is the same as the base value type.
 * @param value Input value.
 * @param base Base value.
 * @returns Returns true when both types are the same, false otherwise.
 */
function areEqualTypes(value, base) {
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
exports.areEqualTypes = areEqualTypes;
/**
 * Determines whether or not both arrays are equal.
 * @param base Base array.
 * @param array Input array.
 * @param levels Optional level limit for comparison.
 * @returns Returns true when both arrays are equal, false otherwise.
 */
function areEqualArrays(base, array, levels) {
    if (array.length === base.length) {
        const length = array.length;
        for (let index = 0; index < length; ++index) {
            if (levels > 0) {
                if (!areEqual(base[index], array[index], levels - 1)) {
                    return false;
                }
            }
            else if (base[index] !== array[index]) {
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
function areEqualObjects(base, object, levels) {
    if (Object.keys(object).length === Object.keys(base).length) {
        for (const key in object) {
            if (levels > 0) {
                if (!areEqual(base[key], object[key], levels - 1)) {
                    return false;
                }
            }
            else if (base[key] !== object[key]) {
                return false;
            }
        }
        return true;
    }
    return false;
}
//# sourceMappingURL=assertions.js.map