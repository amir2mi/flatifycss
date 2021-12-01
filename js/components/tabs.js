import $ from "../utils/vent";
import logger from "../utils/logger";
import { getChildIndex } from "../utils/dom";

document.addEventListener("DOMContentLoaded", () => {
	$(document).on("click", ".tab-button", function (e) {
		const targetSelector = e.target.closest(".tab-button").getAttribute("data-tab-target");
		const target = document.querySelector(targetSelector);
		const currentActiveTab = target.closest(".tabs-content").querySelector(".tab-pane.show");
		const currentActiveButton = e.target.closest(".tabs-header").querySelector(".tab-button.active");

		// if tab button does not have target return an error
		if (!targetSelector) {
			return logger(
				"error",
				"Tab button should have 'data-tab-target' HTML attribute to specify the target tab pane"
			);
		}

		// if provided target does not exist return an error
		if (!target) {
			return logger("error", "Provided target for tab button does not exist on this page");
		}

		// return if the tab button is already active and target tab pane is shown
		if (this.classList.contains("active") && target.classList.contains("show")) return;

		// remove active class for tab button that has active tab pane
		if (currentActiveButton) {
			currentActiveButton.classList.remove("active");
		}

		// hide current active tab inside [.tabs-content] element
		if (currentActiveTab) {
			// add hide animation class
			currentActiveTab.classList.add("tab-will-be-hidden");

			// hide current active tab after animation
			$(currentActiveTab).once("animationend", () => {
				currentActiveTab.classList.remove("show", "tab-will-be-hidden", "slide-left", "slide-right");

				this.classList.add("active");
				target.classList.add("show");

				/**
				 * Determine if the currently active tab button is after or before clicked tab button,
				 * if it is before, it is [.slide-left], otherwise, the user slid right [.slide-right]
				 */
				if (getChildIndex(currentActiveButton) < getChildIndex(this)) {
					target.classList.add("slide-left");
				} else {
					target.classList.add("slide-right");
				}
			});
		}
	});
});
