import $ from "../utils/vent";
import logger from "../utils/logger";

document.addEventListener("DOMContentLoaded", () => {
	$(".input-wrapper").on("click", ".show-password-button", function (e) {
		// prevent focus to other inputs
		e.preventDefault();

		const wrapper = this.closest(".input-wrapper");

		if (wrapper.classList.contains("visible-password")) {
			// remove visible class for eye icon
			wrapper.classList.remove("visible-password");
			// change input type to password
			const input = wrapper.querySelector("input");
			if (input) input.type = "password";
		} else {
			// add visible class for eye icon
			wrapper.classList.add("visible-password");
			// change input type to text
			const input = wrapper.querySelector("input");
			if (input) input.type = "text";
		}
	});
});
