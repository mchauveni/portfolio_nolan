window.addEventListener("load", function () {

    const soundwaveContainer = document.querySelector(".navbar-sound-container");
    const soundwaveItem = document.querySelectorAll(".soundwave-wave");
    const menuButton = document.querySelector(".navbar-menu-button");
    const burgerSpan = document.querySelectorAll(".burger-span");
    const navbar = document.querySelector(".navbar");
    const navbarMenuContent = document.querySelector(".navbar-menu-content");


    soundwaveContainer.style.height = menuButton.clientHeight + "px";


    soundwaveContainer.addEventListener("click", function () {
        soundwaveItem.forEach(element => {
            element.classList.toggle("animation-paused");
            element.classList.toggle("soundwave--start");
        })
    })


    menuButton.addEventListener("click", function () {
        burgerSpan[0].classList.toggle("burger-span1--active");
        burgerSpan[1].classList.toggle("burger-span2--active");

        navbarMenuContent.classList.toggle("navbar-menu-content--active");
    })

    navbarMenuContent.style.top = navbar.clientHeight + "px";

    let copy = document.querySelectorAll(".copy");
    let copy_popup = document.querySelector(".copy-popup");

    copy.forEach(element => {
        element.addEventListener("click", (e) => {
            copy_popup.style.left = e.clientX + "px";
            copy_popup.style.top = e.clientY + "px";
            copy_popup.style.visibility = "visible";
            setTimeout(() => {
                copy_popup.style.visibility = "hidden";
            }, 1500);
            navigator.clipboard.writeText("nolan.luzet@gmail.com");
        });
    })

    this.document.addEventListener('mousemove', (e) => {
        copy_popup.style.left = e.clientX + 6 + "px";
        copy_popup.style.top = e.clientY + 6 + "px";

    })



})