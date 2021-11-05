import $ from "../utils/vent";
import config from "../config.json";

document.addEventListener("DOMContentLoaded", () => {
	$(document).on("click", ".close-button", function () {
		this.closest(".alert").classList.add("alert-will-be-removed");

		setTimeout(() => {
			this.closest(".alert").remove();
		}, config.alertRemoveAnimationDuration);
	});
});
