import $ from "../utils/vent";
import logger from "../utils/logger";
// import * as Popper from "@popperjs/core";

/**
 * Create a dropdown with Popper JS
 * @param {Object} dropdown
 * @param {Object} toggle
 */
function createDropdown(dropdown, toggle) {
	// return if Popper was not loaded
	if (typeof Popper === "undefined") {
		return logger("error", "Dropdowns require Popper (https://popper.js.org)");
	}

	Popper.createPopper(toggle, dropdown, {
		placement: dropdown.getAttribute("data-dropdown-direction") || "bottom",
		modifiers: [
			{
				name: "computeStyles",
				options: {
					// because of show/hide animation it should be false
					gpuAcceleration: false,
				},
			},
			{
				name: "offset",
				options: {
					offset: [0, 20],
				},
			},
			{
				name: "arrow",
				options: {
					element: dropdown.querySelector(".pointer-arrow"),
					padding: 15,
				},
			},
		],
	});
}

/**
 * Show given dropdown
 * @param {Object} dropdown
 * @param {Object=} toggle
 */
function showDropdown(dropdown, toggle) {
	// find dropdown toggle if it is not set
	if (!toggle) {
		toggle = findDropdownToggle(dropdown);
	}

	// create dropdown with Popper or update position
	createDropdown(dropdown, toggle);

	// show dropdown
	dropdown.classList.add("show");

	// flip dropdown toggle arrow
	toggle.classList.add("arrow-flip", "active");

	// dropdown toggle [aria-expanded="true"] to indicate that dropdown is opened
	toggle.setAttribute("aria-expanded", true);
}

/**
 * Hide given dropdown
 * @param {Object} dropdown
 * @param {Object=} toggle
 */
function hideDropdown(dropdown, toggle) {
	// find dropdown toggle if it is not set
	if (!toggle) {
		toggle = findDropdownToggle(dropdown);
	}

	dropdown.classList.add("dropdown-will-be-hidden");

	$(dropdown).once("animationend", () => {
		// hide dropdown when animation is done
		dropdown.classList.remove("dropdown-will-be-hidden", "show");

		// remove flip for toggle arrow
		toggle.classList.remove("arrow-flip", "active");

		// dropdown toggle [aria-expanded="false"] to indicate that dropdown is closed
		toggle.setAttribute("aria-expanded", false);
	});
}

/**
 * Find given dropdown toggle button
 * @param {Object} dropdown
 * @returns
 */
function findDropdownToggle(dropdown) {
	// get dropdown wrapper if wrapper was not found return an error
	const wrapper = dropdown.closest(".dropdown-wrapper");
	if (!wrapper) return logger("error", "Dropdown should be inside '.dropdown-wrapper'");

	return wrapper.querySelector(".dropdown-toggle");
}

document.addEventListener("DOMContentLoaded", () => {
	// when dropdown toggle is clicked show or hide dropdown
	$(document).on("click", ".dropdown-toggle", function () {
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

	// close dropdown when it is clicked
	$(document).on("click", ".dropdown", function (e) {
		const dropdown = e.target.closest(".dropdown");
		const autoCloseType = dropdown.getAttribute("data-dropdown-auto-close");

		// hide if [data-dropdown-auto-close] attribute = outside || true || default.
		if (!autoCloseType || autoCloseType === "true" || autoCloseType === "inside") {
			hideDropdown(dropdown);
		}
	});

	// close dropdown when [.close-dropdown] button inside it is clicked (autoclose is false)
	$(document).on("click", ".close-dropdown", function (e) {
		const dropdown = e.target.closest(".dropdown");
		// return if dropdown toggle does not have wrapper with [.dropdown-wrapper] class
		if (!dropdown) return logger("error", "Dropdown close button should be inside '.dropdown-wrapper'");

		hideDropdown(dropdown);
	});

	// close active dropdowns when outside of the dropdown area is clicked, it respects [data-dropdown-auto-close] option.
	document.addEventListener("click", function (e) {
		// select active dropdowns which has [data-dropdown-auto-close] attribute = outside || true || default.
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

	// close active dropdowns when ESC key is pressed
	document.addEventListener("keyup", (e) => {
		if (e.key == "Escape") {
			const activeDropdowns = document.querySelectorAll(".dropdown.show");

			// if there is no active dropdown return
			if (!activeDropdowns) return;

			// hide all dropdowns
			activeDropdowns.forEach((dropdown) => hideDropdown(dropdown));
		}
	});
});
