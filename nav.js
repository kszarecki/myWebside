//download elements
const hamBar = document.querySelector(".fa-bars");
const crossBar = document.querySelector(".fa-times");
const ul = document.querySelector("ul");
const navElement = document.querySelector(".nav-a");


//add/less visibility
const switchOn = () => {
    crossBar.classList.toggle("visibility");
    hamBar.classList.toggle("invisibility");
    ul.classList.toggle("visibility");
}

const switchOff = () => {
    hamBar.classList.toggle("invisibility");
    crossBar.classList.toggle("visibility");
    ul.classList.toggle("visibility");
}

// const hideMenu = () => {
//     ul.classList.toggle("invisibility");
// }


//buttons events
hamBar.addEventListener("click", switchOn);
crossBar.addEventListener("click", switchOff);
// navElement.addEventListener("click", hideMenu);