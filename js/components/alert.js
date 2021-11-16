import $ from "../utils/vent";

document.addEventListener("DOMContentLoaded", () => {
	$(document).on("click", ".close-button", function () {
		const wrapper = this.closest(".alert");

		// return if close button does not have wrapper with [.alert] class
		if (!wrapper) return;
		// add animation class to remove the alert
		wrapper.classList.add("alert-will-be-removed");

		// after delay remove alert from DOM
		$(wrapper).once("animationend", (e) => {
			wrapper.remove();
		});
	});
});
