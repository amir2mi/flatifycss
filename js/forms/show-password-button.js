import $ from "../utils/vent";
import logger from "../utils/logger";

document.addEventListener("DOMContentLoaded", () => {
	$(".input-wrapper").on("click", ".show-password-button", function (e) {
		// prevent focus to other inputs
		e.preventDefault();

		const wrapper = this.closest(".input-wrapper");
		// return if show password button does not have wrapper with [.input-wrapper] class
		if (!wrapper) {
			return logger("error", "Show password button is not in an '.input-wrapper'", this.parentElement);
		}

		const input = wrapper.querySelector("input");
		// return if show password button does not have wrapper with [.input-wrapper] class
		if (!input) {
			return logger(
				"error",
				"Show password button should be inside '.input-wrapper' with input type password",
				this.parentElement
			);
		}

		wrapper.classList.toggle("visible-password");
		input.type = wrapper.classList.contains("visible-password") ? "text" : "password";
	});
});
