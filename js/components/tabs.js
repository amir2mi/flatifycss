import config from "../config";
import $ from "../utils/vent";
import logger from "../utils/logger";
import { getChildIndex } from "../utils/dom";

/**
 * Hide all active tabs based on given tab button and tab panel
 * @param {Object} targetTab The tab panel that should be shown
 * @param {Object} clickedButton The tab button that is clicked on
 */
function hideActiveTabs(targetTab, clickedButton) {
	const tabButtons = clickedButton.closest(".tabs-header").querySelectorAll(".tab-button");
	if (tabButtons) {
		tabButtons.forEach((tabButton) => {
			tabButton.classList.remove("active");
		});
	}

	const tabPanels = targetTab.closest(".tabs-content").querySelectorAll(".tab-panel");
	if (tabPanels) {
		tabPanels.forEach((tabPanel) => {
			tabPanel.classList.remove("show", "tab-will-be-hidden", "slide-left", "slide-right");
		});
	}
}

/**
 * Show given tab
 * @param {Object} targetTab The tab panel that should be shown
 * @param {Object} clickedButton The tab button that is clicked on
 * @param {Object} currentButton The currently active tab button that should be deactivated
 */
function showTab(targetTab, clickedButton, currentButton) {
	/**
	 * Sometimes before the animation end event,
	 * users might click on another tab button, so the current tab is still active,
	 * which means we will have more than one active tab and they should be deactivated.
	 */
	hideActiveTabs(targetTab, clickedButton);

	// active tab button
	clickedButton.classList.add("active");
	clickedButton.setAttribute("aria-selected", true);

	// show tab panel
	targetTab.classList.add("show");

	/**
	 * Determine if the currently active tab button is after or before clicked tab button
	 * and based on this fact add slide animation classes.
	 */
	if (currentButton && getChildIndex(currentButton) < getChildIndex(clickedButton)) {
		config.isLTR ? targetTab.classList.add("slide-right") : targetTab.classList.add("slide-left");
	} else {
		config.isLTR ? targetTab.classList.add("slide-left") : targetTab.classList.add("slide-right");
	}
}

document.addEventListener("DOMContentLoaded", () => {
	$(document).on("click", ".tab-button", function (e) {
		/**
		 * Target panel selector should be defined for tab button,
		 * either with [data-tab-target] or [aria-controls] HTML attribute
		 */
		const targetSelector =
			e.target.closest(".tab-button").getAttribute("data-tab-target") ||
			"#" + e.target.closest(".tab-button").getAttribute("aria-controls");
		// if tab button does not have target return an error
		if ((targetSelector && targetSelector === "#null") || !targetSelector) {
			return logger(
				"error",
				"Tab button should have 'data-tab-target' or 'aria-controls' HTML attribute to specify the target tab panel"
			);
		}

		const targetPanel = document.querySelector(targetSelector);
		// if provided target does not exist return an error
		if (!targetPanel) {
			return logger("error", "Provided target for tab button does not exist on this page");
		}

		// return if the tab button is already active and target tab panel is shown
		if (this.classList.contains("active") && targetPanel.classList.contains("show")) return;

		// get current active tab with its button
		const currentActiveTab = targetPanel.closest(".tabs-content").querySelector(".tab-panel.show");
		const currentActiveButton = e.target.closest(".tabs-header").querySelector(".tab-button.active");

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

				showTab(targetPanel, this, currentActiveButton);
			});
		} else {
			showTab(targetPanel, this, currentActiveButton);
		}
	});
});
