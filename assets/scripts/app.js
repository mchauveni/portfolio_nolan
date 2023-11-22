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


    menuButton.addEventListener("click", function(){
        burgerSpan[0].classList.toggle("burger-span1--active");
        burgerSpan[1].classList.toggle("burger-span2--active");

        navbarMenuContent.classList.toggle("navbar-menu-content--active");
    })

    navbarMenuContent.style.top = navbar.clientHeight + "px";

})