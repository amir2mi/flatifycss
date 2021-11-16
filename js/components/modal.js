import $ from "../utils/vent";
import logger from "../utils/logger";

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

function hideModal(modal, modalBackdrop) {
	modalBackdrop.classList.add("backdrop-will-be-removed");
	modal.classList.add("modal-will-be-removed");

	// after delay hide modal and its backdrop
	$(modal).once("animationend", (e) => {
		// removed hide animation class and show [display:none]
		modalBackdrop.classList.remove("show", "backdrop-will-be-removed");
		modal.classList.remove("show", "modal-will-be-removed");

		// change aria-modal to false
		modal.setAttribute("aria-modal", false);
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

	$(document).on("click", ".modal-backdrop", function (e) {
		const modal = document.querySelector(".modal.show");
		if (!modal) return logger("warn", "There is no modal in this page to hide", modal);

		// if modal is required repeat the show animation else hide it.
		if (modal.classList.contains("required")) {
			modal.classList.remove("show");
			setTimeout(() => {
				modal.classList.add("show");
			}, 150);
		} else {
			hideModal(modal, e.target);
		}
	});
});
