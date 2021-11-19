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

function findDropdownToggle(dropdown) {
	// get dropdown wrapper if wrapper was not found return an error
	const wrapper = dropdown.closest(".dropdown-wrapper");
	if (!wrapper) return logger("error", "Dropdown should be inside '.dropdown-wrapper'");

	return wrapper.querySelector(".dropdown-toggle");
}

document.addEventListener("DOMContentLoaded", () => {
	// when dropdown toggle is clicked show or hide dropdown
	$(document).on("click", ".dropdown-toggle", function (e) {
		const wrapper = this.closest(".dropdown-wrapper");

		// return if dropdown toggle does not have wrapper with [.dropdown-wrapper] class
		if (!wrapper) return logger("error", "Dropdown toggle button should be inside '.dropdown-wrapper'");

		const dropdown = wrapper.querySelector(".dropdown");
		// return if there is not dropdown inside dropdown wrapper
		if (!dropdown) return logger("error", "Could not found '.dropdown' element inside '.dropdown-wrapper'");

		if (dropdown.classList.contains("show")) {
			hideDropdown(dropdown, this);
		} else {
			showDropdown(dropdown, this);
		}
	});

	// close active dropdowns when outside of the dropdown area is clicked.
	$(document).on("click", function (e) {
		// select active dropdowns which has [data-dropdown-auto-close] = outside || true || default.
		const activeDropdowns = document.querySelectorAll(
			".dropdown.show:not([data-dropdown-auto-close]), .dropdown.show[data-dropdown-auto-close='outside'], .dropdown.show[data-dropdown-auto-close='true']"
		);

		// if there is no active dropdown return
		if (!activeDropdowns) return;

		activeDropdowns.forEach((dropdown) => {
			const toggle = findDropdownToggle(dropdown);

			/** hide dropdown if:
			 * 1- the clicked target IS NOT dropdown itself.
			 * 2- the dropdown toggle button IS NOT the clicked target.
			 */
			if (e.target.closest(".dropdown") !== dropdown && e.target !== toggle) {
				hideDropdown(dropdown, toggle);
			}
		});
	});
});
