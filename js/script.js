
"use strict";

const menuToggle = document.querySelector("#menu-toggle");
const mainMenu = document.querySelector("#main-menu");

if (menuToggle && mainMenu) {
    menuToggle.addEventListener("click", () => {
        const isOpen = mainMenu.classList.toggle("is-open");

        menuToggle.setAttribute("aria-expanded", String(isOpen));

        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );
    });

    mainMenu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            mainMenu.classList.remove("is-open");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Open navigation menu");
        });
    });
}

const contactForm = document.querySelector("#contact-form");

const validationRules = {
    name: {
        pattern: /^[\p{L}\p{M}'’. -]{3,50}$/u,
        message: "Please enter a valid name between 3 and 50 characters."
    },

    email: {
        pattern: /^[^\s@]+@[^\s@.]+(?:\.[^\s@.]{2,})+$/,
        message: "Please enter a valid email address."
    },

    phone: {
        pattern: /^(?:\+94|0)\d{9}$/,
        message: "Please enter a valid Sri Lankan phone number."
    },

    subject: {
        pattern: /^[\p{L}\p{N}\s.,'’&()\/-]{5,80}$/u,
        message: "Please select a valid subject."
    },

    message: {
        pattern: /^[\s\S]{20,600}$/,
        message: "Message must be between 20 and 600 characters."
    },

    consent: {
        message: "Please agree to be contacted."
    }
};

function getErrorElement(field) {

    let error = field.parentElement.querySelector(".field-error");

    if (!error) {

        error = document.createElement("small");

        error.className = "field-error";

        error.setAttribute("aria-live", "polite");

        field.parentElement.appendChild(error);
    }

    return error;
}

function validateField(field) {

    const fieldName = field.name;
    const rule = validationRules[fieldName];

    if (!rule) {
        return true;
    }


    let value = field.value.trim();

    if (fieldName === "phone") {
        value = value.replace(/[\s-]/g, "");
    }

    let isValid = true;

    if (fieldName === "consent") {
        isValid = field.checked;
    }
    else if (fieldName === "subject") {
        isValid =
        value !== "" &&
        rule.pattern.test(value);
    }
    else {
        isValid =
        value !== "" &&
        rule.pattern.test(value);
    }

    const errorElement = getErrorElement(field);

    if (!isValid) {
        field.setAttribute("aria-invalid", "true");
        errorElement.textContent = rule.message;
        return false;
    }

    field.removeAttribute("aria-invalid");

    errorElement.textContent = "";

    return true;
}

const contactFields = contactForm
    ? contactForm.querySelectorAll(
        "input[name], select[name], textarea[name]"
    )
    : [];


contactFields.forEach((field) => {

    field.dataset.touched = "false";

    field.addEventListener("blur", () => {

        field.dataset.touched = "true";
        validateField(field);

    });

    field.addEventListener("input", () => {

        if (field.dataset.touched === "true") {
            validateField(field);
        }

    });

    field.addEventListener("change", () => {

        if (field.dataset.touched === "true") {
            validateField(field);
        }

    });

});

if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();

        let formIsValid = true;

        contactFields.forEach((field) => {
            field.dataset.touched = "true";

            if (!validateField(field)) {
                formIsValid = false;
            }
        });

        if (!formIsValid) {
            const firstInvalidField =
                contactForm.querySelector('[aria-invalid="true"]');

            if (firstInvalidField) {
                firstInvalidField.focus();
            }

            return;
        }

        alert(
            "Thank you! Your message has been validated successfully."
        );

        contactForm.reset();

        contactFields.forEach((field) => {
            field.dataset.touched = "false";
            field.removeAttribute("aria-invalid");

            const error =
                field.parentElement.querySelector(".field-error");

            if (error) {
                error.textContent = "";
            }
        });
    });
}

const newsletterForm = document.querySelector("#newsletter-form");
const newsletterEmail = newsletterForm
    ? newsletterForm.querySelector('input[type="email"]')
    : null;

if (newsletterForm && newsletterEmail) {
    newsletterForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const email = newsletterEmail.value.trim();
        const emailPattern =
            /^[^\s@]+@[^\s@.]+(?:\.[^\s@.]{2,})+$/;

        if (!emailPattern.test(email)) {
            newsletterEmail.setAttribute("aria-invalid", "true");
            alert("Please enter a valid email address.");
            newsletterEmail.focus();
            return;
        }

        newsletterEmail.removeAttribute("aria-invalid");

        alert("Thank you for subscribing to our newsletter!");
        newsletterForm.reset();
    });
}

const learnMoreButtons = document.querySelectorAll(".learn-more");

learnMoreButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const currentNotes = button.previousElementSibling;
        const isCurrentlyHidden = currentNotes.hasAttribute("hidden");

        learnMoreButtons.forEach((otherButton) => {
            const otherNotes = otherButton.previousElementSibling;

            if (otherButton !== button) {
                otherNotes.setAttribute("hidden", "");
                otherButton.setAttribute("aria-expanded", "false");
                otherButton.textContent = "Learn More";
            }
        });

        if (isCurrentlyHidden) {
            currentNotes.removeAttribute("hidden");
            button.setAttribute("aria-expanded", "true");
            button.textContent = "Show Less";
        } else {
            currentNotes.setAttribute("hidden", "");
            button.setAttribute("aria-expanded", "false");
            button.textContent = "Learn More";
        }
    });
});

const serviceLearnMoreButtons =
    document.querySelectorAll(".service-learn-more");

serviceLearnMoreButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const currentNotes = button.previousElementSibling;
        const isCurrentlyHidden =
            currentNotes.hasAttribute("hidden");

        serviceLearnMoreButtons.forEach((otherButton) => {
            const otherNotes =
                otherButton.previousElementSibling;

            if (otherButton !== button) {
                otherNotes.setAttribute("hidden", "");
                otherButton.setAttribute("aria-expanded", "false");
                otherButton.textContent = "Learn More";
            }
        });

        if (isCurrentlyHidden) {
            currentNotes.removeAttribute("hidden");
            button.setAttribute("aria-expanded", "true");
            button.textContent = "Show Less";
        } else {
            currentNotes.setAttribute("hidden", "");
            button.setAttribute("aria-expanded", "false");
            button.textContent = "Learn More";
        }
    });
});


/* TechLaunch scroll reveal animation */
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("main section");

    if (!("IntersectionObserver" in window)) {
        sections.forEach((section) => {
            section.classList.add("reveal-visible");
        });
        return;
    }

    const observer = new IntersectionObserver(
        (entries, currentObserver) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("reveal-visible");
                    currentObserver.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.12
        }
    );

    sections.forEach((section) => {
        observer.observe(section);
    });
});


document.querySelectorAll(".image-toggle-btn").forEach((button) => {
    button.addEventListener("click", () => {
        const containerId = button.getAttribute("aria-controls");
        const container = document.getElementById(containerId);

        if (!container) return;

        const showImages = container.hidden;

        container.hidden = !showImages;
        button.setAttribute("aria-expanded", String(showImages));

        const text = button.querySelector(".button-text");
        const icon = button.querySelector(".button-icon");

        if (text) {
            text.textContent = showImages ? "Hide Images" : "Show Images";
        }

        if (icon) {
            icon.textContent = showImages ? "−" : "＋";
        }
    });
});
