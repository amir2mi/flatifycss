import config from "../config";

/**
 * Log a message in the console or another services,
 * It will log if [enableLogging] is true in config.json.
 *
 * @param type {string} console logging type can be info, warn or error.
 * @param message {string} console logging type.
 * @param data {any} Attached data for further information.
 */
export default function logger(type, message, data) {
	if (config.enableLogging === true) {
		message = `${config.name}: ${message}`;
		return data ? console[type](message, data) : console[type](message);
	}
}
