import $ from "../utils/vent";
import logger from "../utils/logger";

/**
 * Open given accordion item and if the accordion is not "expendable", close others
 * @param {Object} item
 */
function openAccordionItem(item) {
  // get the [.accordion] which wraps accordion items
  const accordion = item.closest(".accordion");
  if (!accordion) return logger("error", "Accordion item is not inside '.accordion'");

  // "expendable" means there can be more than one active accordion item
  // if it is not "expendable", first close all accordion items inside parent
  if (!accordion.classList.contains("expendable")) {
    const items = accordion.querySelectorAll(".accordion-item");
    if (!items) return logger("error", "There is no accordion item inside '.accordion'");

    // hide each item
    items.forEach((item) => {
      closeAccordionItem(item);
    });
  }

  const toggle = item.querySelector(".accordion-toggle");
  const collapse = item.querySelector(".accordion-collapse");
  const addButton = toggle.querySelector(".add-button");

  item.classList.add("active");
  addButton && addButton.classList.add("active");
  collapse && collapse.classList.add("modal-will-be-shown");
  collapse && collapse.classList.remove("modal-will-be-hidden");
  toggle && toggle.setAttribute("aria-expanded", "true");

  // set accordion item body height to accordion-collapse
  const height = item.querySelector(".accordion-body").offsetHeight;
  collapse.style.height = `${height}px`;
}

/**
 * Close given accordion item
 * @param {Object} item
 */
function closeAccordionItem(item) {
  const toggle = item.querySelector(".accordion-toggle");
  const collapse = item.querySelector(".accordion-collapse");
  const body = item.querySelector(".accordion-body");
  const addButton = toggle.querySelector(".add-button");

  collapse && collapse.classList.add("modal-will-be-hidden");
  collapse && collapse.classList.remove("modal-will-be-shown");

  $(body).once("animationend", () => {
    if (collapse.classList.contains("modal-will-be-shown")) return;

    collapse.style.height = 0;
    collapse && collapse.classList.remove("modal-will-be-hidden");

    item.classList.remove("active");
    addButton && addButton.classList.remove("active");
    toggle && toggle.setAttribute("aria-expanded", "false");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  $(document).on("click", ".accordion-toggle", function () {
    // get the current accordion item
    const accordionItem = this.closest(".accordion-item");
    if (!accordionItem) return logger("error", "Accordion toggle button should be inside '.accordion-item'");

    if (accordionItem.classList.contains("active")) {
      closeAccordionItem(accordionItem);
    } else {
      openAccordionItem(accordionItem);
    }
  });
});
