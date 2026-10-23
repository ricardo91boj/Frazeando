// Navbar toggle
const toggle = document.querySelector(".navbar__toggle");
const menu = document.querySelector(".navbar__menu");

// Open / close the menu when the button is clicked
toggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", isOpen);
    toggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
});

// Close the menu after clicking a link
menu.querySelectorAll(".navbar__link").forEach((link) => {
    link.addEventListener("click", () => {
        menu.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Open menu");
    });
});