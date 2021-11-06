import config from "../config";

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
