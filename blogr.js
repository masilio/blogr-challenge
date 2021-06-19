

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


const items = document.querySelectorAll(".item");

/* Activate Submenu */
function toggleItem() {
    if (this.classList.contains("submenu-active")) {
        this.classList.remove("submenu-active");
    } else if (menu.querySelector(".submenu-active")) {
        menu.querySelector(".submenu-active").classList.remove("submenu-active");
        this.classList.add("submenu-active");
    } else {
        this.classList.add("submenu-active");
    }
}

/* Event Listeners */
for (let item of items) {
    if (item.querySelector(".submenu")) {
        item.addEventListener("click", toggleItem, false);
        item.addEventListener("keypress", toggleItem, false);
    }
}

/* Close Submenu From Anywhere */
function closeSubmenu(e) {
    let isClickInside = menu.contains(e.target);

    if (!isClickInside && menu.querySelector(".submenu-active")) {
        menu.querySelector(".submenu-active").classList.remove("submenu-active");
    }
}

/* Event listener */
document.addEventListener("click", closeSubmenu, false);