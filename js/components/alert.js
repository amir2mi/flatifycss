import $ from "../utils/vent";
import logger from "../utils/logger";
import { secondToMs } from "../utils/time";

document.addEventListener("DOMContentLoaded", () => {
	$(document).on("click", ".close-button", function () {
		const wrapper = this.closest(".alert");

		// return if close button does not have wrapper with [.alert] class
		if (!wrapper) return;

		logger("info", "Alert will be removed...", wrapper);
		// add animation class to remove the alert
		wrapper.classList.add("alert-will-be-removed");

		// after delay remove alert from DOM
		wrapper.onanimationend = (e) => {
			wrapper.remove();
			logger("info", `Alert is removed after ${secondToMs(e.elapsedTime)}ms delay`, wrapper);
		};
	});
});
