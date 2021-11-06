import config from "../config.json";
import $ from "../utils/vent";
import logger from "../utils/logger";

document.addEventListener("DOMContentLoaded", () => {
	$(document).on("click", ".close-button", function () {
		const wrapper = this.closest(".alert");

		// return if close button does not have wrapper with [.alert] class
		if (!wrapper) {
			return logger("error", `Close button is not in an ".alert"`, this.parentElement);
		} else {
			logger("info", "Alert will be removed...", this);
		}

		// add animation class to remove the alert
		wrapper.classList.add("alert-will-be-removed");

		// after delay remove alert from DOM
		setTimeout(() => {
			this.closest(".alert").remove();
			logger("info", `Alert is removed after ${config.alertRemoveAnimationDuration}ms delay.`, this);
		}, config.alertRemoveAnimationDuration);
	});
});
