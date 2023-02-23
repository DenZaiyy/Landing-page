const infos = [
    {
        icon: "fa-globe",
        name: "Digital Design",
        desc: "Some quick example text to build on the card title and make up the bulk of the card the platform.",
    },
    {
        icon: "fa-brush",
        name: "Unlimited Colors",
        desc: "Credibly brand stanaads compliant user exteible services College Anibh ocean euismod tincidunt looreet.",
    },
    {
        icon: "fa-chess",
        name: "Strategy Solutions",
        desc: "Separated they live in Bookmarks grove right at the coast of the Semantics, a large ocean regelialia.",
    },
];

const cardEl = document.querySelector(".cards");
let cardDOM = "";

for (let i = 0; i < infos.length; i++) {
    cardDOM += `
        <div class="card">
            <div class="icon">
                <i class="fa-solid ${infos[i].icon} fa-3x"></i>
            </div>
            <p class="title">${infos[i].name}</p>
            <p class="desc">${infos[i].desc}</p>
        </div>
    `;

    cardEl.innerHTML = cardDOM;
}

// Navigation

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
        console.log(bgColor);

        body.style.backgroundColor = bgColor;
        // console.log(nameOfclass);
        // nameOfclass.style.backgroundColor;
    });
});
