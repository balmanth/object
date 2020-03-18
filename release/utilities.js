"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**!
 * Copyright (C) 2020 Silas B. Domingos
 * @license MIT
 */
const assertions_1 = require("./assertions");
/**
 * Internal functions.
 */
var Internals;
(function (Internals) {
    /**
     * Get a deep copy of the specified array.
     * @param array Input array.
     * @param levels Cloning level limit.
     * @returns Returns the value copy.
     */
    function cloneArray(array, levels) {
        const copy = [];
        for (const value of array) {
            if (levels > 0) {
                copy.push(clone(value, levels - 1));
            }
            else {
                copy.push(value);
            }
        }
        return copy;
    }
    Internals.cloneArray = cloneArray;
    /**
     * Get a deep copy of the specified object.
     * @param object Input object.
     * @param levels Cloning level limit.
     * @returns Returns the value copy.
     */
    function cloneObject(object, levels) {
        const copy = {};
        for (const [property, value] of Object.entries(object)) {
            if (levels > 0) {
                copy[property] = clone(value, levels - 1);
            }
            else {
                copy[property] = value;
            }
        }
        return copy;
    }
    Internals.cloneObject = cloneObject;
    /**
     * Get a deep and immutable copy of the specified array.
     * @param array Input array.
     * @param levels Locking level limit.
     * @returns Returns the value copy.
     */
    function freezeArray(array, levels = Infinity) {
        const copy = [];
        for (const value of array) {
            if (levels > 0) {
                copy.push(freeze(value, levels - 1));
            }
            else {
                copy.push(value);
            }
        }
        return Object.freeze(copy);
    }
    Internals.freezeArray = freezeArray;
    /**
     * Get a deep and immutable copy of the specified object.
     * @param object Input object.
     * @param levels Locking level limit.
     * @returns Returns the value copy.
     */
    function freezeObject(object, levels = Infinity) {
        const copy = {};
        for (const [property, value] of Object.entries(object)) {
            if (levels > 0) {
                copy[property] = freeze(value, levels - 1);
            }
            else {
                copy[property] = value;
            }
        }
        return Object.freeze(copy);
    }
    Internals.freezeObject = freezeObject;
})(Internals || (Internals = {}));
/**
 * An immutable empty array.
 */
exports.emptyArray = Object.freeze([]);
/**
 * An immutable empty object.
 */
exports.emptyObject = Object.freeze({});
/**
 * Get a deep copy of the specified value.
 * @param value Input value.
 * @param levels Optional level limit for cloning.
 * @returns Returns the value copy.
 */
function clone(value, levels = Infinity) {
    if (assertions_1.isArray(value)) {
        return Internals.cloneArray(value, levels);
    }
    else if (assertions_1.isObject(value)) {
        return Internals.cloneObject(value, levels);
    }
    return value;
}
exports.clone = clone;
/**
 * Get a deep copy of the specified array.
 * @param value Input value.
 * @param levels Optional level limit for cloning.
 * @returns Returns the value copy.
 */
function cloneArray(value, levels = Infinity) {
    if (!assertions_1.isArray(value)) {
        throw new TypeError(`Input value must be an Array.`);
    }
    return Internals.cloneArray(value, levels);
}
exports.cloneArray = cloneArray;
/**
 * Get a deep copy of the specified object.
 * @param value Input value.
 * @param levels Optional level limit for cloning.
 * @returns Returns the value copy.
 */
function cloneObject(value, levels = Infinity) {
    if (!assertions_1.isObject(value)) {
        throw new TypeError(`Input value must be an Object.`);
    }
    return Internals.cloneObject(value, levels);
}
exports.cloneObject = cloneObject;
/**
 * Get a deep and immutable copy of the specified value.
 * @param value Input value.
 * @param levels Optional level limit for cloning.
 * @returns Returns the value copy.
 */
function freeze(value, levels = Infinity) {
    if (assertions_1.isArray(value)) {
        return Internals.freezeArray(value, levels);
    }
    else if (assertions_1.isObject(value)) {
        return Internals.freezeObject(value, levels);
    }
    return value;
}
exports.freeze = freeze;
/**
 * Get a deep and immutable copy of the specified array.
 * @param value Input value.
 * @param levels Optional level limit for cloning.
 * @returns Returns the value copy.
 */
function freezeArray(value, levels = Infinity) {
    if (!assertions_1.isArray(value)) {
        throw new TypeError(`Input value must be an Array.`);
    }
    return Internals.freezeArray(value, levels);
}
exports.freezeArray = freezeArray;
/**
 * Get a deep and immutable copy of the specified object.
 * @param value Input value.
 * @param levels Optional level limit for cloning.
 * @returns Returns the value copy.
 */
function freezeObject(value, levels = Infinity) {
    if (!assertions_1.isObject(value)) {
        throw new TypeError(`Input value must be an Object.`);
    }
    return Internals.freezeObject(value, levels);
}
exports.freezeObject = freezeObject;
//# sourceMappingURL=utilities.js.map