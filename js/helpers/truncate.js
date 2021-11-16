import $ from "../utils/vent";
import logger from "../utils/logger";

document.addEventListener("DOMContentLoaded", () => {
	$(document).on("click", ".toggle-truncate", function (e) {
		let text;

		if (e.target.classList.contains("truncate")) {
			// if truncate class was added directly to the element
			text = e.target;
		} else {
			// if there is a target that should be truncated
			const target = e.target.getAttribute("data-truncation-target");
			if (target && document.querySelector(target)) {
				text = document.querySelector(target);
			} else {
				// if target was not found
				return logger(
					"error",
					"No target found for truncation, try to add or edit 'data-truncation-target' attribute of '.toggle-truncate'"
				);
			}
		}

		if (text.classList.contains("show-text")) {
			// remove class to truncate text
			text.classList.remove("show-text");

			logger("info", "Text is truncated", text);
		} else {
			// add class to show full text
			text.classList.add("show-text");

			logger("info", "Text is not truncated", text);
		}
	});
});
