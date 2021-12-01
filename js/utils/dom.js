/**
 * Get node index inside parent
 * @param {Object} node
 * @returns {number}
 * @author gsnedders <https://stackoverflow.com/a/4649781/15172167>
 */
export function getChildIndex(node) {
	return Array.prototype.indexOf.call(node.parentNode.children, node);
}
