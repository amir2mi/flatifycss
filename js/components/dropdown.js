import $ from "../utils/vent";
import logger from "../utils/logger";

function showDropdown(dropdown, toggle) {
	// show dropdown
	dropdown.classList.add("show");

	// flip dropdown toggle arrow
	toggle.classList.add("arrow-flip");

	// dropdown toggle [aria-expanded="true"] to indicate that dropdown is opened
	toggle.setAttribute("aria-expanded", true);
}

function hideDropdown(dropdown, toggle) {
	dropdown.classList.add("dropdown-will-be-hidden");

	$(dropdown).once("animationend", (e) => {
		// hide dropdown when animation is done
		dropdown.classList.remove("dropdown-will-be-hidden", "show");

		// remove flip for toggle arrow
		toggle.classList.remove("arrow-flip");

		// dropdown toggle [aria-expanded="false"] to indicate that dropdown is closed
		toggle.setAttribute("aria-expanded", false);
	});
}

document.addEventListener("DOMContentLoaded", () => {
	$(document).on("click", ".dropdown-toggle", function (e) {
		const wrapper = this.closest(".dropdown-wrapper");
		const toggle = e.target;

		// return if dropdown toggle does not have wrapper with [.dropdown-wrapper] class
		if (!wrapper) return logger("error", "Dropdown toggle button should be inside '.dropdown-wrapper' wrapper");

		const dropdown = wrapper.querySelector(".dropdown");
		// return if there is not dropdown inside dropdown wrapper
		if (!dropdown) return logger("error", "Could not found '.dropdown' element inside '.dropdown-wrapper' wrapper");

		if (dropdown.classList.contains("show")) {
			hideDropdown(dropdown, toggle);
		} else {
			showDropdown(dropdown, toggle);
		}
	});
});
