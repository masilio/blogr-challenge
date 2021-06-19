

const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");

/* Toggle mobile menu */
function toggleMenu() {
    if (menu.classList.contains("active__link")) {
        menu.classList.remove("active__link");

        // adds the menu (hamburger) icon
        toggle.querySelector("a").innerHTML = `<img src="img/icon-hamburger.svg" />`;
    } else {
        menu.classList.add("active__link");

        // adds the close (x) icon
        toggle.querySelector("a").innerHTML = `<img src="img/icon-close.svg" />`;
    }
}

/* Event Listener */
toggle.addEventListener("click", toggleMenu, false);
