const hamBtn = document.querySelector(".fa-bars");
const nav = document.querySelector("ul");


const showNav = () => {
    nav.classList.toggle("nav-visibility");
}

hamBtn.addEventListener("click", showNav)