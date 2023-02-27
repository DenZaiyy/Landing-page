const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        // navigate to specific spot
        const id = e.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id);

        window.scrollTo({
            left: 0,
            top: element.offsetTop,
        });
    });
});

// Option toggle colors
const gearOption = document.querySelector(".square-option");
const option = document.querySelector(".options");

gearOption.addEventListener("click", function () {
    option.classList.toggle("active");
    gearOption.classList.toggle("active");
});

// Testing colors change
const colors = document.querySelectorAll(".color");

colors.forEach(function (color) {
    color.addEventListener("click", function () {
        const style = getComputedStyle(color);
        const bgColor = `${style.backgroundColor}`;
        document.documentElement.style.setProperty("--clr-gradient", bgColor);
        document.documentElement.style.setProperty("--clr-cyan", bgColor);
    });
});

//Burger menu

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
    links.classList.toggle("show-links");
});
