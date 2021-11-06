import config from "../config";

/**
 * Log a message in the console or another services,
 * It will log if [enableLogging] is true in config.json.
 *
 * @param type {string} console logging type.
 * @param message {string} console logging type.
 * @param data {any} Attached data for further information.
 */
export default function logger(type, message, data) {
	if (config.enableLogging === true) {
		switch (type) {
			case "info":
				return console.info(message, data);
			case "warn":
				return console.warn(message, data);
			case "error":
				return console.error(message, data);
			default:
				return console.log(message, data);
		}
	}
}
