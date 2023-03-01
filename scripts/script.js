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
const burgerMenu = document.getElementById("burger-menu");
const links = document.querySelector(".links");

burgerMenu.addEventListener("click", function () {
    this.classList.toggle("close");
    links.classList.toggle("overlay");
});

//NavBar
const navbar = document.getElementById("nav");
const goUp = document.querySelector(".goUp");

window.addEventListener("scroll", function () {
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;

    if (scrollHeight > navHeight) {
        navbar.classList.add("fixed-nav");
    } else {
        navbar.classList.remove("fixed-nav");
    }

    if (scrollHeight > 500) {
        goUp.classList.add("show-up");
    } else {
        goUp.classList.remove("show-up");
    }
});

const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        // navigate to specific spot
        const id = e.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id);
        //calculate height
        const navHeight = navbar.getBoundingClientRect().height;
        const fixedNav = navbar.classList.contains("fixed-nav");
        let position = element.offsetTop - navHeight;

        if (!fixedNav) {
            position = position - navHeight;
        }
        // else {
        //     console.log(links.style.minHeight);
        //     links.style.minHeight = "100%" - navHeight;
        // }

        window.scrollTo({
            left: 0,
            top: position,
        });
        links.classList.remove("overlay");
        burgerMenu.classList.remove("close");
    });
});
