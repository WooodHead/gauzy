/**
 * Check is function .
 * @param item
 * @returns {boolean}
 */
export function isFunction(item: any): boolean {
	if (isEmpty(item)) {
		return false;
	}
	return typeof item === 'function';
}

/**
 * Check is object.
 * @param item
 * @returns {boolean}
 */
export function isObject(item: any): boolean {
	if (isEmpty(item)) {
		return false;
	}
	return typeof item === 'object';
}

/**
 * Check is object or function.
 * @param item
 * @returns {boolean}
 */
export function isObjectOrFunction(item: any): boolean {
	if (isEmpty(item)) {
		return false;
	}
	return isFunction(item) || isObject(item);
}

/**
 * Check is class instance.
 * @param item
 * @returns {boolean}
 */
export function isClassInstance(item: any): boolean {
	return isObject(item) && item.constructor.name !== 'Object';
}

/**
 * Check value not empty.
 * @param item
 * @returns {boolean}
 */
export function isNotEmpty(item: any): boolean {
	return !isEmpty(item);
}

/**
 * Check value empty.
 * @param item
 * @returns {boolean}
 */
export function isEmpty(item: any): boolean {
	switch (item) {
		case 0:
		case null:
		case false:
		case undefined:
			return true;
		default:
			return false;
	}
}