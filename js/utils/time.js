/**
 * Convert seconds to milliseconds
 * @param {number} time 
 * @returns milliseconds
 */
export function secondToMs(time) {
	return !isNaN(time) && Math.ceil(time * 1000);
}
