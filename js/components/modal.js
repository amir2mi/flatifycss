import $ from "../utils/vent";
import logger from "../utils/logger";

/**
 * Show given modal and its backdrop
 * @param {Object} modal
 * @param {Object} modalBackdrop
 */
function showModal(modal, modalBackdrop) {
	if (modalBackdrop) {
		// there is a backdrop for modal, display it
		modalBackdrop.classList.add("show");
	} else {
		// otherwise create one
		let backdropElement = document.createElement("div");
		backdropElement.classList.add("backdrop-layer", "modal-backdrop", "show");
		document.body.appendChild(backdropElement);
	}

	// change aria-modal to true
	modal.setAttribute("aria-modal", true);

	// add [display: block] and animation class
	modal.classList.add("show");
}

/**
 * Hide given modal and its backdrop
 * @param {Object} modal
 * @param {Object} modalBackdrop
 */
function hideModal(modal, modalBackdrop) {
	// get all active modals
	const activeModals = document.querySelectorAll(".modal.show");

	// hide backdrop if there is xonly one active modal
	if (activeModals.length === 1) {
		modalBackdrop.classList.add("backdrop-will-be-removed");
	}
	modal.classList.add("modal-will-be-hidden");

	// after delay hide modal and its backdrop
	$(modal).once("animationend", (e) => {
		// removed hide animation class and show [display:none]
		// hide backdrop if there is only one active modal
		if (activeModals.length === 1) {
			modalBackdrop.classList.remove("show", "backdrop-will-be-removed");
		}
		modal.classList.remove("show", "modal-will-be-hidden");

		// change aria-modal to false
		modal.setAttribute("aria-modal", false);
	});
}

/**
 * Hide current active modals, if the backdrop is given hide it otherwise hide active backdrop
 * @param {Object} modalBackdrop
 */
function hideActiveModals(modalBackdrop) {
	const modals = document.querySelectorAll(".modal.show");
	if (!modals) return logger("warn", "There is no active modal in this page to hide", modal);

	modals.forEach((modal) => {
		// if modal is required repeat the show animation else hide it.
		if (modal.classList.contains("required")) {
			/**
			 * When two or more modals are open, they should not get the [.show] class removed at the same time,
			 * because number of active modals will be [0] and backdrop will be hidden, whilst there are still active modals.
			 * so the first setTimeout prevent all of them being removed at the same time.
			 */
			setTimeout(() => {
				modal.classList.remove("show");
				setTimeout(() => {
					modal.classList.add("show");
				}, 150);
			}, 150);
		} else {
			// hide modal and its backdrops, either the backdrop was the click target or find active backdrop.
			hideModal(modal, modalBackdrop || document.querySelector(".modal-backdrop.show"));
		}
	});
}

document.addEventListener("DOMContentLoaded", () => {
	$(document).on("click", ".open-modal", function (e) {
		let modal;
		const target = e.target.getAttribute("data-modal-target");
		const modalBackdrop = document.querySelector(".modal-backdrop");

		if (target && document.querySelector(target)) {
			modal = document.querySelector(target);
		} else {
			// if target was not found
			return logger(
				"error",
				"No target found for open modal button, try to add or edit 'data-modal-target' attribute of '.open-modal'"
			);
		}

		showModal(modal, modalBackdrop);
	});

	$(document).on("click", ".close-modal", function (e) {
		let modal;
		const target = e.target.getAttribute("data-modal-target");
		const modalBackdrop = document.querySelector(".modal-backdrop");

		if (target) {
			modal = document.querySelector(target);
			if (!modal)
				return logger(
					"error",
					"No target found for close modal, try to add or edit 'data-modal-target' attribute of '.close-modal'"
				);
		} else {
			modal = e.target.closest(".modal");
			if (!modal)
				return logger(
					"error",
					"Close modal button is not in a modal, you can set 'data-modal-target' attribute to specify which modal belongs to this button"
				);
		}

		hideModal(modal, modalBackdrop);
	});

	// if backdrop is clicked hide active modal.
	$(document).on("click", ".modal-backdrop", (e) => hideActiveModals(e.target));

	// if esc key is pressed hide active modal.
	document.onkeyup = (e) => e.key == "Escape" && hideActiveModals();
});
