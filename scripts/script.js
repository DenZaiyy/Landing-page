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

gearOption.addEventListener("click", function () {
    const option = document.querySelector(".options");

    option.classList.toggle("active");
});

// Testing colors change
const body = document.querySelector("body");

const colors = document.querySelectorAll(".color");

colors.forEach(function (color) {
    color.addEventListener("click", function () {
        const style = getComputedStyle(color);
        const bgColor = `${style.backgroundColor}`;
        document.documentElement.style.setProperty('--clr-gradient', bgColor)
        document.documentElement.style.setProperty('--clr-cyan', bgColor);
    });
});
