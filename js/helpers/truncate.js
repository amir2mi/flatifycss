import $ from "../utils/vent";
import logger from "../utils/logger";

document.addEventListener("DOMContentLoaded", () => {
  $(document).on("click", ".toggle-truncate", function (e) {
    if (e.target.classList.contains("truncate")) {
      // if truncate class was added directly to the element
      e.target.classList.toggle("show-text");
    } else {
      // if there is a target that should be truncated
      const target = e.target.getAttribute("data-truncation-target");
      const texts = document.querySelectorAll(target);
      
      if (!texts.length) return logger("error", `No target found for '${target}' to be truncated`);
      texts.forEach((text) => text.classList.toggle("show-text"));
    }
  });
});
