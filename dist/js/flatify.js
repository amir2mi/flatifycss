"use strict";

/******/
(function () {
  // webpackBootstrap

  /******/
  "use strict";
  /******/

  var __webpack_modules__ = {
    /***/
    24:
    /***/
    function (__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {
      /* harmony import */
      var _utils_vent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(641);
      /* harmony import */


      var _utils_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(235);
      /**
       * Open given accordion item and if the accordion is not "expendable", close others
       * @param {Object} item
       */


      function openAccordionItem(item) {
        // get the [.accordion] which wraps accordion items
        const accordion = item.closest(".accordion");
        if (!accordion) return (0, _utils_logger__WEBPACK_IMPORTED_MODULE_1__
        /* ["default"] */
        .Z)("error", "Accordion item is not inside '.accordion'"); // "expendable" means there can be more than one active accordion item
        // if it is not "expendable", first close all accordion items inside parent

        if (!accordion.classList.contains("expendable")) {
          const items = accordion.querySelectorAll(".accordion-item");
          if (!items) return (0, _utils_logger__WEBPACK_IMPORTED_MODULE_1__
          /* ["default"] */
          .Z)("error", "There is no accordion item inside '.accordion'"); // hide each item

          items.forEach(item => {
            closeAccordionItem(item);
          });
        }

        const header = item.querySelector(".accordion-header");
        const toggle = item.querySelector(".accordion-toggle");
        const collapse = item.querySelector(".accordion-collapse");
        const addButton = toggle.querySelector(".add-button");
        item.classList.add("active");
        header.classList.add("active");
        addButton && addButton.classList.add("active");
        collapse && collapse.classList.add("accordion-will-be-shown");
        collapse && collapse.classList.remove("accordion-will-be-hidden");
        toggle && toggle.setAttribute("aria-expanded", "true"); // set accordion item body height to accordion-collapse then remove it

        const height = item.querySelector(".accordion-body").offsetHeight;
        requestAnimationFrame(function () {
          collapse.style.height = 0;
          requestAnimationFrame(function () {
            collapse.style.height = "".concat(height, "px");
          });
        });
        setTimeout(() => {
          collapse.style.removeProperty("height");
        }, 200);
      }
      /**
       * Close given accordion item
       * @param {Object} item
       */


      function closeAccordionItem(item) {
        const header = item.querySelector(".accordion-header");
        const toggle = item.querySelector(".accordion-toggle");
        const collapse = item.querySelector(".accordion-collapse");
        const body = item.querySelector(".accordion-body");
        const addButton = toggle.querySelector(".add-button");
        collapse && collapse.classList.add("accordion-will-be-hidden");
        collapse && collapse.classList.remove("accordion-will-be-shown");
        (0, _utils_vent__WEBPACK_IMPORTED_MODULE_0__
        /* ["default"] */
        .Z)(body).once("animationend", () => {
          if (collapse.classList.contains("accordion-will-be-shown")) return;
          const height = item.querySelector(".accordion-body").offsetHeight;
          requestAnimationFrame(function () {
            collapse.style.height = "".concat(height, "px");
            requestAnimationFrame(function () {
              collapse.style.height = 0;
            });
          });
          setTimeout(() => {
            collapse && collapse.classList.remove("accordion-will-be-hidden");
            addButton && addButton.classList.remove("active");
            header && header.classList.remove("active");
            toggle && toggle.setAttribute("aria-expanded", "false");
            item.classList.remove("active");
          }, 200);
        });
      }

      document.addEventListener("DOMContentLoaded", () => {
        (0, _utils_vent__WEBPACK_IMPORTED_MODULE_0__
        /* ["default"] */
        .Z)(document).on("click", ".accordion-toggle", function () {
          // get the current accordion item
          const accordionItem = this.closest(".accordion-item");
          if (!accordionItem) return (0, _utils_logger__WEBPACK_IMPORTED_MODULE_1__
          /* ["default"] */
          .Z)("error", "Accordion toggle button should be inside '.accordion-item'");

          if (accordionItem.classList.contains("active")) {
            closeAccordionItem(accordionItem);
          } else {
            openAccordionItem(accordionItem);
          }
        });
      });
      /***/
    },

    /***/
    2:
    /***/
    function (__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {
      /* harmony import */
      var _utils_vent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(641);
      /* harmony import */


      var _utils_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(235);

      document.addEventListener("DOMContentLoaded", () => {
        // when close button is clicked and have [.alert] wrapper, remove alert.
        (0, _utils_vent__WEBPACK_IMPORTED_MODULE_0__
        /* ["default"] */
        .Z)(document).on("click", ".close-button", function () {
          const wrapper = this.closest(".alert"); // return if close button does not have wrapper with [.alert] class

          if (!wrapper) return (0, _utils_logger__WEBPACK_IMPORTED_MODULE_1__
          /* ["default"] */
          .Z)("error", "Alert close button should be inside '.alert'");
          ; // add animation class to remove the alert

          wrapper.classList.add("alert-will-be-removed"); // after delay remove alert from DOM

          (0, _utils_vent__WEBPACK_IMPORTED_MODULE_0__
          /* ["default"] */
          .Z)(wrapper).once("animationend", e => {
            wrapper.remove();
          });
        });
      });
      /***/
    },

    /***/
    82:
    /***/
    function (__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {
      /* harmony import */
      var _utils_vent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(641);
      /* harmony import */


      var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(162);
      /* harmony import */


      var _utils_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(235); // import * as Popper from "@popperjs/core";

      /**
       * Create a dropdown with Popper JS
       * @param {Object} dropdown
       * @param {Object} toggle
       */


      function createDropdown(dropdown, toggle) {
        // return if Popper was not loaded
        if (typeof Popper === "undefined") {
          return (0, _utils_logger__WEBPACK_IMPORTED_MODULE_2__
          /* ["default"] */
          .Z)("error", "Dropdowns require Popper (https://popper.js.org)");
        }

        let offset = _config__WEBPACK_IMPORTED_MODULE_1__
        /* .dropdownOffset */
        .q5;

        if (dropdown.closest(".navbar")) {
          offset = _config__WEBPACK_IMPORTED_MODULE_1__
          /* .navDropdownOffset */
          .FL;
        }

        if (dropdown.closest(".popover")) {
          offset = _config__WEBPACK_IMPORTED_MODULE_1__
          /* .popoverOffset */
          .pq;
        }

        Popper.createPopper(toggle, dropdown, {
          placement: dropdown.getAttribute("data-dropdown-direction") || "bottom",
          modifiers: [{
            name: "computeStyles",
            options: {
              // because of show/hide animation it should be false
              gpuAcceleration: false
            }
          }, {
            name: "offset",
            options: {
              offset: offset
            }
          }, {
            name: "arrow",
            options: {
              element: dropdown.querySelector(".pointer-arrow"),
              padding: 15
            }
          }]
        });
      }
      /**
       * Show given dropdown
       * @param {Object} dropdown
       * @param {Object=} toggle
       */


      function showDropdown(dropdown, toggle) {
        // find dropdown toggle if it is not set
        if (!toggle) {
          toggle = findDropdownToggle(dropdown);
        } // create dropdown with Popper or update position


        createDropdown(dropdown, toggle); // show dropdown

        dropdown.classList.add("show"); // flip dropdown toggle arrow and add active state

        toggle.classList.add("arrow-flip", "active"); // dropdown toggle [aria-expanded="true"] to indicate that dropdown is opened

        toggle.setAttribute("aria-expanded", true);
      }
      /**
       * Hide given dropdown
       * @param {Object} dropdown
       * @param {Object=} toggle
       */


      function hideDropdown(dropdown, toggle) {
        // find dropdown toggle if it is not set
        if (!toggle) {
          toggle = findDropdownToggle(dropdown);
        }

        dropdown.classList.add("dropdown-will-be-hidden");
        (0, _utils_vent__WEBPACK_IMPORTED_MODULE_0__
        /* ["default"] */
        .Z)(dropdown).once("animationend", () => {
          // hide dropdown when animation is done
          dropdown.classList.remove("dropdown-will-be-hidden", "show"); // remove flip for toggle arrow and remove active state

          toggle.classList.remove("arrow-flip", "active"); // dropdown toggle [aria-expanded="false"] to indicate that dropdown is closed

          toggle.setAttribute("aria-expanded", false);
        });
      }
      /**
       * Find given dropdown toggle button
       * @param {Object} dropdown
       * @returns
       */


      function findDropdownToggle(dropdown) {
        // get dropdown wrapper if wrapper was not found return an error
        const wrapper = dropdown.closest(".dropdown-wrapper");
        if (!wrapper) return (0, _utils_logger__WEBPACK_IMPORTED_MODULE_2__
        /* ["default"] */
        .Z)("error", "Dropdown should be inside '.dropdown-wrapper'");
        return wrapper.querySelector(".dropdown-toggle");
      }

      document.addEventListener("DOMContentLoaded", () => {
        // when dropdown toggle is clicked show or hide dropdown
        (0, _utils_vent__WEBPACK_IMPORTED_MODULE_0__
        /* ["default"] */
        .Z)(document).on("click", ".dropdown-toggle", function () {
          const wrapper = this.closest(".dropdown-wrapper"); // return if dropdown toggle does not have wrapper with [.dropdown-wrapper] class

          if (!wrapper) return (0, _utils_logger__WEBPACK_IMPORTED_MODULE_2__
          /* ["default"] */
          .Z)("error", "Dropdown toggle button should be inside '.dropdown-wrapper'");
          const dropdown = wrapper.querySelector(".dropdown"); // return if there is not dropdown inside dropdown wrapper

          if (!dropdown) return (0, _utils_logger__WEBPACK_IMPORTED_MODULE_2__
          /* ["default"] */
          .Z)("error", "Could not found '.dropdown' element inside '.dropdown-wrapper'");

          if (dropdown.classList.contains("show")) {
            hideDropdown(dropdown, this);
          } else {
            showDropdown(dropdown, this);
          }
        }); // close dropdown when it is clicked

        (0, _utils_vent__WEBPACK_IMPORTED_MODULE_0__
        /* ["default"] */
        .Z)(document).on("click", ".dropdown", function (e) {
          const dropdown = e.target.closest(".dropdown");
          const autoCloseType = dropdown.getAttribute("data-dropdown-auto-close"); // hide if [data-dropdown-auto-close] attribute = outside || true || default.

          if (!autoCloseType || autoCloseType === "true" || autoCloseType === "inside") {
            hideDropdown(dropdown);
          }
        }); // close dropdown when [.close-dropdown] button inside it is clicked (autoclose is false)

        (0, _utils_vent__WEBPACK_IMPORTED_MODULE_0__
        /* ["default"] */
        .Z)(document).on("click", ".close-dropdown", function (e) {
          const dropdown = e.target.closest(".dropdown"); // return if dropdown toggle does not have wrapper with [.dropdown-wrapper] class

          if (!dropdown) return (0, _utils_logger__WEBPACK_IMPORTED_MODULE_2__
          /* ["default"] */
          .Z)("error", "Dropdown close button should be inside '.dropdown-wrapper'");
          hideDropdown(dropdown);
        }); // close active dropdowns when outside of the dropdown area is clicked, it respects [data-dropdown-auto-close] option.

        document.addEventListener("click", function (e) {
          // select active dropdowns which has [data-dropdown-auto-close] attribute = outside || true || default.
          const activeDropdowns = document.querySelectorAll(".dropdown.show:not([data-dropdown-auto-close]), .dropdown.show[data-dropdown-auto-close='outside'], .dropdown.show[data-dropdown-auto-close='true']"); // if there is no active dropdown return

          if (!activeDropdowns) return;
          activeDropdowns.forEach(dropdown => {
            const toggle = findDropdownToggle(dropdown);
            /** hide dropdown if:
             * 1- the clicked target IS NOT dropdown itself.
             * 2- the dropdown toggle button IS NOT the clicked target.
             */

            if (e.target.closest(".dropdown") !== dropdown && e.target !== toggle) {
              hideDropdown(dropdown, toggle);
            }
          });
        }); // close active dropdowns when ESC key is pressed

        document.addEventListener("keyup", e => {
          if (e.key == "Escape") {
            const activeDropdowns = document.querySelectorAll(".dropdown.show"); // if there is no active dropdown return

            if (!activeDropdowns) return; // hide all dropdowns

            activeDropdowns.forEach(dropdown => hideDropdown(dropdown));
          }
        });
      });
      /***/
    },

    /***/
    619:
    /***/
    function (__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {
      /* harmony import */
      var _utils_vent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(641);
      /* harmony import */


      var _utils_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(235);
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
        } // change aria-modal to true


        modal.setAttribute("aria-modal", true); // add [display: block] and animation class

        modal.classList.add("show");
      }
      /**
       * Hide given modal and its backdrop
       * @param {Object} modal
       * @param {Object} modalBackdrop
       */


      function hideModal(modal, modalBackdrop) {
        // get all active modals
        const activeModals = document.querySelectorAll(".modal.show"); // hide backdrop if there is xonly one active modal

        if (activeModals.length === 1) {
          modalBackdrop.classList.add("backdrop-will-be-removed");
        }

        modal.classList.add("modal-will-be-hidden"); // after delay hide modal and its backdrop

        (0, _utils_vent__WEBPACK_IMPORTED_MODULE_0__
        /* ["default"] */
        .Z)(modal).once("animationend", e => {
          // removed hide animation class and show [display:none]
          // hide backdrop if there is only one active modal
          if (activeModals.length === 1) {
            modalBackdrop.classList.remove("show", "backdrop-will-be-removed");
          }

          modal.classList.remove("show", "modal-will-be-hidden"); // change aria-modal to false

          modal.setAttribute("aria-modal", false);
        });
      }
      /**
       * Hide current active modals, if the backdrop is given hide it otherwise hide active backdrop
       * @param {Object} modalBackdrop
       */


      function hideActiveModals(modalBackdrop) {
        const modals = document.querySelectorAll(".modal.show");
        if (!modals) return (0, _utils_logger__WEBPACK_IMPORTED_MODULE_1__
        /* ["default"] */
        .Z)("warn", "There is no active modal in this page to hide", modal);
        modals.forEach(modal => {
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
        // when open modal is clicked show related modal
        (0, _utils_vent__WEBPACK_IMPORTED_MODULE_0__
        /* ["default"] */
        .Z)(document).on("click", ".open-modal", function (e) {
          let modal;
          const target = e.target.getAttribute("data-modal-target");
          const modalBackdrop = document.querySelector(".modal-backdrop");

          if (target && document.querySelector(target)) {
            modal = document.querySelector(target);
          } else {
            // if target was not found
            return (0, _utils_logger__WEBPACK_IMPORTED_MODULE_1__
            /* ["default"] */
            .Z)("error", "No target found for open modal button, try to add or edit 'data-modal-target' attribute of '.open-modal'");
          }

          showModal(modal, modalBackdrop);
        }); // when close modal is clicked hide related modal

        (0, _utils_vent__WEBPACK_IMPORTED_MODULE_0__
        /* ["default"] */
        .Z)(document).on("click", ".close-modal", function (e) {
          let modal;
          const target = e.target.getAttribute("data-modal-target");
          const modalBackdrop = document.querySelector(".modal-backdrop");

          if (target) {
            modal = document.querySelector(target);
            if (!modal) return (0, _utils_logger__WEBPACK_IMPORTED_MODULE_1__
            /* ["default"] */
            .Z)("error", "No target found for close modal, try to add or edit 'data-modal-target' attribute of '.close-modal'");
          } else {
            modal = e.target.closest(".modal");
            if (!modal) return (0, _utils_logger__WEBPACK_IMPORTED_MODULE_1__
            /* ["default"] */
            .Z)("error", "Close modal button is not in a modal, you can set 'data-modal-target' attribute to specify which modal belongs to this button");
          }

          hideModal(modal, modalBackdrop);
        }); // if backdrop is clicked hide active modals.

        (0, _utils_vent__WEBPACK_IMPORTED_MODULE_0__
        /* ["default"] */
        .Z)(document).on("click", ".modal-backdrop", e => hideActiveModals(e.target)); // if ESC key is pressed hide active modals.

        document.addEventListener("keyup", e => e.key == "Escape" && hideActiveModals());
      });
      /***/
    },

    /***/
    752:
    /***/
    function (__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {
      /* harmony import */
      var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(162);
      /* harmony import */


      var _utils_vent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(641);
      /* harmony import */


      var _utils_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(235);
      /* harmony import */


      var _utils_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(238);
      /**
       * Hide all active tabs based on given tab button and tab panel
       * @param {Object} targetTab The tab panel that should be shown
       * @param {Object} clickedButton The tab button that is clicked on
       */


      function hideActiveTabs(targetTab, clickedButton) {
        const tabButtons = clickedButton.closest(".tabs-header").querySelectorAll(".tab-button");

        if (tabButtons) {
          tabButtons.forEach(tabButton => {
            tabButton.classList.remove("active");
          });
        }

        const tabPanels = targetTab.closest(".tabs-content").querySelectorAll(".tab-panel");

        if (tabPanels) {
          tabPanels.forEach(tabPanel => {
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
        hideActiveTabs(targetTab, clickedButton); // active tab button

        clickedButton.classList.add("active");
        clickedButton.setAttribute("aria-selected", true); // show tab panel

        targetTab.classList.add("show");
        /**
         * Determine if the currently active tab button is after or before clicked tab button
         * and based on this fact add slide animation classes.
         */

        if (currentButton && (0, _utils_dom__WEBPACK_IMPORTED_MODULE_3__
        /* .getChildIndex */
        .o)(currentButton) < (0, _utils_dom__WEBPACK_IMPORTED_MODULE_3__
        /* .getChildIndex */
        .o)(clickedButton)) {
          targetTab.classList.add("slide-right");
        } else {
          targetTab.classList.add("slide-left");
        }
      }

      document.addEventListener("DOMContentLoaded", () => {
        (0, _utils_vent__WEBPACK_IMPORTED_MODULE_1__
        /* ["default"] */
        .Z)(document).on("click", ".tab-button", function (e) {
          /**
           * Target panel selector should be defined for tab button,
           * either with [data-tab-target] or [aria-controls] HTML attribute
           */
          const targetSelector = e.target.closest(".tab-button").getAttribute("data-tab-target") || "#" + e.target.closest(".tab-button").getAttribute("aria-controls"); // if tab button does not have target return an error

          if (targetSelector && targetSelector === "#null" || !targetSelector) {
            return (0, _utils_logger__WEBPACK_IMPORTED_MODULE_2__
            /* ["default"] */
            .Z)("error", "Tab button should have 'data-tab-target' or 'aria-controls' HTML attribute to specify the target tab panel");
          }

          const targetPanel = document.querySelector(targetSelector); // if provided target does not exist return an error

          if (!targetPanel) {
            return (0, _utils_logger__WEBPACK_IMPORTED_MODULE_2__
            /* ["default"] */
            .Z)("error", "Provided target for tab button does not exist on this page");
          } // return if the tab button is already active and target tab panel is shown


          if (this.classList.contains("active") && targetPanel.classList.contains("show")) return; // get current active tab with its button

          const currentActiveTab = targetPanel.closest(".tabs-content").querySelector(".tab-panel.show");
          const currentActiveButton = e.target.closest(".tabs-header").querySelector(".tab-button.active"); // remove active class for tab button that has active tab panel

          if (currentActiveButton) {
            currentActiveButton.classList.remove("active");
            currentActiveButton.setAttribute("aria-selected", false);
          } // if there is an active tab hide it then show clicked tab, or just show requested tab


          if (currentActiveTab) {
            // remove old swipe direction and add new based on clicked tab button index
            currentActiveTab.classList.remove("slide-left", "slide-right");

            if (currentActiveButton && (0, _utils_dom__WEBPACK_IMPORTED_MODULE_3__
            /* .getChildIndex */
            .o)(currentActiveButton) < (0, _utils_dom__WEBPACK_IMPORTED_MODULE_3__
            /* .getChildIndex */
            .o)(this)) {
              currentActiveTab.classList.add("slide-left");
            } else {
              currentActiveTab.classList.add("slide-right");
            } // add hide animation class


            currentActiveTab.classList.add("tab-will-be-hidden"); // hide current active tab after animation

            (0, _utils_vent__WEBPACK_IMPORTED_MODULE_1__
            /* ["default"] */
            .Z)(currentActiveTab).once("animationend", () => {
              currentActiveTab.classList.remove("show", "tab-will-be-hidden", "slide-left", "slide-right");
              showTab(targetPanel, this, currentActiveButton);
            });
          } else {
            showTab(targetPanel, this, currentActiveButton);
          }
        });
      });
      /***/
    },

    /***/
    891:
    /***/
    function (__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {
      /* harmony import */
      var _components_accordion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
      /* harmony import */


      var _components_alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
      /* harmony import */


      var _components_dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82);
      /* harmony import */


      var _components_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(619);
      /* harmony import */


      var _components_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(752);
      /* harmony import */


      var _forms_show_password_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(277);
      /* harmony import */


      var _helpers_truncate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(291);
      /*!
       * FlatifyCSS version 1.3.2
       * Modern flat design framework for the web — inspired by Duolingo design system.
       * Copyright 2021-2022 The FlatifyCSS Authors
       * Licensed under MIT (https://github.com/amir2mi/flatifycss/blob/master/LICENSE)
       */
      // Components
      // Forms
      // Helpers

      /***/

    },

    /***/
    277:
    /***/
    function (__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {
      /* harmony import */
      var _utils_vent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(641);
      /* harmony import */


      var _utils_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(235);

      document.addEventListener("DOMContentLoaded", () => {
        (0, _utils_vent__WEBPACK_IMPORTED_MODULE_0__
        /* ["default"] */
        .Z)(".input-wrapper").on("click", ".show-password-button", function (e) {
          // prevent focus to other inputs
          e.preventDefault();
          const wrapper = this.closest(".input-wrapper"); // return if show password button does not have wrapper with [.input-wrapper] class

          if (!wrapper) {
            return (0, _utils_logger__WEBPACK_IMPORTED_MODULE_1__
            /* ["default"] */
            .Z)("error", "Show password button is not in an '.input-wrapper'", this.parentElement);
          }

          const input = wrapper.querySelector("input"); // return if show password button does not have wrapper with [.input-wrapper] class

          if (!input) {
            return (0, _utils_logger__WEBPACK_IMPORTED_MODULE_1__
            /* ["default"] */
            .Z)("error", "Show password button should be inside '.input-wrapper' with input type password", this.parentElement);
          }

          wrapper.classList.toggle("visible-password");
          input.type = wrapper.classList.contains("visible-password") ? "text" : "password";
        });
      });
      /***/
    },

    /***/
    291:
    /***/
    function (__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {
      /* harmony import */
      var _utils_vent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(641);
      /* harmony import */


      var _utils_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(235);

      document.addEventListener("DOMContentLoaded", () => {
        (0, _utils_vent__WEBPACK_IMPORTED_MODULE_0__
        /* ["default"] */
        .Z)(document).on("click", ".toggle-truncate", function (e) {
          if (e.target.classList.contains("truncate")) {
            // if truncate class was added directly to the element
            e.target.classList.toggle("show-text");
          } else {
            // if there is a target that should be truncated
            const target = e.target.getAttribute("data-truncation-target");
            const texts = document.querySelectorAll(target);
            if (!texts.length) return (0, _utils_logger__WEBPACK_IMPORTED_MODULE_1__
            /* ["default"] */
            .Z)("error", "No target found for '".concat(target, "' to be truncated"));
            texts.forEach(text => text.classList.toggle("show-text"));
          }
        });
      });
      /***/
    },

    /***/
    238:
    /***/
    function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "o": function () {
          return (
            /* binding */
            getChildIndex
          );
        }
        /* harmony export */

      });
      /**
       * Get node index inside parent
       * @param {Object} node
       * @returns {number}
       * @author gsnedders <https://stackoverflow.com/a/4649781/15172167>
       */


      function getChildIndex(node) {
        return Array.prototype.indexOf.call(node.parentNode.children, node);
      }
      /***/

    },

    /***/
    235:
    /***/
    function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Z": function () {
          return (
            /* binding */
            logger
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(162);
      /**
       * Log a message in the console or another services,
       * It will log if [enableLogging] is true in config.json.
       *
       * @param type {string} console logging type can be info, warn or error.
       * @param message {string} console logging type.
       * @param data {any} Attached data for further information.
       */


      function logger(type, message, data) {
        if (_config__WEBPACK_IMPORTED_MODULE_0__
        /* .enableLogging */
        .U7 === true) {
          message = "".concat(_config__WEBPACK_IMPORTED_MODULE_0__
          /* .name */
          .u2, ": ").concat(message);
          return data ? console[type](message, data) : console[type](message);
        }
      }
      /***/

    },

    /***/
    641:
    /***/
    function (__unused_webpack_module, __webpack_exports__) {
      /**
       * Vent, jQuery inspired DOM events library
       * @url https://github.com/ealush/vent
       */
      (exports => {
        const savedEvents = [];
        /**
         * Naively checks if a given event name is a native event.
         * @param {String} event Name of the event to test
         * @returns {Boolean}
         */

        const isNativeEvent = event => typeof document["on".concat(event)] !== "undefined";
        /**
         * Checks if an event target is our intended target to call the handler for.
         * @param {HTMLElement} eventTarget Target passed from event.
         * @param {String} delegatedTarget Selector of a delegation target.
         * @param {HTMLElement} originalTarget "Main" (non delegated) target.
         * @returns {Boolean}
         */


        const isTarget = (eventTarget, delegatedTarget, originalTarget) => {
          /**
           * If no delegate passed, then the event must have been called on
           * on the original target or its descendents. No questions asked.
           */
          if (!delegatedTarget || typeof delegatedTarget !== "string") {
            return true;
          }
          /**
           * True if:
           * 1. The event target matches the delegate target
           * 2. The event target is a descendent of the delegate target.
           */


          return matches(eventTarget, delegatedTarget) || originalTarget.contains(eventTarget.closest(delegatedTarget));
        };
        /**
         * Checks that a given element complies with a supplied selector.
         * @param {HTMLElement} target Target element to test.
         * @param {String} selector Selector to test the element with.
         * @returns {Boolean}
         */


        const matches = (target, selector) => {
          if (!target) {
            return false;
          }

          if (typeof target.matches === "function") {
            return target.matches(selector);
          } else if (typeof target.msMatchesSelector === "function") {
            return target.msMatchesSelector(selector);
          }

          return false;
        };
        /**
         * Generates a list of nodes from a selector or an EventTarget.
         * @param {*} nodes
         * @returns {Array<EventTarget>}
         */


        const parseNode = nodes => {
          if (!nodes) {
            return [];
          }

          if (typeof nodes === "string") {
            return [...document.querySelectorAll(nodes)];
          } else if (nodes instanceof NodeList) {
            return [...nodes];
          } else if (typeof nodes.addEventListener === "function") {
            return [nodes];
          }

          return [];
        };
        /**
         * Splits a string by ' ' and removes duplicates.
         * @param {String} events
         * @returns {Array<String>}
         */


        const splitEvents = events => {
          if (typeof events !== "string") {
            return [];
          }

          const uniqueEvents = events.split(" ").reduce((_ref, current) => {
            let {
              keys,
              existing
            } = _ref;

            if (existing[current]) {
              return {
                keys,
                existing
              };
            }

            return {
              keys: [...keys, current],
              existing: { ...existing,
                [current]: true
              }
            };
          }, {
            keys: [],
            existing: {}
          });
          return uniqueEvents.keys;
        };
        /**
         * Registers either a one time or a permanent listener on an EventTarget.
         * @param {EventTarget} target Target to add listener to.
         * @param {String} eventName Name of the event to listen to.
         * @param {Function} handler Handler callback function.
         * @param {Object} options.
         * @param {String} options.delegate Selector for delegation.
         * @param {Boolean} options.once Determines whether the handler should run once or more.
         */


        const listen = (target, eventName, handler, _ref2) => {
          let {
            delegate,
            once
          } = _ref2;

          // Instead of using the user's own handler, we wrap it with our own.
          // This is so we can implement deleg
          const delegateHandler = e => {
            if (isTarget(e.target, delegate, target)) {
              const data = e && e.detail;
              handler.call(delegate ? e.target : target, e, data);

              if (once) {
                target.removeEventListener(eventName, delegateHandler);
              }
            }
          }; // We're keeping a reference to the original handler
          // so the consumer can later on `off` that specific handler


          delegateHandler.originalHandler = handler;
          target.addEventListener(eventName, delegateHandler);

          if (!once) {
            setEvent(target, eventName, delegateHandler);
          }
        };
        /**
         * Dispatches an event on a target, or calls its `on` function.
         * @param {EventTarget} target Event target to dispatch the event on.
         * @param {String} events space separated list of event names;
         * @param {Object} detail EventTarget Detail Object.
         * @param {Object} options
         */


        const dispatch = (target, events, detail, options) => {
          const hasDispatch = typeof target.dispatchEvent === "function";
          splitEvents(events).forEach(eventName => {
            const nativeEvent = isNativeEvent(eventName);
            let event;

            if (detail || !nativeEvent) {
              event = new CustomEvent(eventName, Object.assign({
                detail,
                bubbles: true
              }, options));
            } else {
              event = new Event(eventName, Object.assign({
                bubbles: true
              }, options));
            }

            if (nativeEvent && typeof target[eventName] === "function") {
              target[eventName]();
            }

            if (!hasDispatch) {
              return;
            }

            target.dispatchEvent(event);
          });
        };
        /**
         * Stores target and its events for later access.
         * @param {EventTarget} target An event target to store.
         * @param {String} event Event Name.
         * @param {Function} handler Event handler function.
         */


        const setEvent = (target, event, handler) => {
          if (!target || !event || !handler) {
            return;
          }

          const targetIndex = savedEvents.findIndex(_ref3 => {
            let [current] = _ref3;
            return current === target;
          }); // Get the existing target reference, or default to an empty object.

          const [_, targetEvents] = savedEvents[targetIndex] || [target, {}];
          targetEvents[event] = targetEvents[event] || [];
          targetEvents[event].push(handler);

          if (targetIndex === -1) {
            savedEvents.push([target, targetEvents]);
          } else {
            savedEvents[targetIndex] = [target, targetEvents];
          }
        };
        /**
         * Removes Target events from storage
         * @param {EventTarget} target EventTarget to remove.
         * @param {String} [events] List of events to remove from storage.
         * @param {Function} [handler] Funtion to remove.
         */


        const deleteEvents = (target, events, handler) => {
          const targetIndex = savedEvents.findIndex(_ref4 => {
            let [current] = _ref4;
            return current === target;
          });

          if (targetIndex === -1) {
            return;
          }

          const [, targetEvents] = savedEvents[targetIndex];
          const eventsArray = splitEvents(events); // Do this for each of the existing events for the current target.

          for (const event in targetEvents) {
            if ( // * The consumer requested to remove the current event name
            //    or if the user did not specify an event name
            (eventsArray.indexOf(event) !== -1 || !events) && // * And the current target has this event registered
            Object.prototype.hasOwnProperty.call(targetEvents, event) && // * And it is an array (safeguard)
            Array.isArray(targetEvents[event])) {
              // Filter out the events that the consumer wanted to remove
              targetEvents[event] = targetEvents[event].filter(currentHandler => {
                // If the consumer specified a specific handler to remove
                if (handler) {
                  // and the handler doesn't match the current handler
                  if (currentHandler.originalHandler !== handler) {
                    // keep it in
                    return true;
                  } else {
                    // filter it out and remove its listener;
                    target.removeEventListener(event, currentHandler);
                    return false;
                  }
                } else {
                  // Remove all handlers for current event name
                  target.removeEventListener(event, currentHandler);
                  return false;
                }
              });

              if (!events) {
                // Clear all the events
                delete targetEvents[event];
              }
            }
          }

          if (!events) {
            savedEvents.splice(targetIndex, 1);
          }
        };

        window["Vent"] = function Vent() {
          this.length = 0;
          this.add(...arguments);
        };

        const vent = function () {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          return new window["Vent"](...args);
        };

        window["vent"] = vent; // Mocks native splice

        window["Vent"].prototype["splice"] = function () {
          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }

          return Array.prototype.splice.apply(this, args);
        }; // Mocks native forEach


        window["Vent"].prototype["each"] = function () {
          for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            args[_key3] = arguments[_key3];
          }

          Array.prototype.forEach.call(this, ...args);
          return this;
        };

        window["Vent"].prototype["add"] = function () {
          for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
            args[_key4] = arguments[_key4];
          }

          args.forEach(selector => {
            const nodeList = parseNode(selector);
            nodeList.forEach(node => {
              for (let i = 0; i < this.length; i++) {
                if (this[i] === node) {
                  return;
                }
              }

              this[this.length] = node;
              this.length++;
            });
          });
          return this;
        };

        window["Vent"].prototype["on"] = function () {
          for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
            args[_key5] = arguments[_key5];
          }

          return bindEvents(this, {}, args);
        };

        window["Vent"].prototype["once"] = function () {
          for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
            args[_key6] = arguments[_key6];
          }

          return bindEvents(this, {
            once: true
          }, args);
        };

        window["Vent"].prototype["off"] = function (events, handler) {
          return this["each"](target => deleteEvents(target, events, handler));
        };

        window["Vent"].prototype["trigger"] = function (events) {
          let {
            data,
            options
          } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          return this["each"](target => dispatch(target, events, data, options));
        };

        const bindEvents = (instance, options, _ref5) => {
          let [events, ...args] = _ref5;

          if (!args.length) {
            // no handler. bye.
            return;
          } // One liner for:
          // [handler] = args
          // [delegate, handler] = args


          const {
            length,
            [length - 1]: handler,
            [length - 2]: delegate
          } = args;
          const eventsArray = splitEvents(events);
          return instance["each"](node => eventsArray.forEach(event => listen(node, event, handler, { ...options,
            delegate
          })));
        };

        return window["vent"];
      })();
      /* harmony default export */


      __webpack_exports__["Z"] = window["vent"];
      /***/
    },

    /***/
    162:
    /***/
    function (module) {
      module.exports = JSON.parse('{"u2":"FlatifyCSS","U7":true,"q5":[0,20],"FL":[0,0],"pq":[0,10]}');
      /***/
    }
    /******/

  };
  /************************************************************************/

  /******/
  // The module cache

  /******/

  var __webpack_module_cache__ = {};
  /******/

  /******/
  // The require function

  /******/

  function __webpack_require__(moduleId) {
    /******/
    // Check if module is in cache

    /******/
    var cachedModule = __webpack_module_cache__[moduleId];
    /******/

    if (cachedModule !== undefined) {
      /******/
      return cachedModule.exports;
      /******/
    }
    /******/
    // Create a new module (and put it into the cache)

    /******/


    var module = __webpack_module_cache__[moduleId] = {
      /******/
      // no module.id needed

      /******/
      // no module.loaded needed

      /******/
      exports: {}
      /******/

    };
    /******/

    /******/
    // Execute the module function

    /******/

    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
    /******/

    /******/
    // Return the exports of the module

    /******/


    return module.exports;
    /******/
  }
  /******/

  /************************************************************************/

  /******/

  /* webpack/runtime/define property getters */

  /******/


  !function () {
    /******/
    // define getter functions for harmony exports

    /******/
    __webpack_require__.d = function (exports, definition) {
      /******/
      for (var key in definition) {
        /******/
        if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
          /******/
          Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key]
          });
          /******/
        }
        /******/

      }
      /******/

    };
    /******/

  }();
  /******/

  /******/

  /* webpack/runtime/hasOwnProperty shorthand */

  /******/

  !function () {
    /******/
    __webpack_require__.o = function (obj, prop) {
      return Object.prototype.hasOwnProperty.call(obj, prop);
    };
    /******/

  }();
  /******/

  /************************************************************************/

  /******/

  /******/
  // startup

  /******/
  // Load entry module and return exports

  /******/

  __webpack_require__(891);
  /******/
  // This entry module is referenced by other modules so it can't be inlined

  /******/


  __webpack_require__(24);
  /******/


  __webpack_require__(2);
  /******/


  __webpack_require__(82);
  /******/


  __webpack_require__(619);
  /******/


  __webpack_require__(752);
  /******/


  __webpack_require__(277);
  /******/


  __webpack_require__(291);
  /******/


  __webpack_require__(238);
  /******/


  __webpack_require__(235);
  /******/


  var __webpack_exports__ = __webpack_require__(641);
  /******/

  /******/

})();
//# sourceMappingURL=../maps/flatify.js.map
