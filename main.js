let headerBars = document.querySelector(".header__menu-bars");
let headerMenu = document.querySelector(".header__menu");

headerBars.addEventListener("click", () => {
    headerMenu.classList.toggle("active");
    if (headerMenu.classList.contains("active")) {
        headerBars.innerHTML = "<i class='fa-solid fa-xmark'></i>";
    } else {
        headerBars.innerHTML = "<i class='fa-solid fa-bars-staggered'></i>";
    };
});