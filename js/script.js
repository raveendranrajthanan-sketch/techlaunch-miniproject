"use strict";

const menuToggle = document.querySelector("#menu-toggle");
const mainMenu = document.querySelector("#main-menu");

if (menuToggle && mainMenu) {

    menuToggle.addEventListener("click", () => {

        const isOpen = mainMenu.classList.toggle("is-open");

        menuToggle.setAttribute(
            "aria-expanded",
            String(isOpen)
        );
    });


    mainMenu.querySelectorAll("a").forEach((link) => {

        link.addEventListener("click", () => {

            mainMenu.classList.remove("is-open");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );
        });

    });
}

/* ================================
   Contact Form Validation
================================ */

const contactForm = document.querySelector("#contact-form");

const validationRules = {
    name: {
        pattern: /^[\p{L}\p{M}'’.\- ]{3,50}$/u,
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
        pattern: /^[\p{L}\p{N}\s.,'’&()\/\-]{5,80}$/u,
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


/* Create error message */

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


/* Generic validation function */

function validateField(field) {

    const fieldName = field.name;
    const rule = validationRules[fieldName];

    if (!rule) {
        return true;
    }


    let value = field.value.trim();

    /* Remove spaces and hyphens from phone */

    if (fieldName === "phone") {
        value = value.replace(/[\s-]/g, "");
    }


    let isValid = true;


    /* Checkbox */

    if (fieldName === "consent") {

        isValid = field.checked;

    }

    /* Subject */

    else if (fieldName === "subject") {

        isValid =
            value !== "" &&
            rule.pattern.test(value);

    }

    /* Other fields */

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


/* Track touched fields */

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


/* Form submit */

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


        if (formIsValid) {

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
        }

    });

}

/* ================================
   Newsletter Form
================================ */

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