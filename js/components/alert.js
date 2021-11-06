import config from "../config.json";
import $ from "../utils/vent";
import logger from "../utils/logger";

document.addEventListener("DOMContentLoaded", () => {
	$(document).on("click", ".close-button", function () {
		this.closest(".alert").classList.add("alert-will-be-removed");

		logger("info", "Alert will be removed...", this);

		setTimeout(() => {
			this.closest(".alert").remove();

			logger("info", `Alert is removed after ${config.alertRemoveAnimationDuration}ms delay.`, this);
		}, config.alertRemoveAnimationDuration);
	});
});
