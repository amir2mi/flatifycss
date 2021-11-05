/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/components/alert.js":
/*!********************************!*\
  !*** ./js/components/alert.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_vent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/vent */ \"./js/utils/vent.js\");\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config.json */ \"./js/config.json\");\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n\t(0,_utils_vent__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(document).on(\"click\", \".close-button\", function () {\n\t\tthis.closest(\".alert\").classList.add(\"alert-will-be-removed\");\n\n\t\tsetTimeout(() => {\n\t\t\tthis.closest(\".alert\").remove();\n\t\t}, _config_json__WEBPACK_IMPORTED_MODULE_1__.alertRemoveAnimationDuration);\n\t});\n});\n\n\n//# sourceURL=webpack://flatifycss/./js/components/alert.js?");

/***/ }),

/***/ "./js/flatify.js":
/*!***********************!*\
  !*** ./js/flatify.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_alert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/alert */ \"./js/components/alert.js\");\n\n\n\n//# sourceURL=webpack://flatifycss/./js/flatify.js?");

/***/ }),

/***/ "./js/utils/vent.js":
/*!**************************!*\
  !*** ./js/utils/vent.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/**\n * Vent, jQuery inspired DOM events library\n * @url https://github.com/ealush/vent\n */\n\n((exports) => {\n\tconst savedEvents = [];\n\n\t/**\n\t * Naively checks if a given event name is a native event.\n\t * @param {String} event Name of the event to test\n\t * @returns {Boolean}\n\t */\n\tconst isNativeEvent = (event) => typeof document[`on${event}`] !== \"undefined\";\n\n\t/**\n\t * Checks if an event target is our intended target to call the handler for.\n\t * @param {HTMLElement} eventTarget Target passed from event.\n\t * @param {String} delegatedTarget Selector of a delegation target.\n\t * @param {HTMLElement} originalTarget \"Main\" (non delegated) target.\n\t * @returns {Boolean}\n\t */\n\tconst isTarget = (eventTarget, delegatedTarget, originalTarget) => {\n\t\t/**\n\t\t * If no delegate passed, then the event must have been called on\n\t\t * on the original target or its descendents. No questions asked.\n\t\t */\n\t\tif (!delegatedTarget || typeof delegatedTarget !== \"string\") {\n\t\t\treturn true;\n\t\t}\n\n\t\t/**\n\t\t * True if:\n\t\t * 1. The event target matches the delegate target\n\t\t * 2. The event target is a descendent of the delegate target.\n\t\t */\n\t\treturn matches(eventTarget, delegatedTarget) || originalTarget.contains(eventTarget.closest(delegatedTarget));\n\t};\n\n\t/**\n\t * Checks that a given element complies with a supplied selector.\n\t * @param {HTMLElement} target Target element to test.\n\t * @param {String} selector Selector to test the element with.\n\t * @returns {Boolean}\n\t */\n\tconst matches = (target, selector) => {\n\t\tif (!target) {\n\t\t\treturn false;\n\t\t}\n\n\t\tif (typeof target.matches === \"function\") {\n\t\t\treturn target.matches(selector);\n\t\t} else if (typeof target.msMatchesSelector === \"function\") {\n\t\t\treturn target.msMatchesSelector(selector);\n\t\t}\n\n\t\treturn false;\n\t};\n\n\t/**\n\t * Generates a list of nodes from a selector or an EventTarget.\n\t * @param {*} nodes\n\t * @returns {Array<EventTarget>}\n\t */\n\tconst parseNode = (nodes) => {\n\t\tif (!nodes) {\n\t\t\treturn [];\n\t\t}\n\n\t\tif (typeof nodes === \"string\") {\n\t\t\treturn [...document.querySelectorAll(nodes)];\n\t\t} else if (nodes instanceof NodeList) {\n\t\t\treturn [...nodes];\n\t\t} else if (typeof nodes.addEventListener === \"function\") {\n\t\t\treturn [nodes];\n\t\t}\n\n\t\treturn [];\n\t};\n\n\t/**\n\t * Splits a string by ' ' and removes duplicates.\n\t * @param {String} events\n\t * @returns {Array<String>}\n\t */\n\tconst splitEvents = (events) => {\n\t\tif (typeof events !== \"string\") {\n\t\t\treturn [];\n\t\t}\n\n\t\tconst uniqueEvents = events.split(\" \").reduce(\n\t\t\t({ keys, existing }, current) => {\n\t\t\t\tif (existing[current]) {\n\t\t\t\t\treturn { keys, existing };\n\t\t\t\t}\n\n\t\t\t\treturn {\n\t\t\t\t\tkeys: [...keys, current],\n\t\t\t\t\texisting: { ...existing, [current]: true },\n\t\t\t\t};\n\t\t\t},\n\t\t\t{ keys: [], existing: {} }\n\t\t);\n\n\t\treturn uniqueEvents.keys;\n\t};\n\n\t/**\n\t * Registers either a one time or a permanent listener on an EventTarget.\n\t * @param {EventTarget} target Target to add listener to.\n\t * @param {String} eventName Name of the event to listen to.\n\t * @param {Function} handler Handler callback function.\n\t * @param {Object} options.\n\t * @param {String} options.delegate Selector for delegation.\n\t * @param {Boolean} options.once Determines whether the handler should run once or more.\n\t */\n\tconst listen = (target, eventName, handler, { delegate, once }) => {\n\t\t// Instead of using the user's own handler, we wrap it with our own.\n\t\t// This is so we can implement deleg\n\t\tconst delegateHandler = (e) => {\n\t\t\tif (isTarget(e.target, delegate, target)) {\n\t\t\t\tconst data = e && e.detail;\n\t\t\t\thandler.call(delegate ? e.target : target, e, data);\n\n\t\t\t\tif (once) {\n\t\t\t\t\ttarget.removeEventListener(eventName, delegateHandler);\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\n\t\t// We're keeping a reference to the original handler\n\t\t// so the consumer can later on `off` that specific handler\n\t\tdelegateHandler.originalHandler = handler;\n\n\t\ttarget.addEventListener(eventName, delegateHandler);\n\n\t\tif (!once) {\n\t\t\tsetEvent(target, eventName, delegateHandler);\n\t\t}\n\t};\n\n\t/**\n\t * Dispatches an event on a target, or calls its `on` function.\n\t * @param {EventTarget} target Event target to dispatch the event on.\n\t * @param {String} events space separated list of event names;\n\t * @param {Object} detail EventTarget Detail Object.\n\t * @param {Object} options\n\t */\n\tconst dispatch = (target, events, detail, options) => {\n\t\tconst hasDispatch = typeof target.dispatchEvent === \"function\";\n\n\t\tsplitEvents(events).forEach((eventName) => {\n\t\t\tconst nativeEvent = isNativeEvent(eventName);\n\t\t\tlet event;\n\n\t\t\tif (detail || !nativeEvent) {\n\t\t\t\tevent = new CustomEvent(eventName, Object.assign({ detail, bubbles: true }, options));\n\t\t\t} else {\n\t\t\t\tevent = new Event(eventName, Object.assign({ bubbles: true }, options));\n\t\t\t}\n\n\t\t\tif (nativeEvent && typeof target[eventName] === \"function\") {\n\t\t\t\ttarget[eventName]();\n\t\t\t}\n\n\t\t\tif (!hasDispatch) {\n\t\t\t\treturn;\n\t\t\t}\n\t\t\ttarget.dispatchEvent(event);\n\t\t});\n\t};\n\n\t/**\n\t * Stores target and its events for later access.\n\t * @param {EventTarget} target An event target to store.\n\t * @param {String} event Event Name.\n\t * @param {Function} handler Event handler function.\n\t */\n\tconst setEvent = (target, event, handler) => {\n\t\tif (!target || !event || !handler) {\n\t\t\treturn;\n\t\t}\n\t\tconst targetIndex = savedEvents.findIndex(([current]) => current === target);\n\n\t\t// Get the existing target reference, or default to an empty object.\n\t\tconst [_, targetEvents] = savedEvents[targetIndex] || [target, {}];\n\n\t\ttargetEvents[event] = targetEvents[event] || [];\n\t\ttargetEvents[event].push(handler);\n\n\t\tif (targetIndex === -1) {\n\t\t\tsavedEvents.push([target, targetEvents]);\n\t\t} else {\n\t\t\tsavedEvents[targetIndex] = [target, targetEvents];\n\t\t}\n\t};\n\n\t/**\n\t * Removes Target events from storage\n\t * @param {EventTarget} target EventTarget to remove.\n\t * @param {String} [events] List of events to remove from storage.\n\t * @param {Function} [handler] Funtion to remove.\n\t */\n\tconst deleteEvents = (target, events, handler) => {\n\t\tconst targetIndex = savedEvents.findIndex(([current]) => current === target);\n\t\tif (targetIndex === -1) {\n\t\t\treturn;\n\t\t}\n\n\t\tconst [, targetEvents] = savedEvents[targetIndex];\n\n\t\tconst eventsArray = splitEvents(events);\n\n\t\t// Do this for each of the existing events for the current target.\n\t\tfor (const event in targetEvents) {\n\t\t\tif (\n\t\t\t\t// * The consumer requested to remove the current event name\n\t\t\t\t//    or if the user did not specify an event name\n\t\t\t\t(eventsArray.indexOf(event) !== -1 || !events) &&\n\t\t\t\t// * And the current target has this event registered\n\t\t\t\tObject.prototype.hasOwnProperty.call(targetEvents, event) &&\n\t\t\t\t// * And it is an array (safeguard)\n\t\t\t\tArray.isArray(targetEvents[event])\n\t\t\t) {\n\t\t\t\t// Filter out the events that the consumer wanted to remove\n\t\t\t\ttargetEvents[event] = targetEvents[event].filter((currentHandler) => {\n\t\t\t\t\t// If the consumer specified a specific handler to remove\n\t\t\t\t\tif (handler) {\n\t\t\t\t\t\t// and the handler doesn't match the current handler\n\t\t\t\t\t\tif (currentHandler.originalHandler !== handler) {\n\t\t\t\t\t\t\t// keep it in\n\t\t\t\t\t\t\treturn true;\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\t// filter it out and remove its listener;\n\t\t\t\t\t\t\ttarget.removeEventListener(event, currentHandler);\n\t\t\t\t\t\t\treturn false;\n\t\t\t\t\t\t}\n\t\t\t\t\t} else {\n\t\t\t\t\t\t// Remove all handlers for current event name\n\t\t\t\t\t\ttarget.removeEventListener(event, currentHandler);\n\t\t\t\t\t\treturn false;\n\t\t\t\t\t}\n\t\t\t\t});\n\n\t\t\t\tif (!events) {\n\t\t\t\t\t// Clear all the events\n\t\t\t\t\tdelete targetEvents[event];\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\tif (!events) {\n\t\t\tsavedEvents.splice(targetIndex, 1);\n\t\t}\n\t};\n\n\twindow[\"Vent\"] = function Vent(...args) {\n\t\tthis.length = 0;\n\t\tthis.add(...args);\n\t};\n\tconst vent = (...args) => new window[\"Vent\"](...args);\n\twindow[\"vent\"] = vent;\n\n\t// Mocks native splice\n\twindow[\"Vent\"].prototype[\"splice\"] = function (...args) {\n\t\treturn Array.prototype.splice.apply(this, args);\n\t};\n\n\t// Mocks native forEach\n\twindow[\"Vent\"].prototype[\"each\"] = function (...args) {\n\t\tArray.prototype.forEach.call(this, ...args);\n\t\treturn this;\n\t};\n\n\twindow[\"Vent\"].prototype[\"add\"] = function (...args) {\n\t\targs.forEach((selector) => {\n\t\t\tconst nodeList = parseNode(selector);\n\n\t\t\tnodeList.forEach((node) => {\n\t\t\t\tfor (let i = 0; i < this.length; i++) {\n\t\t\t\t\tif (this[i] === node) {\n\t\t\t\t\t\treturn;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tthis[this.length] = node;\n\t\t\t\tthis.length++;\n\t\t\t});\n\t\t});\n\n\t\treturn this;\n\t};\n\n\twindow[\"Vent\"].prototype[\"on\"] = function (...args) {\n\t\treturn bindEvents(this, {}, args);\n\t};\n\n\twindow[\"Vent\"].prototype[\"once\"] = function (...args) {\n\t\treturn bindEvents(this, { once: true }, args);\n\t};\n\n\twindow[\"Vent\"].prototype[\"off\"] = function (events, handler) {\n\t\treturn this[\"each\"]((target) => deleteEvents(target, events, handler));\n\t};\n\n\twindow[\"Vent\"].prototype[\"trigger\"] = function (events, { data, options } = {}) {\n\t\treturn this[\"each\"]((target) => dispatch(target, events, data, options));\n\t};\n\n\tconst bindEvents = (instance, options, [events, ...args]) => {\n\t\tif (!args.length) {\n\t\t\t// no handler. bye.\n\t\t\treturn;\n\t\t}\n\n\t\t// One liner for:\n\t\t// [handler] = args\n\t\t// [delegate, handler] = args\n\t\tconst { length, [length - 1]: handler, [length - 2]: delegate } = args;\n\n\t\tconst eventsArray = splitEvents(events);\n\t\treturn instance[\"each\"]((node) =>\n\t\t\teventsArray.forEach((event) =>\n\t\t\t\tlisten(node, event, handler, {\n\t\t\t\t\t...options,\n\t\t\t\t\tdelegate,\n\t\t\t\t})\n\t\t\t)\n\t\t);\n\t};\n\n\treturn window[\"vent\"];\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (window[\"vent\"]);\n\n\n//# sourceURL=webpack://flatifycss/./js/utils/vent.js?");

/***/ }),

/***/ "./js/config.json":
/*!************************!*\
  !*** ./js/config.json ***!
  \************************/
/***/ (function(module) {

eval("module.exports = JSON.parse('{\"alertRemoveAnimationDuration\":\"400\"}');\n\n//# sourceURL=webpack://flatifycss/./js/config.json?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_require__("./js/flatify.js");
/******/ 	__webpack_require__("./js/components/alert.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./js/utils/vent.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=../maps/flatify.js.map
