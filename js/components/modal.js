import $ from "../utils/vent";
import logger from "../utils/logger";

document.addEventListener("DOMContentLoaded", () => {
	$(document).on("click", ".open-modal", function (e) {
		let modal;
		const target = e.target.getAttribute("data-modal-target");
		const backdrop = document.querySelector(".modal-backdrop");

		if (target && document.querySelector(target)) {
			modal = document.querySelector(target);
		} else {
			// if target was not found
			return logger(
				"error",
				"No target found for modal, try add or edit 'data-modal-target' attribute of '.open-modal'"
			);
		}

		if (backdrop) {
			// there is a backdrop for modal, display it
			backdrop.classList.add("show");

			logger("info", "Modal backdrop is displayed", modal);
		} else {
			// otherwise create one
			let backdropElement = document.createElement("div");
			backdropElement.classList.add("backdrop-layer", "modal-backdrop", "show");
			document.body.appendChild(backdropElement);

			logger("info", "Modal backdrop is created and shown", modal);
		}

		modal.classList.add("show");

		logger("info", "Modal is shown", modal);
	});

	$(document).on("click", ".close-modal", function (e) {
		let modal;
		const target = e.target.getAttribute("data-modal-target");
		const modalBackdrop = document.querySelector(".modal-backdrop");

		if (target) {
			modal = document.querySelector(target);
			if (!modal) return;
		} else {
			modal = e.target.closest(".modal");
			if (!modal) return;
		}

		modalBackdrop.classList.add("backdrop-will-be-removed");
		modal.classList.add("modal-will-be-removed");

		// after delay hide modal and its backdrop
		$(modal).once("animationend", (e) => {
			modalBackdrop.classList.remove("show", "backdrop-will-be-removed");
			modal.classList.remove("show", "modal-will-be-removed");
		});
	});
});
