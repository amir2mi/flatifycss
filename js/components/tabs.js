import config from "../config";
import $ from "../utils/vent";
import logger from "../utils/logger";
import { getChildIndex } from "../utils/dom";

function showTab(targetTab, clickedButton, currentButton) {
	// active tab button
	clickedButton.classList.add("active");
	clickedButton.setAttribute("aria-selected", true);

	// show tab panel
	targetTab.classList.add("show");

	/**
	 * Determine if the currently active tab button is after or before clicked tab button,
	 * if it is before, it is [.slide-right], otherwise, the user slid right [.slide-left]
	 */
	if (currentButton && getChildIndex(currentButton) < getChildIndex(clickedButton)) {
		config.isLTR ? targetTab.classList.add("slide-right") : targetTab.classList.add("slide-left");
	} else {
		config.isLTR ? targetTab.classList.add("slide-left") : targetTab.classList.add("slide-right");
	}
}

document.addEventListener("DOMContentLoaded", () => {
	$(document).on("click", ".tab-button", function (e) {
		const targetSelector = e.target.closest(".tab-button").getAttribute("data-tab-target");
		const target = document.querySelector(targetSelector);
		const currentActiveTab = target.closest(".tabs-content").querySelector(".tab-panel.show");
		const currentActiveButton = e.target.closest(".tabs-header").querySelector(".tab-button.active");

		// if tab button does not have target return an error
		if (!targetSelector) {
			return logger(
				"error",
				"Tab button should have 'data-tab-target' HTML attribute to specify the target tab panel"
			);
		}

		// if provided target does not exist return an error
		if (!target) {
			return logger("error", "Provided target for tab button does not exist on this page");
		}

		// return if the tab button is already active and target tab panel is shown
		if (this.classList.contains("active") && target.classList.contains("show")) return;

		// remove active class for tab button that has active tab panel
		if (currentActiveButton) {
			currentActiveButton.classList.remove("active");
			currentActiveButton.setAttribute("aria-selected", false);
		}

		// if there is an active tab hide it then show clicked tab, or just show requested tab
		if (currentActiveTab) {
			// remove old swipe direction and add new based on clicked tab button index
			currentActiveTab.classList.remove("slide-left", "slide-right");
			if (currentActiveButton && getChildIndex(currentActiveButton) < getChildIndex(this)) {
				config.isLTR
					? currentActiveTab.classList.add("slide-left")
					: currentActiveTab.classList.add("slide-right");
			} else {
				config.isLTR
					? currentActiveTab.classList.add("slide-right")
					: currentActiveTab.classList.add("slide-left");
			}

			// add hide animation class
			currentActiveTab.classList.add("tab-will-be-hidden");

			// hide current active tab after animation
			$(currentActiveTab).once("animationend", () => {
				currentActiveTab.classList.remove("show", "tab-will-be-hidden", "slide-left", "slide-right");

				showTab(target, this, currentActiveButton);
			});
		} else {
			showTab(target, this, currentActiveButton);
		}
	});
});
